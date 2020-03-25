const qawolf = require("qawolf");
const selectors = require("./selectors/create-todo-test.json");

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

test("create-todo-test", async () => {
  await page.goto("https://leonardopliski.github.io/react-antd-todo");
  await page.click(selectors["0_what_needs_to_b_input"]);
  await page.type(
    selectors["1_what_needs_to_b_input"],
    "Book flights to ireland "
  );
  await page.press(selectors["2_what_needs_to_b_input"], "Backspace");
  await page.click(selectors["3_button"]);
  await page.click(selectors["4_button"]);
  await page.click(selectors["5_button"]);
  await page.click(selectors["6_what_needs_to_b_input"]);
  await page.type(
    selectors["7_what_needs_to_b_input"],
    "Complete the college presentation"
  );
  await page.click(selectors["8_button"]);
  await page.click(selectors["9_what_needs_to_b_input"]);
  await page.type(selectors["10_what_needs_to_b_input"], "more ");
  await page.press(selectors["11_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["12_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["13_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["14_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["15_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["16_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["17_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["19_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["20_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["21_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["22_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["23_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["24_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["25_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["26_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["27_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["28_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["29_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["30_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["31_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["32_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["33_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["34_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["35_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["36_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["37_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["38_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["40_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["41_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["42_what_needs_to_b_input"], "Backspace");
  await page.type(selectors["43_what_needs_to_b_input"], "Create another test");
  await page.press(selectors["44_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["45_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["46_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["47_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["48_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["49_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["50_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["51_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["52_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["53_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["54_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["55_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["56_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["57_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["58_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["59_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["60_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["61_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["62_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["63_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["64_what_needs_to_b_input"], "Backspace");
  await page.press(selectors["65_what_needs_to_b_input"], "Backspace");
  await page.type(selectors["66_what_needs_to_b_input"], "Buy some food");
  await page.click(selectors["67_button"]);
  await page.click(selectors["68_what_needs_to_b_input"]);
  await page.click(selectors["69_button"]);
  await page.click(selectors["70_button"]);
  await page.click(selectors["71_button"]);
  await page.click(selectors["72_button"]);
  await page.click(selectors["73_button"]);
  await page.click(selectors["74_what_needs_to_b_input"]);
  await page.click(selectors["75_div"]);
  await page.click(selectors["76_button"]);
  await page.click(selectors["77_div"]);
  await page.click(selectors["78_div"]);
  await page.click(selectors["79_div"]);
});
