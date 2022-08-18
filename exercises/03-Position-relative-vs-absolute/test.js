const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
document.documentElement.innerHTML = html.toString();

jest.dontMock('fs');

let div = document.querySelectorAll("div")
let firstDiv = document.querySelector("#firstDiv")
let secondDiv = document.querySelector("#secondDiv")

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

test("There should be a two div tags", () => {
    expect(div.length).toEqual(2)
})

test('The first div should have an idea with the value "firstDiv"', () => {
    expect(firstDiv.id).toBe("firstDiv")
})

test('The second div should have an idea with the value "secondDiv"', () => {
    expect(secondDiv.id).toBe("secondDiv")
})