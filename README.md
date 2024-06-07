# Shorten Links using Deno

---

#### Project Overview
This project sends a message to a specified chat whenever a request is sent to the site. then The request is transferred to another site.

---

<details>
<summary>Example of Information Being Sent</summary>

```json
COUNTRY : France/iraq/Mexico/Germany/...+ country_flag
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
VPN : true/false
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
DEVICE : mobile/undefined/...
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
BROWSER : Chrome/Firefox/...
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
SYSTEM : Android/Windows/Linux/...
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
userAgent : long string of information

---------inline buttons---------

[**user ip**](ip2location.io)
[**User city name**](google.com/maps)

```
![Telegram Notification](https://telegra.ph/file/0dce46e217e85207b6ffd.jpg)
### [More Screenshots](https://telegra.ph/Screenshots-06-06-61)
</details>

#### Features
- **Country Information**: Displays Name of the country with its flag.
- **VPN Detection**: Indicates whether a VPN is being used.
- **Device Information**: Identifies the type of device (e.g., mobile).
- **Browser Information**: Specifies the browser used (e.g., Chrome).
- **System Information**: Provides the operating system details (e.g., Android).
- **User Agent String**: Includes detailed browser and system information in the user agent string.
- **Button 1**: The address is the user IP, and when you click on it, it takes you to a site containing the IP information.
- **Button 2**: The address is the user city name. When clicking on it, it takes you to Google Maps Using lat and lon.

#### Usage
1. Clone the repository from [GitHub](https://github.com/MOA-YAD/Who-is-this/fork).
2. Go to [@BotFather](BotFather.t.me) , create a bot and take its token
3. Get the chat ID Which you want to send notifications inside it
. **Note**: Make sure that the bot has permission to send messages in that chat
4. Go to [deno](deno.dev)
5. Log-in with the same gitHub account that contains the repository
6. Watch the [video](https://go.screenpal.com/player/cZ113eVN0gr?title=0)

#### deno env
- **ID**: Telegram chat id "Without spaces or letters"
- **URL**: The link you want to shorten 
- **TOKEN**: bot token from [@BotFather](BotFather.t.me) "Without space"

---

### Created by @MOA-YAD
#### [GitHub](GitHub.com/moa-yad) | [telegram](moa_yad.t.me) | [LICENSE](./LICENSE)
