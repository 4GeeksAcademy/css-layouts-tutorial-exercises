# `09.2` Calendar Icon

En este ejercicio, usarás los pseudoelementos `::before` y `::after` para construir un ícono que simule la apariencia de un calendario clásico con anillos de sujeción. El objetivo es aplicar estilos creativos con CSS para generar formas visuales sin usar imágenes externas.

El elemento base es un `div` con la clase `.calendar`, que contiene un elemento `<em>`. Ya se han creado los pseudoelementos, pero su posición, color y forma no están correctamente definidos.

![Calendar Icon](../../.learn/assets/AlDLXvy.png?raw=true)



## 📝 Instrucciones:

1. Usa `position: absolute` para posicionar adecuadamente los pseudoelementos `::before` y `::after` del contenedor `.calendar`, de modo que representen los bordes o marcas superiores del calendario.

2. Aplica también `position: absolute` a los pseudoelementos `::before` y `::after` del elemento `<em>` (que actúan como anillos o sujetadores).

3. Ajusta sus colores para que coincidan entre sí y simulen visualmente el metal o plástico del anillo.

4. Aplica `border-radius` a los pseudoelementos de `<em>` para que tomen una forma circular, simulando un anillo visto desde el frente (2D).



## 💡 Pista:

+ Si no colocas los pseudoelementos en `position: absolute`, seguirán ocupando espacio en el flujo del documento.
+ Puedes usar propiedades como `width`, `height`, `background-color`, `border-radius` y `top`, `left`, etc. para posicionar y estilizar los anillos.
+ Este ejercicio no tiene pruebas debido a que se puede llegar a la solución con diferentes valores, por lo que cuando el resultado de tu código se vea similar al ejemplo, puedes pasar al siguiente ejercicio.



