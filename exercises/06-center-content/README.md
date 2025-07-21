# `06` Center content

On most websites, it's good practice to wrap all main content inside a container. This container usually has a fixed or limited width and is centered horizontally to improve readability and layout.

In this exercise, you'll learn how to horizontally center a content box using CSS with the `margin:auto` property.

### How does `margin: auto` work?

When an element has a defined width (`width: 400px`) and you apply `margin: auto`, the browser distributes the remaining horizontal space **equally on both sides** of the element. This visually centers the element within its container (for example, the `body`).

```css
.myDiv {
    width: 400px;
    margin: 0 auto;
}
```

## 📝 Instructions:

1. Create a div with the class `myDiv`.
2. Apply the following CSS styles:
        - Width of `400px`.
        - Gray background color.

3. Center the div horizontally within the body using `margin: auto`.

## 💻 Expected result:

![Center content](../../.learn/assets/XX6daZ3.png?raw=true)
