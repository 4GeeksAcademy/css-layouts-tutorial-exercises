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

test('There should be an <img> tag with the id "myImage"', () => {
    let img = document.getElementById("myImage")

    expect(img).toBeTruthy()
})

test("The <img> tag should have the proper z-index value to be placed ", () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let myImage = "";
    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === "#myImage") {
            myImage = cssArray[i].style["z-index"];
        }
    }
    expect(parseInt(myImage)).toBeLessThan(0);
})
