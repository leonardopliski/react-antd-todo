const qawolf = require('qawolf');
const selectors = require('./selectors/create-todo.json');

let browser;
let page;

beforeAll(async () => {
  browser = await qawolf.launch();
  const context = await browser.newContext();
  await qawolf.register(context);
  page = await context.newPage();
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test('create-todo', async () => {
  await page.goto('http://localhost:3000/');
  await page.click(selectors['0_what_needs_to_b_input']);
  await page.type(selectors['1_what_needs_to_b_input'], 'Book flis');
  await page.press(selectors['2_what_needs_to_b_input'], 'Backspace');
  await page.type(selectors['3_what_needs_to_b_input'], 'ghts to irelant');
  await page.press(selectors['4_what_needs_to_b_input'], 'Backspace');
  await page.type(selectors['5_what_needs_to_b_input'], 'd');
  await page.press(selectors['6_what_needs_to_b_input'], 'ArrowLeft');
  await page.press(selectors['7_what_needs_to_b_input'], 'ArrowLeft');
  await page.press(selectors['8_what_needs_to_b_input'], 'ArrowLeft');
  await page.press(selectors['9_what_needs_to_b_input'], 'ArrowLeft');
  await page.press(selectors['10_what_needs_to_b_input'], 'ArrowLeft');
  await page.press(selectors['11_what_needs_to_b_input'], 'ArrowLeft');
  await page.press(selectors['12_what_needs_to_b_input'], 'Backspace');
  await page.type(selectors['13_what_needs_to_b_input'], 'I');
  await page.click(selectors['14_what_needs_to_b_input']);
  await page.click(selectors['15_button']);
  await page.click(selectors['16_what_needs_to_b_input']);
  await page.type(
    selectors['17_what_needs_to_b_input'],
    'Prepare the college presentation'
  );
  await page.click(selectors['18_button']);
  await page.click(selectors['19_what_needs_to_b_input']);
  await page.type(
    selectors['20_what_needs_to_b_input'],
    'Add some new features to the todo list'
  );
  await page.press(selectors['21_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['22_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['23_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['24_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['25_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['26_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['27_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['28_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['29_what_needs_to_b_input'], 'Backspace');
  await page.type(selectors['30_what_needs_to_b_input'], 'react antd todo p');
  await page.press(selectors['31_what_needs_to_b_input'], 'Backspace');
  await page.type(selectors['32_what_needs_to_b_input'], 'list project');
  await page.click(selectors['33_button']);
  await page.click(selectors['34_what_needs_to_b_input']);
  await page.press(selectors['36_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['37_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['38_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['39_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['40_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['41_what_needs_to_b_input'], 'Backspace');
  await page.type(
    selectors['42_what_needs_to_b_input'],
    'Prepare a set of tools '
  );
  await page.press(selectors['43_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['44_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['45_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['46_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['47_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['48_what_needs_to_b_input'], 'Backspace');
  await page.type(selectors['49_what_needs_to_b_input'], 'be');
  await page.press(selectors['50_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['51_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['52_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['53_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['54_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['55_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['56_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['57_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['58_what_needs_to_b_input'], 'Backspace');
  await page.type(selectors['59_what_needs_to_b_input'], 'blog post ');
  await page.press(selectors['60_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['61_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['62_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['63_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['64_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['65_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['66_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['67_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['68_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['69_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['70_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['71_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['72_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['73_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['74_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['75_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['76_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['77_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['78_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['79_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['80_what_needs_to_b_input'], 'Backspace');
  await page.press(selectors['81_what_needs_to_b_input'], 'Backspace');
  await page.type(
    selectors['82_what_needs_to_b_input'],
    'Create a blog post about kawolf tests'
  );
  await page.click(selectors['83_button']);
  await page.click(selectors['84_div']);
  await page.click(selectors['85_button']);
  await page.click(selectors['86_button']);
  await page.click(selectors['87_button']);
  await page.click(selectors['88_button']);
  await page.click(selectors['89_button']);
  await page.click(selectors['90_what_needs_to_b_input']);
  await page.type(selectors['91_what_needs_to_b_input'], 'A nw');
  await page.press(selectors['92_what_needs_to_b_input'], 'Backspace');
  await page.type(selectors['93_what_needs_to_b_input'], 'ew todo');
  await page.press(selectors['94_what_needs_to_b_input'], 'Enter');
  await page.click(selectors['95_what_needs_to_b_input']);
  await page.type(
    selectors['96_what_needs_to_b_input'],
    'Create a set of todos'
  );
  await page.press(selectors['97_what_needs_to_b_input'], 'Enter');
  await page.click(selectors['98_button']);
  await page.click(selectors['99_button']);
  await page.click(selectors['100_button']);
  await page.click(selectors['101_button']);
  await page.click(selectors['102_button']);
  await page.click(selectors['103_button']);
  await page.click(selectors['104_li']);
  await page.click(selectors['105_button']);
  await page.click(selectors['106_button']);
  await page.click(selectors['107_button']);
  await page.click(selectors['108_button']);
  await page.click(selectors['109_button']);
});
