# `08` Split Screen in Three

Now that you know how to use `Flexbox` to place two elements side by side, it's time to take it a step further: create a structure with **three equal columns**, which is very common in dashboards, news systems, and web templates.

With `display: flex`, you can distribute as many elements as you want in a single line. If each one takes up `33.33%` of the width, you'll fill 100% of the horizontal space. This allows you to divide the screen into precise thirds.

## 📝 Instructions:

1. Group three `div` elements inside a container with the class `.wrapper`.
2. Make sure that:
    - `.wrapper` has `display: flex` and `width: 100%`.
    - Each of the three boxes has a width of `33.33%`.
    - Each box has a different background color to distinguish them visually.
3. Use the `flex-direction` property to ensure the elements are aligned horizontally.

### 💡 Tips

- Do not use `float` or `inline-block`. Use only `flexbox`.
- Align the three `div` elements directly one after another, without line breaks or spaces between tags to avoid unexpected small margins.
- If you see unwanted spaces between the blocks, check the HTML to make sure the `div`s are on the same line and without breaks.

## Expected result

Three columns of the same size aligned horizontally, each with a different background color, occupying one third of the screen width.

![Three equal-width columns aligned horizontally](../../.learn/assets/img-three-parts.png?raw=true)
