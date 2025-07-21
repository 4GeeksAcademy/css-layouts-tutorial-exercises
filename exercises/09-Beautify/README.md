# `09` Beautify

This exercise is based on a real case from one of our students. The original idea was to create a clean layout with two columns: one with large blocks, and another with smaller blocks arranged vertically.

However, the original code **is partially broken**. The HTML and CSS have errors that prevent the layout from displaying correctly.

Your goal is to **fix the HTML and apply Flexbox styles** to achieve the following design.


![Two-column layout with six rectangular blocks distributed using Flexbox. The left column contains two large blocks stacked vertically: a red box with the text "The Menu" at the top and a blue box with the text "Second Content" below. The right column contains four smaller blocks stacked vertically: a blue box with the text "The Content", a yellow box with the text "The Other Stuff", a red box with the text "Second Content", and a black box with the text "The Extra Stuff". Each block has rounded borders and bold, centered text.](../../.learn/assets/image-layout-beauty.png?raw=true)


## 📝 Instructions:

1. All content must be inside a `<div class="wrapper">` container.
2. Inside `.wrapper`, you should have two columns (`<div class="left-column">` and `<div class="right-column">`).
3. Create 6 blocks with the following `id`s: `div1` to `div6`.
4. Place the text content of each one inside a `<strong>` tag, following this distribution:

| ID     | Text to display        | Column           | Position |
|--------|-----------------------|------------------|----------|
| div1   | The Menu              | left             | top      |
| div2   | Second Content        | left             | bottom   |
| div3   | The Content           | right            | first    |
| div4   | The Other Stuff       | right            | second   |
| div5   | Second Content        | right            | third    |
| div6   | The Extra Stuff       | right            | fourth   |



### 💡 Tips

- Use `display: flex` on `.wrapper` to create the column layout.
- Use `flex-direction: column` on `.left-column` and `.right-column`.
- You can use `gap` to separate the blocks.
- Make sure the texts are centered using `text-align`, `display: flex`, or `line-height`.


## ⚠️ Important:

Do not remove or modify the `<head>` elements such as `<meta>`, `<title>`, or `<link>`.
