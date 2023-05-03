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

// all divs to be checked
let div = document.querySelectorAll("div")
let div1 = document.querySelector("#div1")
let div2 = document.querySelector("#div2")
let div3 = document.querySelector("#div3")
let div4 = document.querySelector("#div4")
let div5 = document.querySelector("#div5")
let div6 = document.querySelector("#div6")
let strong = document.querySelectorAll("strong")

test("There should be at least 6 <div> elements", () => {
    expect(div.length).toBeGreaterThan(5)
})

test("<div> tags should be in descending order according to their id | div1 > div2 > ... > div6", () => {
    for(let i = 0; i < 6; i++){
        expect(div[i].id).toBe(`div${i+1}`)
    }
})

test('The id "div1" should exist', () => {
    expect(div1).toBeTruthy()
})

test('The id "div2" should exist', () => {
    expect(div2).toBeTruthy()
})

test('The id "div3" should exist', () => {
    expect(div3).toBeTruthy()
})

test('The id "div4" should exist', () => {
    expect(div4).toBeTruthy()
})

test('The id "div5" should exist', () => {
    expect(div5).toBeTruthy()
})

test('The id "div6" should exist', () => {
    expect(div6).toBeTruthy()
})

test('There should be 6 <strong> tags', () => {
    expect(strong.length).toEqual(6)
})

test('The <strong> tags should be within their corresponding <div> containers', () => {
    for(let i = 0; i < 6; i++){
        expect(strong[i].parentNode.id).toBe(`div${i+1}`)
    }
})

/* STYLES CHECK */

// backgrounds
test('div1 should have a red background', () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let background = "";
    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === "#div1") {
            background = cssArray[i].style["background-color"];
        }
    }
    expect(background).toBe("red");
})

test('div5 should have a red background', () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let background = "";
    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === "#div5") {
            background = cssArray[i].style["background-color"];
        }
    }
    expect(background).toBe("red");
})

test('div4 should have a blue background', () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let background = "";
    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === "#div4") {
            background = cssArray[i].style["background-color"];
        }
    }
    expect(background).toBe("blue");
})

test('div2 should have a blue background', () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let background = "";
    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === "#div2") {
            background = cssArray[i].style["background-color"];
        }
    }
    expect(background).toBe("blue");
})
test('div3 should have a yellow background', () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let background = "";
    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === "#div3") {
            background = cssArray[i].style["background-color"];
        }
    }
    expect(background).toBe("yellow");
})
test('div6 should have a black background', () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let background = "";
    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === "#div6") {
            background = cssArray[i].style["background-color"];
        }
    }
    expect(background).toBe("black");
})

// text color 

test('div2, div3, div5, and div6 should have white text', () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let color = "";
    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === "#div6" || cssArray[i].selectorText === "#div5" || cssArray[i].selectorText === "#div3" || cssArray[i].selectorText === "#div2") {
            color = cssArray[i].style["color"];
            // asserts every iteration that matches chosen selectors
            expect(color).toBe("white");
        }
    }
})

// border-radius
test('div2, div3, div5, and div6 should have a border radius of 25px', () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let borderRadius = "";
    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === "#div6" || cssArray[i].selectorText === "#div5" || cssArray[i].selectorText === "#div3" || cssArray[i].selectorText === "#div2") {
            borderRadius = cssArray[i].style["border-radius"];
            // asserts every iteration that matches chosen selectors
            expect(borderRadius).toBe("25px");
        }
    }
})
test('div1 and div4 should have a border radius of 50px', () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let borderRadius = "";
    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === "#div1" || cssArray[i].selectorText === "#div4" ) {
            borderRadius = cssArray[i].style["border-radius"];
            // asserts every iteration that matches chosen selectors
            expect(borderRadius).toBe("50px");
        }
    }
})

// width and height

test('div1, div2, div3, div4, div5, and div6 should have a width of 150px', () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let width = "";
    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === "#div6" || cssArray[i].selectorText === "#div5" || cssArray[i].selectorText === "#div4" || cssArray[i].selectorText === "#div3" || cssArray[i].selectorText === "#div2" || cssArray[i].selectorText === "#div1") {
            width = cssArray[i].style["width"];
            // asserts every iteration that matches chosen selectors
            expect(width).toBe("150px");
        }
    }
})
test('div1, div2, div3, div4, div5, and div6 should have a height of 100px', () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let height = "";
    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === "#div6" || cssArray[i].selectorText === "#div5" || cssArray[i].selectorText === "#div4" || cssArray[i].selectorText === "#div3" || cssArray[i].selectorText === "#div2" || cssArray[i].selectorText === "#div1") {
            height = cssArray[i].style["height"];
            // asserts every iteration that matches chosen selectors
            expect(height).toBe("100px");
        }
    }
})
