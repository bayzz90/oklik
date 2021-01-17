const delay = require('delay');
const fs = require('fs');
const readlineSync = require('readline-sync');
const { Console } = require('console');
const date = () => new Date().toLocaleTimeString();
const fetch = require('node-fetch');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const faker = require('faker');

function makeid(length) {
   var result           = '';
   var characters       = '1234567890';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
async function ip() {
    let fet = await fetch("https://httpbin.org/ip", {
        method: "GET",
        headers: {
            'Connection': 'keep-alive',
            'Accept': '*/*',
            'X-Requested-With': 'XMLHttpRequest',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7'
        }
    }).then((res) => res.json()).then((response) => { return response.origin });
    return fet;
}

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds;
  }



(async () => {
        const reff = readlineSync.question('reff mu : ');
        var stop = false;
        let i = 0;
        const pass = `koplak1234`;

        const email = `${faker.internet.userName()}${makeid(4)}@hotmail.com`;
          



  const browser = await puppeteer.launch({
            executablePath:'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe',
            headless:false,
            devtools:false,
        })


  const page = await browser.newPage()
  
  await page.evaluateOnNewDocument(() => {
    Object.defineProperty(navigator, 'webdriver', {
      get: () => false,
    });
  });
  await page.evaluateOnNewDocument(() => {
    // Overwrite the `plugins` property to use a custom getter.
    Object.defineProperty(navigator, 'plugins', {
      // This just needs to have `length > 0` for the current test,
      // but we could mock the plugins too if necessary.
      get: () => [1, 2, 3, 4, 5],
    });
  });
  const userAgent1 = fs.readFileSync('simpleua.txt', 'utf8').split(/\r\n|\r|\n/);
  const userAgent = userAgent1[Math.floor(Math.random() * userAgent1.length)];
await page.setUserAgent(userAgent);
//web

console.log(`\n[${date()}] IP Address : ${await ip()}`)
await page.goto(`https://m.aliexpress.com/account.html?spm=a2g0n..footer.d_account#/shipto`,{ waitUntil: 'networkidle2', timeout: 60000 });
const negara = await page.waitForSelector('#account-section > div > div > div.swipeable-views > div > div > ul > div:nth-child(2) > span',{visible:true,timeout:60000});await negara.click();
await delay(1000)
// console.log(`[${date()}] Using : ${email}`)
await page.goto(`${reff}`,{ waitUntil: 'networkidle2', timeout: 60000 })

await page.waitForSelector("div[class=goBtn___3aVca]" ,{visible:true,timeout: 60000 } )

const selectors1 = await page.$$("div[class=goBtn___3aVca]" ,{visible:true,timeout: 60000 } )
await selectors1[1].click()
await page.waitForTimeout(3000)
const q = await page.waitForSelector('body > div.modal-container.modal-drawer > div.drawer-container.drawer-bottom.bottom-drawer-container.sns-container > div.scroll-panel-content.bottom-drawer-content > div > a',{visible:true,timeout:60000})
await q.click()


await page.waitForSelector('#root > ul > li:nth-child(1)',{visible:true,timeout:60000})
await page.reload();
await delay(2000);
const regis = await page.waitForSelector('#root > ul > li:nth-child(1)',{visible:true,timeout:60000})
await regis.click();



await page.waitForSelector("#root > div.fm-tabs-content > div:nth-child(1) > div > div > div:nth-child(2) > input",{visible:true ,timeout:60000})
await page.type("#root > div.fm-tabs-content > div:nth-child(1) > div > div > div:nth-child(2) > input", `${email}`)
await delay(1000);
await page.waitForSelector("#root > div.fm-tabs-content > div:nth-child(1) > div > div > div:nth-child(3) > input",{visible:true ,timeout:60000})
await page.type("#root > div.fm-tabs-content > div:nth-child(1) > div > div > div:nth-child(3) > input",pass)
await delay(1000);
await page.reload();
const a = await page.waitForSelector('#root > ul > li:nth-child(1)',{visible:true,timeout:60000})
await a.click();
await delay(1000);
await page.waitForSelector("#root > div.fm-tabs-content > div:nth-child(1) > div > div > div:nth-child(2) > input",{visible:true ,timeout:60000})
await page.type("#root > div.fm-tabs-content > div:nth-child(1) > div > div > div:nth-child(2) > input", `${email}`)
await delay(1000);
await page.waitForSelector("#root > div.fm-tabs-content > div:nth-child(1) > div > div > div:nth-child(3) > input",{visible:true ,timeout:60000})
await page.type("#root > div.fm-tabs-content > div:nth-child(1) > div > div > div:nth-child(3) > input",pass)

const log = await page.waitForSelector('#root > div.fm-tabs-content > div:nth-child(1) > div > div > button',{visible:true,timeout:60000})
await log.click()

await page.waitForSelector("div[class=goBtn___3aVca]",{visible:true, timeout:60000})

await page.reload()

await delay(1000);

const selectors5 = await page.$$("div[class=goBtn___3aVca]")
await selectors5[0].click()


  console.log(`[${date()}] Status claim : Success.`)
  // await browser.close()
  await page.waitForSelector("h1[class=title___2ot4j]", {visible:true,timeout:60000})
  await page.tap("h1[class=title___2ot4j]")

  await delay(3000);

  const clipText = await page.evaluate('document.querySelector("#copylink").getAttribute("data-clipboard-text")');

    await fs.appendFileSync("complete.txt", `${email}|${pass}|${clipText}\n`, "utf-8");
console.log(`[${date()}] Link Reff : ${clipText}`)
    await browser.close()

})()