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

test('There should be a <div> element with the class "sidebar"', () => {
    const sidebar = document.querySelector(".sidebar");
    expect(sidebar).toBeTruthy();
});

test('There should be a <div> element with the class "content"', () => {
    const content = document.querySelector(".content");
    expect(content).toBeTruthy();
});

test('The wrapper should have display: flex', () => {
    document.querySelector("head").innerHTML = `<style>${css}</style>`;

    const cssArray = document.styleSheets[0].cssRules;
    let display = "";

    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === ".wrapper") {
            display = cssArray[i].style["display"];
        }
    }

    expect(display).toBe("flex");
});

test('The wrapper should have a width of 100%', () => {
    document.querySelector("head").innerHTML = `<style>${css}</style>`;

    const cssArray = document.styleSheets[0].cssRules;
    let width = "";

    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === ".wrapper") {
            width = cssArray[i].style["width"];
        }
    }

    expect(width).toBe("100%");
});

test('The sidebar should have a width of 30%', () => {
    document.querySelector("head").innerHTML = `<style>${css}</style>`;

    const cssArray = document.styleSheets[0].cssRules;
    let width = "";

    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === ".sidebar") {
            width = cssArray[i].style["width"];
        }
    }

    expect(width).toBe("30%");
});

test('The content should have a width of 70%', () => {
    document.querySelector("head").innerHTML = `<style>${css}</style>`;

    const cssArray = document.styleSheets[0].cssRules;
    let width = "";

    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === ".content") {
            width = cssArray[i].style["width"];
        }
    }

    expect(width).toBe("70%");
});

test('The wrapper should have a width of 100%', () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let content = "";
    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === ".wrapper") {
            content = cssArray[i].style["width"];
        }
    }
    expect(content).toBe("100%");
})

