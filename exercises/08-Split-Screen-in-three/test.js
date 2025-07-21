const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf8");
document.documentElement.innerHTML = html.toString();

jest.dontMock('fs');

const link = document.querySelector("link");
const title = document.querySelector('title')

test("You should not change the existing <head> tag elements", () => {
    let head = document.querySelector('head')
    expect(head).toBeTruthy()

    let meta = head.querySelector("meta")
    expect(meta).toBeTruthy()

    const href = link.getAttribute("href")
    expect(href).toBe('styles.css')

    expect(title).toBeTruthy()
})

test('There should be a <div> element with the class "wrapper"', () => {
    const wrapper = document.querySelector(".wrapper");
    expect(wrapper).toBeTruthy();
});

test('There should be three <div> elements with classes "boxA", "boxB", and "boxC"', () => {
    const boxA = document.querySelector(".boxA");
    const boxB = document.querySelector(".boxB");
    const boxC = document.querySelector(".boxC");

    expect(boxA).toBeTruthy();
    expect(boxB).toBeTruthy();
    expect(boxC).toBeTruthy();
});

test('The wrapper should have display: flex', () => {
    document.querySelector("head").innerHTML = `<style>${css}</style>`;

    const cssArray = document.styleSheets[0].cssRules;
    let display = "";

    for (let rule of cssArray) {
        if (rule.selectorText === ".wrapper") {
            display = rule.style["display"];
        }
    }

    expect(display).toBe("flex");
});

test.each([
    [".boxA", "33.33%"],
    [".boxB", "33.33%"],
    [".boxC", "33.33%"]
])('%s should have a width of 33.33%', (selector, expectedWidth) => {
    document.querySelector("head").innerHTML = `<style>${css}</style>`;

    const cssArray = document.styleSheets[0].cssRules;
    let width = "";

    for (let rule of cssArray) {
        if (rule.selectorText === selector) {
            width = rule.style["width"];
        }
    }

    expect(width).toBe(expectedWidth);
});

