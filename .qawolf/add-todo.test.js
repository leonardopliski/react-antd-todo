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

test('add-todo', async () => {
  await page.goto('http://localhost:3000/#');
  await page.click('#name');
  await page.type('#name', 'this is a sample todo');
  await page.click('.ant-btn');
  await page.click('text=this is a sample todo');
  await page.click('.ant-list-item');
});
