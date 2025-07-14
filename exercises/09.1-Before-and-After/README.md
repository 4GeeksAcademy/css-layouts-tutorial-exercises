# `09.1` Before and After

This exercise will help you practice using the CSS pseudo-elements `::before` and `::after`, which allow you to add decorative content to HTML elements without modifying the HTML directly. They are useful for creating details like arrows, labels, or extra visual elements.

In this case, a `::before` pseudo-element has already been applied to a `<h1>` heading with the text `"Hello World"`, generating a left-pointing triangular arrow.

However, the code is still incomplete. Your task is to add a second arrow to the right side of the text using `::after`.

## 📝 Instructions:

1. Use the `::after` pseudo-element on the existing `<h1>`.
2. The arrow should point **to the right** of the `"Hello World"` text.
3. The arrow must be built exclusively with CSS (for example, using `border-left`).
4. Make sure the `::after` arrow is visually aligned with the `::before` arrow.

## 💻 Expected result:

![Before and After](../../.learn/assets/BKz8ozg.png?raw=true)

## 💡 Hint:

You can build arrows in CSS using borders. For a right-pointing arrow, try something like:

```css
border-left: 10px solid black;
border-top: 5px solid transparent;
border-bottom: 5px solid transparent;
```
