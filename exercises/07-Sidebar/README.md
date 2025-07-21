# `07` Sidebar

A common structure in modern websites is the layout with a **sidebar** on the left and **main content** on the right. This pattern is used, for example, in admin panels, news sites, or messaging apps.

Starting with this exercise, you will learn to use `Flexbox`, a modern CSS technique that allows you to organize elements inside a container in a flexible and simple way. When you use `display: flex;` on a container, its child elements are automatically placed **side by side**, unless you specify otherwise. This makes it ideal for building layouts like this one.

Therefore, the goal of this exercise is to replicate a two-column layout on the same line: a sidebar with 30% width and a content area with 70% width.

![Horizontal layout design with two blocks. On the left, a gray sidebar with the text "Sidebar" occupying about 30% of the width. On the right, a dark green area with the text "Content" occupying the remaining 70%. Both blocks are aligned horizontally and have the same height.](../../.learn/assets/69N2q6G.png?raw=true)

## 📝 Instructions:

1. Create a container `div` with the class `wrapper`.
2. Make sure that:
    - The `div.wrapper` has `width: 100%` and `height: 100px`.
    - It uses `display: flex` to place its elements in a row.
3. Inside the container, add:
    - A `div.sidebar` with `width: 30%` and a **gray** background color.
    - A `div.content` with `width: 70%` and a **green** background color.

### 💡 Tips

- You don't need to modify the HTML, just apply or complete the CSS styles.
- Use background colors to better visualize the areas.
- Do not use `float` or `position` in this exercise.
