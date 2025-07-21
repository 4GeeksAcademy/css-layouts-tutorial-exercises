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

test('There should be a <div> tag with the class "myDiv"', () => {
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

test('"myDiv" should be centered horizontally using only margin', () => {
    document.querySelector("head").innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;

    let marginSolo = "";
    let marginRight = "";
    let marginLeft = "";

    let display = "";
    let justifyContent = "";
    let placeItems = "";
    let position = "";
    let left = "";
    let right = "";
    let transform = "";

    for (let i = 0; i < cssArray.length; i++) {
        const rule = cssArray[i];

        if (rule.selectorText === ".myDiv") {
            marginSolo = rule.style["margin"];
            marginRight = rule.style["margin-right"];
            marginLeft = rule.style["margin-left"];
            position = rule.style["position"];
            left = rule.style["left"];
            right = rule.style["right"];
            transform = rule.style["transform"];
        }

        if (rule.selectorText === "body") {
            display = rule.style["display"];
            justifyContent = rule.style["justify-content"];
            placeItems = rule.style["place-items"];
        }
    }

    const usesMarginAuto =
        marginSolo === "auto" ||
        marginSolo === "0 auto" ||
        (marginLeft === "auto" && marginRight === "auto");

    const usesDisallowedMethod =
        display === "flex" ||
        display === "grid" ||
        placeItems === "center" ||
        justifyContent === "center" ||
        ((position === "absolute" || position === "fixed") &&
            (left || right) &&
            transform.includes("translate"));

    expect(usesMarginAuto).toBe(true);
    expect(usesDisallowedMethod).toBe(false);
});
