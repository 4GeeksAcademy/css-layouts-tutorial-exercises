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
test('There should be a <div> element with the id "sectionA"', () => {
    let sectionA = document.getElementById("sectionA")
    expect(sectionA).toBeTruthy()
})
test('There should be a <div> element with the id "sectionB"', () => {
    let sectionB = document.getElementById("sectionB")
    expect(sectionB).toBeTruthy()
})
test('There should be a <div> element with the id "sectionC"', () => {
    let sectionC = document.getElementById("sectionC")
    expect(sectionC).toBeTruthy()
})

test('SectionA should have a width of 33%', () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let sectionA = "";
    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === "#sectionA") {
            sectionA = cssArray[i].style["width"];
        }
    }
    expect(sectionA).toBe("33%");
})
test('SectionB should have a width of 33%', () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let sectionB = "";
    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === "#sectionB") {
            sectionB = cssArray[i].style["width"];
        }
    }
    expect(sectionB).toBe("33%");
})
test('SectionC should have a width of 33%', () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let sectionC = "";
    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === "#sectionC") {
            sectionC = cssArray[i].style["width"];
        }
    }
    expect(sectionC).toBe("33%");
})
