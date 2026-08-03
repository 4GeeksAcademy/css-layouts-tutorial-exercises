<!-- hide -->
<div align="center">

# Build Website Layouts with CSS

[![Certified 4Geeks tutorial](https://img.shields.io/badge/certified-4Geeks-2563eb)](https://4geeks.com/en/interactive-exercise/css-layouts-tutorial-exercises)
[![Autograded with LearnPack](https://img.shields.io/badge/autograded-LearnPack-2563eb)](https://github.com/learnpack/learnpack)
[![Open in Codespaces](https://img.shields.io/badge/open%20in-Codespaces-fb5a1f?logo=github)](https://codespaces.new/4GeeksAcademy/css-layouts-tutorial-exercises)

</div>
<!-- endhide -->

This interactive tutorial contains 12 CSS layout exercises, 8 of them auto-graded by Jest, rated easy and budgeted at 8 hours. You practice `visibility` versus `display: none`, `position: relative` versus `absolute`, negative `z-index`, `float`, horizontal centering with `margin: auto`, Flexbox sidebars and three-column splits, and the `::before` / `::after` pseudo-elements. No JavaScript, no framework and no build step: you edit HTML and CSS only.

<!-- hide -->
## 📋 About this tutorial

- **Difficulty**: Easy — the natural next step after a basic CSS course
- **Duration**: 8 hours (as declared in [`learn.json`](https://github.com/4GeeksAcademy/css-layouts-tutorial-exercises/blob/HEAD/learn.json))
- **Exercises**: 12 folders inside `exercises/` — 1 welcome page and 11 hands-on exercises
- **Grading**: automatic in 8 of them, with Jest 29.7.0 and `jest-environment-jsdom`
- **Technologies**: CSS layout, Flexbox, pseudo-elements, HTML
- **Reference solutions**: 10 exercises ship a hidden `solution.hide.css` you can reveal when stuck
- **License**: the repository ships no `LICENSE` file, so no reuse or redistribution rights are granted
- **Languages**: [English](https://github.com/4GeeksAcademy/css-layouts-tutorial-exercises/blob/HEAD/README.md) · [Español](https://github.com/4GeeksAcademy/css-layouts-tutorial-exercises/blob/HEAD/README.es.md)
<!-- endhide -->

## 🎯 What will you learn?

- **The two ways to hide an element**: `visibility: hidden`, which keeps the space the element occupied, versus `display: none`, which removes it from the flow so everything below moves up.
- **Changing the box type of a tag**: turning `<li>` elements into `inline` so a list runs across one line, and turning `<strong>` into `block` so inline text becomes a box.
- **`position: relative` versus `position: absolute`**: relative offsets an element from where it already was, absolute ignores that starting point and positions it against its containing block.
- **Stacking with `z-index`**: how a negative value pushes a positioned image behind the text, PowerPoint's "send to back" translated to CSS.
- **`float`**: pulling an image to one side of the document so the paragraph wraps around it, and using `margin-right` to keep the text from touching it.
- **Horizontal centering with `margin: auto`**: why an element needs a declared `width` before the browser can split the leftover space evenly on both sides.
- **Flexbox as a layout tool**: `display: flex` to place children in a row, percentage widths for a 30/70 sidebar or three 33.33% columns, `flex-direction: column` for stacked blocks, and `gap` for the spacing between them.
- **Pseudo-elements `::before` and `::after`**: generating decorative content without touching the HTML, drawing triangles out of transparent borders, and using `position: absolute` plus `border-radius` to build an icon from scratch.
- **Putting it together**: a complete static page with a full-width `<header>` and a `<nav>` + `<section>` row underneath.

## 👀 What will you build?

The exercises run in order inside `exercises/` and each one is a tiny website you fix or complete:

- **Display and position (`01` to `04`)**. After the welcome page you hide one `<h2>` with `visibility` while keeping its space and a second one with `display: none`, spread the three `<li>` of `#myUL` inline and turn `<strong>` into blocks; then you swap the `.absolutePositionExample` and `.relativePositionExample` classes on the same `<div>` to see the difference with your own eyes; then you send a photo of a cat behind the text by giving `#myImage` a negative `z-index`.
- **Float and centering (`05` and `06`)**. You float an image next to a long paragraph and separate it with a margin, and you wrap the page content in a `.myDiv` that is 400px wide, gray, and centered with `margin: 0 auto` — the test explicitly rejects Flexbox, Grid and the absolute-plus-translate trick here, because the point is to master the classic technique first.
- **Flexbox layouts (`07`, `08` and `09`)**. A 30% sidebar next to a 70% content area, a screen split into three equal columns of exactly `33.33%`, and a "beautify" exercise built from a real student's broken code: you repair the markup into a `.wrapper` with a `.left-column` holding `div1` and `div2` and a `.right-column` holding `div3` through `div6`, six `<strong>` labels, and red backgrounds on `div1` and `div5`.
- **Pseudo-elements and the final layout (`09.1`, `09.2` and `10`)**. You mirror an existing `h1::before` blue triangle with an `h1::after` one that points the other way, build a calendar icon whose rings are absolutely positioned pseudo-elements rounded with `border-radius`, and close the tutorial with a static page where `.secondWrapper` is a flex row, `<section>` takes about 80% and a 10px gap separates the blocks — no `float`, no `position: absolute`.

![Result of the sidebar exercise: a horizontal band split into two blocks of the same height, a gray sidebar labelled Sidebar taking about 30% of the width on the left, and a dark green area labelled Content taking the remaining 70% on the right](https://raw.githubusercontent.com/4GeeksAcademy/css-layouts-tutorial-exercises/HEAD/.learn/assets/69N2q6G.png)

![Result of the final static layout exercise: a blue page titled Static Layout Example with a full-width HEADER box under the title, and below it a narrow NAV column on the left next to a much wider SECTION block on the right, separated by a small gap](https://raw.githubusercontent.com/4GeeksAcademy/css-layouts-tutorial-exercises/HEAD/.learn/assets/0B62fyP.png)

## 🎓 What do you need before starting?

- **Basic CSS is the real prerequisite**: writing rules in an external stylesheet, and using tag, class and id selectors. If you have never written a CSS rule, do an introductory CSS tutorial first and come back here.
- **Basic HTML**: recognising `<div>`, `<ul>`, `<img>`, `<header>`, `<nav>` and `<section>`, and knowing the difference between `<head>` and `<body>`.
- **No JavaScript, no React and no build step.** Eight of the eleven exercises are solved by editing `styles.css` alone; only three touch the markup: swapping a class on a `<div>`, adding the container you have to center, and repairing the broken "beautify" page.
- **In the browser**: a GitHub account is enough. The repository ships a devcontainer based on the Node 22 image that installs LearnPack, the HTML plugin and Jest for you.
- **On your own machine**: Node.js, plus `@learnpack/learnpack`, the `@learnpack/html` plugin, `jest@29.7.0` and `jest-environment-jsdom@29.7.0` installed globally.
- **Time**: 8 estimated hours across 11 exercises, roughly 40 minutes each.

## ✅ How does the automatic grading work?

- **8 of the 12 folders ship a `test.js` file**: `02-Display-none`, `04-Move-image-behind-the-text`, `05-Float-example`, `06-center-content`, `07-Sidebar`, `08-Split-Screen-in-three`, `09-Beautify` and `09.1-Before-and-After`. The other four are read-and-experiment exercises, and two of them say so in their own instructions.
- **The tests run on Jest with the jsdom environment.** Each file reads your `index.html` and your `styles.css` from disk, injects the CSS into a jsdom document and inspects the result.
- **Rules are matched by exact selector text.** The grader loops over `document.styleSheets[0].cssRules` looking for `selectorText === ".myDiv"` or `"#myUL li"`, so a rule that works in the browser but is written as `div.myDiv` or `body .myDiv` is invisible to the test.
- **Values are compared as strings.** `33.33%` passes and `33.3%` does not; in the `z-index` exercise the check is numeric instead, and any value below zero is accepted.
- **Almost every test starts by verifying the `<head>` is intact**: the `<meta>`, the `<title>` and the `<link>` pointing at the stylesheet must still be there, exactly as they came.
- **Some tests also check what you did *not* use.** The centering exercise fails if `body` declares `display: flex`, `display: grid`, `justify-content: center` or `place-items: center`, or if `.myDiv` is centered with `position: absolute` plus a `translate`. The pseudo-element exercise asserts that the original `h1::before` still has its `45px solid blue` right border and its `-35px` bottom margin.

> 💡 Open the preview before writing anything. Several exercises are designed so that you look at the starting page, change one property and look again — that comparison is the lesson.

## 💡 What mistakes should you avoid?

- **Writing your styles anywhere other than `styles.css`.** An inline `style` attribute, or a block of CSS written inside the HTML document itself, may look correct in the preview, but the grader only reads the stylesheet file.
- **Touching the `<head>`.** Removing the `<title>`, the `<meta>` or renaming the path in the `<link>` breaks the first test of nearly every exercise, and that test has nothing to do with the property you were practising.
- **Centering with Flexbox in the `margin: auto` exercise.** It is the one place where the modern solution is deliberately rejected: use `margin: auto`, `margin: 0 auto` or `margin-left`/`margin-right` set to `auto`, on an element that already has `width: 400px`.
- **Rounding the column widths.** Three columns of `33.33%` is what the test expects, character for character.
- **Reaching for `float` or `position` in the Flexbox exercises.** The sidebar, the three-column split and the final static layout all state it explicitly, and the last one asks you to use `gap: 10px` on the container instead of stacking margins.
- **Rewriting the `h1::before` rule instead of adding `h1::after`.** The arrow that already exists is protected by the test; your job is to mirror it with `border-left: 45px solid blue` and `margin-left: 20px`.
- **Expecting `z-index` to work on a static element.** In that exercise the image is already `position: absolute`, which is what makes the stacking order apply; on an unpositioned element `z-index` does nothing.
- **Forgetting that `visibility: hidden` and `display: none` are not interchangeable.** The first one leaves a hole in the layout, the second one closes it. The exercise asks for one of each precisely so you can see it.

## ❓ Frequently asked questions

### How long does it take to learn CSS layouts with these exercises?

The tutorial declares 8 hours of estimated work for 11 hands-on exercises, around 40 minutes each. Someone who already writes CSS comfortably usually goes faster, because the first four exercises are short experiments rather than builds.

### Do I need to know Flexbox before starting?

No. Flexbox is introduced from scratch in the sidebar exercise, where `display: flex` is explained as the property that places children side by side, and then reused for the three-column split, the two-column "beautify" repair and the final static layout.

### Should I still learn `float` and `position` if Flexbox exists?

Yes, and that is why they come first here. `position: absolute` and `z-index` are still how overlays, badges and dropdowns are stacked, `float` is still how text wraps around an image, and `margin: auto` is still the shortest way to center a fixed-width block. Flexbox replaced the layout hacks, not these properties.

### Do I have to install anything to start?

No. The repository includes a devcontainer, so opening it in GitHub Codespaces gives you an editor with LearnPack, its HTML plugin and Jest already installed. Local installation is optional and only needs Node.js plus those same packages.

### My layout looks right but the test still fails — what now?

Check three things in this order: that your rule lives in `styles.css`, that the selector is written exactly as the instruction names it, and that the value matches literally, including the unit and the decimals. The grader compares strings, so it has no opinion about whether the page looks good.

### Are these exercises free, and can I reuse them?

Opening and completing them costs nothing, and the CSS you write is yours. The repository does not include a `LICENSE` file, though, so it is not open source and no permission to republish, redistribute or resell the material is granted.

<!-- hide -->
## 📝 Related tutorials

1. [Learn HTML](https://github.com/4GeeksAcademy/html-tutorial-exercises-course)
2. [Learn HTML Forms](https://github.com/4GeeksAcademy/html-forms-tutorial-exercises)
3. [Learn CSS](https://github.com/4GeeksAcademy/css-tutorial-exercises-course)
4. [Learn CSS Layouts](https://github.com/4GeeksAcademy/css-layouts-tutorial-exercises) ← 🔥 you are here
5. [Learn Bootstrap](https://github.com/4GeeksAcademy/bootstrap-exercises-tutorial)

## 🚀 How to start

The fastest path is [Open in Codespaces](https://codespaces.new/4GeeksAcademy/css-layouts-tutorial-exercises). The devcontainer installs Node 22, LearnPack and Jest for you, and the exercises should open on their own once VS Code finishes loading.

> 💡 If they do not start automatically, run `learnpack start` in the terminal.

You can also follow the tutorial online on its [interactive exercise page](https://4geeks.com/en/interactive-exercise/css-layouts-tutorial-exercises).

## 💻 Local installation

[Clone the repository](https://4geeks.com/how-to/github-clone-repository) and then, from the folder that contains `learn.json`:

1. Install LearnPack, its HTML plugin and the test runner:

    ```bash
    npm i @learnpack/learnpack -g
    learnpack plugins:install @learnpack/html
    npm i jest@29.7.0 jest-environment-jsdom@29.7.0 -g
    ```

2. Start the tutorial:

    ```bash
    learnpack start
    ```

## 📚 How the exercises are organized

Every exercise is a self-contained mini website inside its own folder:

- **`README.md` / `README.es.md`**: the instructions, in English and Spanish.
- **`index.html`**: the starting markup. Most exercises ask you not to change it.
- **`styles.css`**: where your CSS goes.
- **`test.js`**: the automatic grader, present in 8 of the exercises. You never need to open it.
- **`solution.hide.css`** (and `solution.hide.html` in two exercises): the reference solution, hidden by the LearnPack interface until you ask for it.

## 🤝 Contributors

20 people have contributed to this repository. Ordered by number of commits:

- [@alesanchezr](https://github.com/alesanchezr) — original author of the tutorial
- [@josemoracard](https://github.com/josemoracard)
- [@tommygonzaleza](https://github.com/tommygonzaleza)
- [@UmiKami](https://github.com/UmiKami)
- [@Charlytoc](https://github.com/Charlytoc)
- [@ElviraQDP](https://github.com/ElviraQDP)
- [@Lorenagubaira](https://github.com/Lorenagubaira)

The full list is on the [contributors graph](https://github.com/4GeeksAcademy/css-layouts-tutorial-exercises/graphs/contributors). This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification, and contributions of any kind are welcome — report problems at the [LearnPack issue tracker](https://github.com/learnpack/learnpack/issues/new).
<!-- endhide -->
