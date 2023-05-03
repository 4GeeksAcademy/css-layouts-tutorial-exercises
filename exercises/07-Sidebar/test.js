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

test('There should be a <div> element with the id "wrapper"', () => {
    let wrapper = document.getElementById("wrapper")
    expect(wrapper).toBeTruthy()
})
test('There should be a <div> element with the id "sidebar"', () => {
    let sidebar = document.getElementById("sidebar")
    expect(sidebar).toBeTruthy()
})
test('There should be a <div> element with the id "content"', () => {
    let content = document.getElementById("content")
    expect(content).toBeTruthy()
})

test('The wrapper should have the flex property', () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let wrapper = "";
    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === "#wrapper") {
            wrapper = cssArray[i].style["display"];
        }
    }
    expect(wrapper).toBe("flex");
})

test('The sidebar should have a grey background', () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let sidebar = "";
    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === "#sidebar") {
            sidebar = cssArray[i].style["background"];
        }
    }
    expect(sidebar).toBe("grey");
})

test('The content should have a green background', () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let content = "";
    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === "#content") {
            content = cssArray[i].style["background"];
        }
    }
    expect(content).toBe("green");
})

test('The content should have a width of 70%', () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let content = "";
    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === "#content") {
            content = cssArray[i].style["width"];
        }
    }
    expect(content).toBe("70%");
})

test('The sidebar should have a width of 30%', () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let content = "";
    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === "#sidebar") {
            content = cssArray[i].style["width"];
        }
    }
    expect(content).toBe("30%");
})

test('The wrapper should have a width of 100%', () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let content = "";
    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === "#wrapper") {
            content = cssArray[i].style["width"];
        }
    }
    expect(content).toBe("100%");
})

