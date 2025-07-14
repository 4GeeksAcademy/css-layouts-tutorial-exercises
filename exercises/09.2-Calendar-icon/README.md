# `09.2` Calendar Icon

In this exercise, you will use the `::before` and `::after` pseudo-elements to build an icon that simulates the appearance of a classic calendar with binding rings. The goal is to apply creative CSS styles to generate visual shapes without using external images.

The base element is a `div` with the class `.calendar`, which contains an `<em>` element. The pseudo-elements have already been created, but their position, color, and shape are not correctly defined.

![Calendar Icon](../../.learn/assets/AlDLXvy.png?raw=true)



## 📝 Instructions:

1. Use `position: absolute` to properly position the `.calendar` container's `::before` and `::after` pseudo-elements so that they represent the top edges or marks of the calendar.

2. Also apply `position: absolute` to the `<em>` element's `::before` and `::after` pseudo-elements (which act as rings or binders).

3. Adjust their colors so that they match each other and visually simulate the metal or plastic of the ring.

4. Apply `border-radius` to the `<em>` pseudo-elements so that they take on a circular shape, simulating a ring seen from the front (2D).



## 💡 Hint:

+ If you don't set the pseudo-elements to `position: absolute`, they will continue to take up space in the document flow.
+ You can use properties like `width`, `height`, `background-color`, `border-radius`, and `top`, `left`, etc. to position and style the rings.
+ This exercise does not have tests because there are different possible solutions, so when your code visually matches the example, you can move on to the next exercise.




