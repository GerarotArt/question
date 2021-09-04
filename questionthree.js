const puppeteer = require('puppeteer')
const funcode = process.argv[2]
const colcode = process.argv[3]
const GetData = async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://codequiz.azurewebsites.net/');
    await page.click('input[value="Accept"]');
    await page.waitForSelector('table')
    const datahtml = await page.evaluate(() => {
        var html  = [];
        const cols = Array.from(document.querySelectorAll('table tr th')).map(cols => cols.innerText)
        const rows = Array.from(document.querySelectorAll('table tr td')).map(rows => rows.innerText)
        let i = 0
        while (i < rows.length) {
            datatable = {}
            cols.forEach(e => {
                datatable[e] = rows[i]
                i++
            })
            html.push(datatable)
        }
        return html
    });
    const result = datahtml.filter(e => e['Fund Name'] === funcode)
    if (result.length > 0) console.log(result[0][colcode || 'Nav']);
    else console.log("No Data !!!");
    browser.close();
}
GetData()