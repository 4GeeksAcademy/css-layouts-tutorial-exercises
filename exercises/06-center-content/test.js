const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf8");
document.documentElement.innerHTML = html.toString();

jest.dontMock('fs');

const link = document.querySelector("link");
const title = document.querySelector('title')

test("You should not change the existing head tag elements", () => {
    let head = document.querySelector('head')
    expect(head).toBeTruthy()

    let meta = head.querySelector("meta")
    expect(meta).toBeTruthy()

    const href = link.getAttribute("href")
    expect(href).toBe('styles.css')

    expect(title).toBeTruthy()
})

test('There should be a div tag with the class "myDiv"', () => {
    let myDiv = document.querySelector(".myDiv")
    expect(myDiv).toBeTruthy()
})

test('"myDiv" should have a width of 400px', () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let myDiv = "";
    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === ".myDiv") {
            myDiv = cssArray[i].style["width"];
        }
    }
    expect(myDiv).toBe("400px");
})

test('"myDiv" should be align horizontally on the body tag using display flex', () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let body1 = "";
    let body2 = "";
    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === "body") {
            body1 = cssArray[i].style["display"];
            body2 = cssArray[i].style["justify-content"];
        }
    }
    expect(body1).toBe("flex");
    expect(body2).toBe("center");
})