const test = async () => {
    const puppeteer = require('puppeteer');

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    let url = 'https://the-shelter-quiz.herokuapp.com/';
     url = 'http://localhost:3000';
    await page.goto(url, {
        waitUntil: 'networkidle2',
    });

    setInterval(() => {
        let x = Math.floor(Math.random() * (550 - 10 + 1) + 10);
        let y = Math.floor(Math.random() * (600 - 10 + 1) + 10);
        page.mouse.click(x, y);
    }, 5000);
};

test();
