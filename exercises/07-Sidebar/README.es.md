# `07` Sidebar

Una estructura común en los sitios web modernos es el diseño con una **barra lateral** (o *sidebar*) a la izquierda y un **contenido principal** a la derecha. Este patrón se usa, por ejemplo, en paneles de administración, sitios de noticias o mensajería.


A partir de este ejercicio, aprenderás a usar `Flexbox`, una técnica moderna de CSS que te permite organizar los elementos dentro de un contenedor de manera flexible y sencilla. Cuando usas `display: flex;` en un contenedor, sus elementos hijos se colocan automáticamente **uno al lado del otro**, a menos que indiques lo contrario. Esto lo hace ideal para construir layouts como este.



Por lo tanto el objetivo de este ejercicio será replicar un diseño de dos columnas en la misma línea: una barra lateral del 30% de ancho y un área de contenido del 70%.


![Diseño de layout horizontal con dos bloques. A la izquierda, una barra lateral gris con el texto "Sidebar" que ocupa aproximadamente el 30% del ancho. A la derecha, un área verde oscuro con el texto "Content" que ocupa el 70% restante. Ambos bloques están alineados horizontalmente y tienen la misma altura.](../../.learn/assets/69N2q6G.png?raw=true)

## 📝 Instrucciones:

1. Crea un `div` contenedor con clase `wrapper`.
2. Asegúrate de que:
   - El `div.wrapper` tenga `width: 100%` y `height: 100px`.
   - Use `display: flex` para colocar sus elementos en línea.
3. Dentro del contenedor, coloca:
   - Un `div.sidebar` con `width: 30%` y color de fondo **gris**.
   - Un `div.content` con `width: 70%` y color de fondo **verde**.


### 💡 Pistas

- No necesitas modificar el HTML, solo aplicar o completar los estilos CSS.
- Usa colores de fondo para visualizar mejor las áreas.
- No uses `float`, ni `position` en este ejercicio.

