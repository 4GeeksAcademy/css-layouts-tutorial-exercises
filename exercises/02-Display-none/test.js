const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf8");
document.documentElement.innerHTML = html.toString();

jest.dontMock('fs');

let h2s = document.querySelectorAll("h2");
let ul = document.querySelector("#myUL");
let li = ul.querySelectorAll("li")
let p = document.querySelectorAll("p");
let strong = document.querySelectorAll("strong")

// head elements check
const link = document.querySelector("link");
const title = document.querySelector('title')
test("You should not change the existing <head> tag elements", () => {
    let head = document.querySelector('head')
    expect(head).toBeTruthy()

    let meta = head.querySelector("meta")
    expect(meta).toBeTruthy()

    const href = link.getAttribute("href")
    expect(href).toBe('./styles.css')

    expect(title).toBeTruthy()
})

// check elements to be modified by user
test("There should only be two <h2> tags", () => {
    expect(h2s.length).toEqual(2)
})

test("The first <h2> should be hidden using the visibility property", () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let firstH2 = "";
    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === "#myFirstH2") {
            firstH2 = cssArray[i].style["visibility"];
        }
    }
    expect(firstH2).toBe('hidden');
})
test("The second <h2> should have a display property of none", () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let secondH2 = "";
    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === "#mySecondH2") {
            secondH2 = cssArray[i].style["display"];
        }
    }
    expect(secondH2).toBe('none');
})
test("There should be a <ul> tag", () => {
    expect(ul).toBeTruthy();
})
test("There should be exactly 3 <li> tags", () => {
    expect(li.length).toEqual(3);
})

test("Each <li> tag should be displayed as inline", () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let li = "";
    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === "#myUL li") {
            li = cssArray[i].style["display"];
        }
    }
    expect(li).toBe('inline');
})

test("There should be two <p> tags", () => {
    expect(p.length).toEqual(2);
})
test("There should be two <strong> tags", () => {
    expect(strong.length).toEqual(2);
})

test("Each <strong> tag should be displayed as block elements", () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let strong = "";
    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === "strong") {
            strong = cssArray[i].style["display"];
        }
    }
    expect(strong).toBe('block');
})
