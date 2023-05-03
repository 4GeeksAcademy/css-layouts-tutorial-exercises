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

test('"myDiv" should align horizontally on the <body> tag using display flex', () => {
    document.querySelector(
        "head"
    ).innerHTML = `<style>${css.toString()}</style>`;

    let cssArray = document.styleSheets[0].cssRules;
    let display = "";
    let flex = "";

    let marginSolo = "";

    let marginRight = "";
    let marginLeft = "";

    let grid = "";

    let position = "";
    let xPL = "";
    let xPR = "";
    let transform = "";

    for (let i = 0; i < cssArray.length; i++) {
        if (cssArray[i].selectorText === "body") {
            display = cssArray[i].style["display"];
            flex = cssArray[i].style["justify-content"];

            grid = cssArray[i].style["place-items"]
        }
        
        if (cssArray[i].selectorText == ".myDiv") {
            marginSolo = cssArray[i].style["margin"];

            marginRight = cssArray[i].style["margin-right"];
            marginLeft = cssArray[i].style["margin-left"];

            position = cssArray[i].style["position"];
            xPL = cssArray[i].style["left"];
            xPR = cssArray[i].style["right"];
            transform = cssArray[i].style["transform"]; 
        }
    }

    expect( (display == "flex" &&  flex == "center") || (marginSolo == "auto") || (marginRight == "auto" && marginLeft == "auto") || (display == "grid" && grid == "center") || ((position == "absolute" || position == "fixed") && (xPL == "50%" && transform == "translate(-50%, 0%)") || (xPR == "50%" && transform == "translate(50%, 0%)"))).toBeTruthy()
})
