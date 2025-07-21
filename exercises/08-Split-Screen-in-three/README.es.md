# `08` Split Screen in Three

Ahora que ya sabes cómo usar `Flexbox` para colocar dos elementos uno al lado del otro, es momento de llevarlo un paso más allá: crear una estructura de **tres columnas iguales**, muy común en dashboards, sistemas de noticias y plantillas web.


Con `display: flex`, puedes distribuir tantos elementos como quieras en una misma línea. Si cada uno ocupa `33.33%` del ancho, llenarás el 100% del espacio horizontal. Esto permite dividir la pantalla en tercios de forma precisa.



## 📝 Instrucciones:

1. Agrupa tres elementos `div` dentro de un contenedor con la clase `.wrapper`.
2. Asegúrate de que:
   - `.wrapper` tenga `display: flex` y `width: 100%`.
   - Cada una de las tres cajas tenga un ancho (`width`) de `33.33%`.
   - Cada caja tenga un color de fondo diferente para distinguirlas visualmente.
3. Utiliza la propiedad `flex-direction` para asegurarte de que los elementos se alineen horizontalmente.


### 💡 Pistas

- No uses `float` ni `inline-block`. Usa exclusivamente `flexbox`.
- Alinea los tres `div` directamente uno después del otro, sin saltos de línea ni espacios entre etiquetas para evitar pequeños márgenes inesperados.
- Si ves espacios indeseados entre los bloques, revisa el HTML para asegurarte de que los `div` estén en la misma línea y sin saltos.

## Resultado esperado

Tres columnas del mismo tamaño alineadas horizontalmente, cada una con un color de fondo distinto, ocupando un tercio del ancho de la pantalla.

![Three equal-width columns aligned horizontally](../../.learn/assets/img-three-parts.png?raw=true)
