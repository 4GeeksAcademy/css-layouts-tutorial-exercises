<!-- hide -->
<div align="center">

# Construye diseños de sitios web con CSS

[![Tutorial certificado por 4Geeks](https://img.shields.io/badge/certificado-4Geeks-2563eb)](https://4geeks.com/es/interactive-exercise/css-layouts-tutorial-exercises-es)
[![Autocorregido con LearnPack](https://img.shields.io/badge/autocorregido-LearnPack-2563eb)](https://github.com/learnpack/learnpack)
[![Abrir en Codespaces](https://img.shields.io/badge/abrir%20en-Codespaces-fb5a1f?logo=github)](https://codespaces.new/4GeeksAcademy/css-layouts-tutorial-exercises)

</div>
<!-- endhide -->

Este tutorial interactivo reúne 12 ejercicios de maquetación con CSS, 8 de ellos con corrección automática mediante Jest, con dificultad fácil y una duración estimada de 8 horas. Practicarás `visibility` frente a `display: none`, `position: relative` frente a `absolute`, el `z-index` negativo, `float`, el centrado horizontal con `margin: auto`, barras laterales y columnas con Flexbox, y los pseudoelementos `::before` y `::after`. Sin JavaScript, sin frameworks y sin compilación: solo HTML y CSS.

<!-- hide -->
## 📋 Sobre este tutorial

- **Dificultad**: fácil — el paso siguiente natural después de un curso básico de CSS
- **Duración**: 8 horas (según declara [`learn.json`](https://github.com/4GeeksAcademy/css-layouts-tutorial-exercises/blob/HEAD/learn.json))
- **Ejercicios**: 12 carpetas dentro de `exercises/` — 1 página de bienvenida y 11 ejercicios prácticos
- **Corrección**: automática en 8 de ellos, con Jest 29.7.0 y `jest-environment-jsdom`
- **Tecnologías**: maquetación con CSS, Flexbox, pseudoelementos, HTML
- **Soluciones de referencia**: 10 ejercicios traen un `solution.hide.css` que puedes destapar si te atascas
- **Licencia**: el repositorio no incluye ningún fichero `LICENSE`, así que no concede derechos de reutilización ni de redistribución
- **Idiomas**: [English](https://github.com/4GeeksAcademy/css-layouts-tutorial-exercises/blob/HEAD/README.md) · [Español](https://github.com/4GeeksAcademy/css-layouts-tutorial-exercises/blob/HEAD/README.es.md)
<!-- endhide -->

## 🎯 ¿Qué vas a aprender?

- **Las dos formas de esconder un elemento**: `visibility: hidden`, que deja el hueco que ocupaba, y `display: none`, que lo saca del flujo y hace que todo lo de abajo suba.
- **Cambiar el tipo de caja de una etiqueta**: convertir los `<li>` en `inline` para que la lista quede en una sola línea, y convertir `<strong>` en `block` para que un texto en línea pase a ser una caja.
- **`position: relative` frente a `position: absolute`**: la relativa desplaza el elemento desde donde ya estaba; la absoluta ignora esa posición de partida y lo coloca respecto a su contenedor.
- **El apilamiento con `z-index`**: cómo un valor negativo manda una imagen posicionada detrás del texto, el "enviar al fondo" de PowerPoint traducido a CSS.
- **`float`**: pegar una imagen a un lado del documento para que el párrafo la rodee, y usar `margin-right` para que el texto no se le eche encima.
- **El centrado horizontal con `margin: auto`**: por qué el elemento necesita un `width` declarado antes de que el navegador pueda repartir el espacio sobrante a partes iguales.
- **Flexbox como herramienta de maquetación**: `display: flex` para poner los hijos en fila, anchos en porcentaje para una barra lateral 30/70 o tres columnas de 33.33%, `flex-direction: column` para apilar bloques y `gap` para separarlos.
- **Los pseudoelementos `::before` y `::after`**: generar contenido decorativo sin tocar el HTML, dibujar triángulos con bordes transparentes y combinar `position: absolute` con `border-radius` para construir un icono desde cero.
- **Juntarlo todo**: una página estática completa con un `<header>` a todo el ancho y, debajo, una fila con `<nav>` y `<section>`.

## 👀 ¿Qué vas a construir?

Los ejercicios van en orden dentro de `exercises/` y cada uno es una web diminuta que tienes que arreglar o completar:

- **Display y position (del `01` al `04`)**. Después de la página de bienvenida escondes un `<h2>` con `visibility` conservando su hueco y otro con `display: none`, pones en línea los tres `<li>` de `#myUL` y conviertes los `<strong>` en bloques; luego intercambias las clases `.absolutePositionExample` y `.relativePositionExample` sobre el mismo `<div>` para ver la diferencia con tus propios ojos; y después mandas una foto de un gato detrás del texto dándole a `#myImage` un `z-index` negativo.
- **Float y centrado (`05` y `06`)**. Flotas una imagen junto a un párrafo largo y la separas con un margen, y metes el contenido de la página en un `.myDiv` de 400px de ancho, fondo gris y centrado con `margin: 0 auto`. Aquí el test rechaza a propósito Flexbox, Grid y el truco de `position: absolute` con `translate`: la idea es que domines primero la técnica clásica.
- **Maquetación con Flexbox (`07`, `08` y `09`)**. Una barra lateral del 30% junto a un área de contenido del 70%, una pantalla partida en tres columnas iguales de exactamente `33.33%`, y un ejercicio de "embellecer" partido del código real de un estudiante: reparas el marcado hasta dejar un `.wrapper` con una `.left-column` que contiene `div1` y `div2` y una `.right-column` con `div3` hasta `div6`, seis etiquetas `<strong>` y fondo rojo en `div1` y `div5`.
- **Pseudoelementos y maquetación final (`09.1`, `09.2` y `10`)**. Replicas el triángulo azul que ya existe en `h1::before` con otro en `h1::after` que apunta al lado contrario, construyes un icono de calendario cuyas anillas son pseudoelementos posicionados en absoluto y redondeados con `border-radius`, y cierras el tutorial con una página estática donde `.secondWrapper` es una fila flex, la `<section>` ocupa en torno al 80% y un `gap` de 10px separa los bloques, sin `float` ni `position: absolute`.

![Resultado del ejercicio de barra lateral: una banda horizontal dividida en dos bloques de la misma altura, a la izquierda una barra gris con el texto Sidebar que ocupa cerca del 30% del ancho y a la derecha un área verde oscuro con el texto Content que ocupa el 70% restante](https://raw.githubusercontent.com/4GeeksAcademy/css-layouts-tutorial-exercises/HEAD/.learn/assets/69N2q6G.png)

![Resultado del ejercicio final de maquetación estática: una página azul titulada Static Layout Example con una caja HEADER a todo el ancho bajo el título y, debajo, una columna estrecha NAV a la izquierda junto a un bloque SECTION mucho más ancho a la derecha, separados por un pequeño espacio](https://raw.githubusercontent.com/4GeeksAcademy/css-layouts-tutorial-exercises/HEAD/.learn/assets/0B62fyP.png)

## 🎓 ¿Qué necesitas antes de empezar?

- **CSS básico es el requisito de verdad**: escribir reglas en una hoja de estilos externa y usar selectores de etiqueta, de clase y de id. Si nunca has escrito una regla CSS, haz antes un tutorial introductorio y vuelve aquí.
- **HTML básico**: reconocer `<div>`, `<ul>`, `<img>`, `<header>`, `<nav>` y `<section>`, y saber en qué se diferencian `<head>` y `<body>`.
- **Ni JavaScript, ni React, ni proceso de compilación.** Ocho de los once ejercicios se resuelven tocando solo `styles.css`; solo tres piden modificar el marcado: cambiar una clase en un `<div>`, añadir el contenedor que hay que centrar y reparar la página rota del ejercicio de "embellecer".
- **En el navegador**: basta con una cuenta de GitHub. El repositorio trae un devcontainer basado en la imagen de Node 22 que instala LearnPack, el plugin de HTML y Jest por ti.
- **En tu propio ordenador**: Node.js, más `@learnpack/learnpack`, el plugin `@learnpack/html`, `jest@29.7.0` y `jest-environment-jsdom@29.7.0` instalados de forma global.
- **Tiempo**: 8 horas estimadas repartidas entre 11 ejercicios, unos 40 minutos cada uno.

## ✅ ¿Cómo funciona la corrección automática?

- **8 de las 12 carpetas traen un fichero `test.js`**: `02-Display-none`, `04-Move-image-behind-the-text`, `05-Float-example`, `06-center-content`, `07-Sidebar`, `08-Split-Screen-in-three`, `09-Beautify` y `09.1-Before-and-After`. Las otras cuatro son de leer y experimentar, y dos de ellas lo advierten en sus propias instrucciones.
- **Los tests corren sobre Jest con el entorno jsdom.** Cada fichero lee tu `index.html` y tu `styles.css` del disco, inyecta el CSS en un documento jsdom y examina el resultado.
- **Las reglas se buscan por el texto exacto del selector.** El corrector recorre `document.styleSheets[0].cssRules` buscando `selectorText === ".myDiv"` o `"#myUL li"`, así que una regla que funciona en el navegador pero está escrita como `div.myDiv` o `body .myDiv` es invisible para el test.
- **Los valores se comparan como cadenas de texto.** `33.33%` pasa y `33.3%` no; en el ejercicio de `z-index` la comprobación sí es numérica y vale cualquier valor por debajo de cero.
- **Casi todos los tests empiezan comprobando que el `<head>` sigue intacto**: el `<meta>`, el `<title>` y el `<link>` que apunta a la hoja de estilos tienen que seguir ahí tal cual venían.
- **Algunos tests también miran lo que *no* usaste.** El ejercicio de centrado falla si el `body` declara `display: flex`, `display: grid`, `justify-content: center` o `place-items: center`, o si `.myDiv` se centra con `position: absolute` más un `translate`. El de pseudoelementos comprueba que el `h1::before` original conserva su borde derecho `45px solid blue` y su margen inferior de `-35px`.

> 💡 Abre la vista previa antes de escribir nada. Varios ejercicios están pensados para que mires la página de partida, cambies una sola propiedad y vuelvas a mirar: esa comparación es la lección.

## 💡 ¿Qué errores conviene evitar?

- **Escribir los estilos en cualquier sitio que no sea `styles.css`.** Un atributo `style` en línea, o un bloque de CSS escrito dentro del propio documento HTML, puede verse bien en la vista previa, pero el corrector solo lee el fichero de la hoja de estilos.
- **Tocar el `<head>`.** Quitar el `<title>`, el `<meta>` o cambiar la ruta del `<link>` rompe el primer test de casi todos los ejercicios, y ese test no tiene nada que ver con la propiedad que estabas practicando.
- **Centrar con Flexbox en el ejercicio de `margin: auto`.** Es el único sitio donde la solución moderna está rechazada a propósito: usa `margin: auto`, `margin: 0 auto` o `margin-left` y `margin-right` en `auto`, sobre un elemento que ya tenga `width: 400px`.
- **Redondear el ancho de las columnas.** Tres columnas de `33.33%` es lo que espera el test, carácter a carácter.
- **Tirar de `float` o de `position` en los ejercicios de Flexbox.** La barra lateral, las tres columnas y la maquetación final lo dicen de forma explícita, y esta última pide además usar `gap: 10px` en el contenedor en lugar de ir sumando márgenes.
- **Reescribir la regla `h1::before` en vez de añadir `h1::after`.** La flecha que ya existe está protegida por el test; lo tuyo es replicarla con `border-left: 45px solid blue` y `margin-left: 20px`.
- **Esperar que `z-index` funcione sobre un elemento estático.** En ese ejercicio la imagen ya tiene `position: absolute`, que es justo lo que hace que el orden de apilamiento se aplique; sobre un elemento sin posicionar, `z-index` no hace nada.
- **Confundir `visibility: hidden` con `display: none`.** El primero deja un agujero en la maquetación y el segundo lo cierra. El ejercicio pide uno de cada precisamente para que lo veas.

## ❓ Preguntas frecuentes

### ¿Cuánto se tarda en aprender maquetación CSS con estos ejercicios?

El tutorial declara 8 horas estimadas para 11 ejercicios prácticos, unos 40 minutos cada uno. Quien ya escribe CSS con soltura suele ir más rápido, porque los cuatro primeros ejercicios son experimentos cortos más que construcciones.

### ¿Hace falta saber Flexbox antes de empezar?

No. Flexbox se introduce desde cero en el ejercicio de la barra lateral, donde se explica `display: flex` como la propiedad que coloca a los hijos uno al lado del otro, y a partir de ahí se reutiliza en las tres columnas, en la reparación a dos columnas y en la maquetación estática final.

### ¿Sigue mereciendo la pena aprender `float` y `position` existiendo Flexbox?

Sí, y por eso van primero. `position: absolute` y `z-index` siguen siendo la forma de apilar overlays, insignias y desplegables; `float` sigue siendo cómo el texto rodea una imagen; y `margin: auto` sigue siendo el camino más corto para centrar un bloque de ancho fijo. Flexbox sustituyó a los apaños de maquetación, no a estas propiedades.

### ¿Tengo que instalar algo para empezar?

No. El repositorio incluye un devcontainer, así que abrirlo en GitHub Codespaces te da un editor con LearnPack, su plugin de HTML y Jest ya instalados. La instalación local es opcional y solo necesita Node.js más esos mismos paquetes.

### El diseño se ve bien pero el test sigue fallando, ¿qué hago?

Comprueba tres cosas en este orden: que tu regla esté en `styles.css`, que el selector esté escrito exactamente como lo nombra el enunciado y que el valor coincida al pie de la letra, incluidas la unidad y los decimales. El corrector compara cadenas de texto, así que no tiene ninguna opinión sobre si la página se ve bonita.

### ¿Estos ejercicios son gratis? ¿Puedo reutilizarlos?

Abrirlos y completarlos no cuesta nada, y el CSS que escribas es tuyo. Ahora bien, el repositorio no incluye un fichero `LICENSE`, así que no es open source y no concede permiso para republicar, redistribuir ni vender el material.

<!-- hide -->
## 📝 Tutoriales relacionados

1. [Aprende HTML](https://github.com/4GeeksAcademy/html-tutorial-exercises-course)
2. [Aprende formularios HTML](https://github.com/4GeeksAcademy/html-forms-tutorial-exercises)
3. [Aprende CSS](https://github.com/4GeeksAcademy/css-tutorial-exercises-course)
4. [Aprende maquetación con CSS](https://github.com/4GeeksAcademy/css-layouts-tutorial-exercises) ← 🔥 estás aquí
5. [Aprende Bootstrap](https://github.com/4GeeksAcademy/bootstrap-exercises-tutorial)

## 🚀 ¿Cómo empezar?

El camino más rápido es [abrirlo en Codespaces](https://codespaces.new/4GeeksAcademy/css-layouts-tutorial-exercises). El devcontainer instala Node 22, LearnPack y Jest por ti, y los ejercicios deberían abrirse solos en cuanto VS Code termine de cargar.

> 💡 Si no arrancan automáticamente, escribe `learnpack start` en la terminal.

También puedes seguir el tutorial online en su [página de ejercicio interactivo](https://4geeks.com/es/interactive-exercise/css-layouts-tutorial-exercises-es).

## 💻 Instalación local

[Clona el repositorio](https://4geeks.com/how-to/github-clone-repository) y, desde la carpeta que contiene `learn.json`:

1. Instala LearnPack, su plugin de HTML y el ejecutor de tests:

    ```bash
    npm i @learnpack/learnpack -g
    learnpack plugins:install @learnpack/html
    npm i jest@29.7.0 jest-environment-jsdom@29.7.0 -g
    ```

2. Arranca el tutorial:

    ```bash
    learnpack start
    ```

## 📚 ¿Cómo están organizados los ejercicios?

Cada ejercicio es una mini web independiente dentro de su propia carpeta:

- **`README.md` / `README.es.md`**: las instrucciones, en inglés y en español.
- **`index.html`**: el marcado de partida. La mayoría de los ejercicios te piden que no lo cambies.
- **`styles.css`**: donde va tu CSS.
- **`test.js`**: el corrector automático, presente en 8 de los ejercicios. No necesitas abrirlo nunca.
- **`solution.hide.css`** (y `solution.hide.html` en dos ejercicios): la solución de referencia, oculta por la interfaz de LearnPack hasta que la pides.

## 🤝 Colaboradores

20 personas han contribuido a este repositorio. Ordenadas por número de commits:

- [@alesanchezr](https://github.com/alesanchezr) — autor original del tutorial
- [@josemoracard](https://github.com/josemoracard)
- [@tommygonzaleza](https://github.com/tommygonzaleza)
- [@UmiKami](https://github.com/UmiKami)
- [@Charlytoc](https://github.com/Charlytoc)
- [@ElviraQDP](https://github.com/ElviraQDP)
- [@Lorenagubaira](https://github.com/Lorenagubaira)

La lista completa está en el [gráfico de colaboradores](https://github.com/4GeeksAcademy/css-layouts-tutorial-exercises/graphs/contributors). Este proyecto sigue la especificación [all-contributors](https://github.com/kentcdodds/all-contributors) y las contribuciones de cualquier tipo son bienvenidas: reporta los problemas en el [issue tracker de LearnPack](https://github.com/learnpack/learnpack/issues/new).
<!-- endhide -->
