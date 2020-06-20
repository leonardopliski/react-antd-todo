const qawolf = require('qawolf');

let page;

beforeAll(async () => {
  browser = await qawolf.launch();
  const context = await browser.newContext();
  await qawolf.register(context);
  page = await context.newPage();
});

afterAll(async () => {
  await qawolf.stopVideos();
});

test('add-multiple-todos', async () => {
  await page.goto('http://localhost:3000/#');
  await page.type('#name', 'this is the first todo');
  await page.click('.ant-btn');
  await page.click('#name');
  await page.type('#name', 'this is the second todo');
  await page.click('.ant-btn');
  await page.click('#name');
  await page.type('#name', 'this is the third todo');
  await page.click('.ant-btn');
  await page.click('div:nth-of-type(3) .ant-card-body');
  await qawolf.scroll(page, 'html', { x: 0, y: 10 });
  await page.click('text=this is the first todo');
  await page.click('text=this is the first todo');
  await page.click('text=this is the second todo');
  await page.click('text=this is the second todo');
  await page.click('text=this is the third todo');
  await page.click('text=this is the third todo');
  await page.click('li:nth-of-type(3)');
});
