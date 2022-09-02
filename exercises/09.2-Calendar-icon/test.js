const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
document.documentElement.innerHTML = html.toString();

jest.dontMock('fs');

const link = document.querySelector("link");
const title = document.querySelector('title')
let p = document.querySelector("p")

test("You should not change the existing head tag elements", () => {
    let head = document.querySelector('head')
    expect(head).toBeTruthy()

    let meta = head.querySelector("meta")
    expect(meta).toBeTruthy()

    const href = link.getAttribute("href")
    expect(href).toBe('styles.css')

    expect(title).toBeTruthy()
})

test("p tag with class calendar should exist", () => {
    expect(p.classList.contains("calendar")).toBeTruthy()
})

test("There should be an em tag inside the p tag", () => {
    let em = p.querySelector("em")
    expect(em).toBeTruthy()
})

