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
test("There should be an <h1> with some content inside", () => {
    let h1 = document.querySelector("h1")

    expect(h1).toBeTruthy()
    expect(h1.innerHTML.length).toBeGreaterThan(0)
})

test("You should not change h1::before", () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let borderTop = "";
    let borderBottom = "";
    let borderRight = "";
    let height = "";
    let marginBottom = "";
    let marginRight = "";
    let display = "";
    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === "h1::before") {
            borderTop = cssArray[i].style["border-top"];
            borderBottom = cssArray[i].style["border-bottom"];
            borderRight = cssArray[i].style["border-right"];
            height = cssArray[i].style["height"];
            marginBottom = cssArray[i].style["margin-bottom"];
            marginRight = cssArray[i].style["margin-right"];
            display = cssArray[i].style["display"];
        }
    }
    expect(borderBottom).toBe("45px solid transparent");
    expect(borderTop).toBe("45px solid transparent");
    expect(borderRight).toBe("45px solid blue");
    expect(height).toBe("0px");
    expect(marginBottom).toBe("-35px");
    expect(marginRight).toBe("20px");
    expect(display).toBe("inline-block");
})
test("h1::after should have a margin-left instead of margin-right of 20px", () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let marginLeft = "";
    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === "h1::after") {
            marginLeft = cssArray[i].style["margin-left"];
        }
    }
    expect(marginLeft).toBe("20px");
})
test("h1::after should have a border-left instead of border-right of 45px solid blue", () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let borderLeft = "";
    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === "h1::after") {
            borderLeft = cssArray[i].style["border-left"];
        }
    }
    expect(borderLeft).toBe("45px solid blue");
})
