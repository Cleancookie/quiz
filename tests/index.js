
const test = async () => {
    const puppeteer = require('puppeteer');;

    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto('https://the-shelter-quiz.herokuapp.com/', {
        waitUntil: 'networkidle2',
    });

    setInterval(() => {
        let x = Math.floor(Math.random() * (550 - 10 + 1) + 10);
        let y = Math.floor(Math.random() * (600 - 10 + 1) + 10);
        page.mouse.click(x, y);
    }, 50)
};


test();
test();
test();
test();