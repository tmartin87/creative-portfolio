# Memoria del proyecto

Última actualización: 27 de noviembre de 2026.

## Objetivo
Crear un portfolio Creative Developer con estética Tech & Immersive y navegación WebGL experimental. El portfolio debe mostrar trabajo real y demostrar capacidades de desarrollo creativo y motion.

## Ubicación y repositorio
- Carpeta activa del proyecto: C:\Users\User\Documents\PROYECTOS\PORTFOLIO
- Repositorio: https://github.com/tmartin87/creative-portfolio
- Remoto origin configurado con esa URL.
- Existe una carpeta inicial anterior en C:\Users\User\Documents\ChatGPT\PORTFOLIO. No confundirla con el proyecto activo.
- Subir el código a GitHub no equivale a desplegar la web. No hay despliegue confirmado.

## Colaboración y aprendizaje
- El usuario quiere entender el proceso y hacer los cambios personalmente.
- Explicar un paso cada vez: propósito, contenido o comando y cómo verificarlo.
- Esperar su resultado antes de avanzar al siguiente paso.
- El asistente puede ejecutar acciones cuando el usuario lo pide explícitamente; no interpretar una petición puntual como autorización permanente.
- Explicaciones en español. Se ha recomendado inglés para commits y documentación técnica; el idioma final de la web sigue pendiente.
- Consultar AGENTS.MD para las reglas del proyecto y este archivo para su estado.
- El usuario autoriza permanentemente al asistente a actualizar MEMORY.MD por su cuenta, sin pedirlo cada vez, al cerrar fases o registrar decisiones. Hacerlo antes del commit de cierre cuando sea posible. Esta autorización no incluye commits, subidas, merges ni cambios de código.
- No guardar credenciales ni dar tareas no verificadas por completadas.

## Stack y configuración actuales
Dependencias declaradas en package.json (rangos, no garantía de versión instalada):
- React y React DOM: ^19.3.1.
- React Three Fiber: ^9.8.2.
- Three.js: ^0.187.0.
- GSAP: ^3.15.1.
- Vite: ^8.3.8; plugin React: ^6.3.0.
- TypeScript: ^7.0.2; tipos de React, React DOM y Three.js instalados.
- Node.js v24.18.0 y npm 11.16.0 según la salida aportada por el usuario durante la preparación; no recomprobados hoy.
- package.json utiliza "type": "module".
- TypeScript: modo strict, JSX react-jsx, moduleResolution Bundler, noEmit, objetivo ES2022 e include src.
- Vite activa @vitejs/plugin-react.

## Comandos
- npm run dev: servidor local de desarrollo.
- npm run build: tsc --noEmit && vite build.
- npm run preview: vista previa local de la compilación.
- No confundir npm run preview con un alojamiento público.

## Estructura y estado funcional
Archivos comprobados el 18/11/2026:
- index.html: en la raíz, idioma es, metadatos iniciales, contenedor root y entrada /src/main.tsx.
- src/main.tsx: monta App dentro de StrictMode y comprueba que existe root.
- src/App.tsx: muestra el título, un párrafo inicial y el componente Experience con la escena 3D.
- vite.config.ts, tsconfig.json, package.json y package-lock.json.
- .gitignore, README.md, AGENTS.MD y MEMORY.MD.
- Carpetas creadas inicialmente: src/components, src/experience, src/hooks y src/data. Las carpetas vacías no se guardan en Git.
- src/experience/Experience.tsx: Canvas, fondo oscuro, luces y Core. Consulta prefers-reduced-motion y escucha sus cambios; utiliza frameloop demand cuando está activado.
- src/experience/Core.tsx: icosaedro turquesa con rotación suave mediante useFrame y useRef, delta limitado y pausa con movimiento reducido. Ambos archivos comprobados el 20/11/2026.
- src/experience/CameraRig.tsx: cámara con parallax suavizado mediante MathUtils.damp, conectada dentro de Canvas; implementación y pruebas confirmadas por el usuario.
- src/data/destinations.ts contiene dos destinos provisionales con título, descripción, posición de cámara y punto de enfoque.
- Experience.tsx muestra título y descripción del destino activo en una sección HTML con aria-live polite y aria-atomic, además de botones de navegación y geometrías provisionales.
- CameraRig combina transiciones GSAP y parallax, con invalidate para cambios inmediatos en movimiento reducido.
- src/styles.css: estilos globales y composición inmersiva con escena de fondo e interfaz superpuesta. src/main.tsx importa ./styles.css. src/vite-env.d.ts declara los tipos vite/client.
- Teclado, móvil y movimiento reducido validados por el usuario tras el cambio de composición. Pendientes: shaders, contenido real de proyectos y skills propias.

## Validación e incidencias resueltas
- El usuario confirmó que la aplicación básica se veía en el navegador.
- El 404 inicial se resolvió moviendo index.html desde src a la raíz.
- El aviso de TypeScript por falta de archivos desapareció al crear src/App.tsx.
- El usuario aportó una compilación de producción correcta antes de añadir type: module.
- Se añadió type: module para corregir el aviso de Vite sobre sintaxis ESM cargada como CommonJS. No se ha aportado una nueva salida de compilación posterior que confirme la desaparición del aviso.
- El usuario comprobó la escena WebGL, el giro, su pausa con movimiento reducido y su reanudación sin recargar. Estas pruebas fueron realizadas por el usuario, no por el asistente.
- El usuario aportó compilaciones correctas de la escena y de la integración en main. El aviso ESM anterior no aparece en esas salidas.
- Sigue pendiente optimizar el tamaño: Vite avisa de chunks superiores a 500 kB. La compilación termina correctamente; no se ha aplicado división de código.

## Dependencias: aviso pendiente
- npm audit reportó cinco entradas de gravedad alta originadas por picomatch y propagadas a fdir, tinyglobby, Vite y su plugin React.
- npm ls aportado por el usuario mostró picomatch 4.0.7, Vite 8.3.8 y plugin React 6.3.0.
- Aviso: https://github.com/advisories/GHSA-fc5q-39xc-vjpf
- En la consulta del 17/11/2026, el aviso indicaba que no había versión corregida. Ese estado es histórico: volver a verificarlo antes de proponer una solución.
- No se ejecutó npm audit fix --force. La propuesta de npm implicaba cambiar Vite a 6.2.7.
- Se acordó continuar con el prototipo local y revisar el problema antes de publicar. No considerar las vulnerabilidades resueltas.

## Dirección artística
- Confirmado: Tech & Immersive, con experimentación WebGL.
- Propuesta inicial aún por validar visualmente: fondo oscuro, profundidad, geometría procedural central, partículas, cuadrícula espacial y respuesta suave al cursor.
- Space Grotesk y Space Mono se propusieron en la conversación original; no están instaladas ni aprobadas como elección definitiva.
- Paleta, composición y materiales definitivos pendientes de elección.

## Referencias propuestas
- Lusion: https://lusion.co/ — dirección artística, 3D y motion.
- Bruno Simon: https://bruno-simon.com/ — navegación como parte de la experiencia.
- David Heckhoff: https://david-hckh.com/ — portfolio especializado en WebGL.
- Dennis Snellenberg: https://dennissnellenberg.com/ — presentación y organización de proyectos.
- Son referencias de estudio, no diseños que copiar. El usuario eligió cámara dirigida frente a exploración libre.

## Navegación confirmada
- Cámara dirigida entre escenas de proyectos.
- Recorrido inicial conceptual: Inicio → Proyecto 01 → Proyecto 02 → Sobre mí.
- Cada destino tendrá una posición de cámara y un punto de enfoque.
- Navegación inicial mediante botones anterior/siguiente y menú directo.
- Incorporar scroll después de validar las transiciones.
- Mostrar título, descripción y enlaces de cada destino mediante HTML.
- React Three Fiber renderiza la escena y GSAP anima posición base y enfoque entre dos destinos provisionales. Navegación y contenido HTML integrados en main y subidos según las confirmaciones del usuario.

## Arquitectura acordada
- Separar la interfaz HTML de la experiencia 3D.
- Mantener el contenido y la navegación accesibles por teclado.
- Movimiento reducido implementado para el giro del núcleo y el desplazamiento de cámara por cursor. Mantenerlo en próximas animaciones. La alternativa sin WebGL sigue pendiente.
- Construir primero un prototipo pequeño y funcional, después ampliar.
- Evolución prevista: componentes de interfaz, experience para escena/cámara, data para destinos, hooks y shaders cuando sean necesarios. No crear abstracciones sin necesidad.

## Git y GitHub
- Rama main creada por el usuario.
- Commit inicial: 5e75185 — Set up portfolio with React, TypeScript and Vite.
- GitHub tenía un historial inicial separado: 361b206 — Add project description to README.
- Se integraron con --allow-unrelated-histories; commit local comprobado: 2470600 — Merge remote README with initial portfolio setup.
- Se indicó git push -u origin main y el usuario revisó .gitignore en GitHub; no se aportó la salida final del push para verificar sincronización completa.
- .gitignore excluye node_modules, dist, .vite, archivos .env (salvo .env.example), logs y archivos del sistema.
- package-lock.json y .gitignore sí se versionan.
- La consulta de git status del asistente el 18/11/2026 devolvió "this operation must be run in a work tree". Se pudieron leer remoto e historial. Causa no investigada: no afirmar que el árbol está limpio ni modificar la configuración de Git sin comprobarla.
- Esta actualización del 20/11/2026 de MEMORY.MD está guardada localmente; no se ha creado un commit ni subido este cambio de documentación.

## AGENTS y skills
- AGENTS.MD existe y contiene las reglas acordadas; se observaron barras invertidas antes de algunos marcadores Markdown. No se ha reformateado.
- MEMORY.MD es un registro explícito de continuidad, no memoria automática ni sustituto de AGENTS.MD.
- El usuario quiere utilizar skills, pero todavía no se ha elegido ni creado una skill propia.
- Crear una skill cuando exista una tarea concreta y repetible, explicando su utilidad antes de usarla.

## Próximo paso
Revisar git status en feat/holographic-shader y guardar Core.tsx, src/shaders/holographic.ts y MEMORY.MD mediante commit; subir la rama y después guiar su integración en main. Shader y movimiento reducido validados por el usuario; build confirmado por el usuario, sin salida completa nueva. No dar commit, subida o integración de esta fase por completados.
## Fases siguientes propuestas
1. Rotación del núcleo y parallax implementados, probados e integrados en main según la confirmación del usuario.
2. Datos de dos destinos y transiciones implementados, probados e integrados en main según la confirmación del usuario.
3. Título y descripción HTML dinámicos implementados; siguientes mejoras: composición visual, navegación anterior/siguiente y pruebas de accesibilidad.
4. Incorporar scroll, partículas y materiales más experimentales según el diseño elegido.
5. Medir rendimiento en móvil, revisar accesibilidad, dependencias y alternativa sin WebGL.
6. Sustituir contenido provisional por proyectos reales y preparar despliegue.

## Información aún pendiente
- Nombre público, presentación profesional y contacto.
- Selección y contenido real de proyectos: imágenes, enlaces, responsabilidades y resultados.
- Orlune y Nexo se mencionaron en el contexto anterior, pero no hay materiales ni detalles verificados. No inventar sus características.
- Idioma final del portfolio, diseño visual definitivo y destino de alojamiento.

## Estado al cerrar la fase de animación (20/11/2026)
- Escena estática guardada y subida en 6cdcf65: Add initial 3D scene and document branch workflow.
- La animación se desarrolló en feat/animated-core, creada antes de modificar código.
- Commit bd72820: Animate 3D core and respect reduced motion preference. El push de esa rama quedó confirmado por la salida de Git.
- Se intentó crear una pull request: la integración devolvió 403 por falta de permisos y el navegador solicitó iniciar sesión. No se creó ninguna pull request mediante el asistente.
- El usuario prefirió integrar localmente en main. Se le guió con switch main, pull --ff-only, merge de feat/animated-core, build y push.
- El usuario aportó build correcto tras la integración y confirmó que el push a main terminó bien. Integración y subida registradas según esa confirmación; el asistente no consultó el remoto para revalidarlas.
- El historial local leído el 20/11/2026 tiene bd72820 como último commit.
- No se ha confirmado la eliminación de feat/animated-core; no asumir que esté borrada.
- Las ramas siguen siendo la regla para nuevas funcionalidades. Una pull request es opcional trabajando solo; también se puede integrar localmente después de revisar y compilar.
- Al cerrar esa fase se propuso feat/camera-parallax; su estado actual figura en la sección siguiente.

## Cámara con parallax (20/11/2026)
- Rama utilizada para esta fase: feat/camera-parallax; ya integrada en main según la confirmación posterior del usuario.
- Implementada en src/experience/CameraRig.tsx y conectada dentro de Canvas en Experience.tsx.
- Responde al cursor con desplazamiento suavizado mediante MathUtils.damp y delta limitado.
- Mantiene el enfoque en el centro del objeto mediante lookAt.
- Con movimiento reducido, deja de actualizar la cámara; no se ha implementado recentrado automático.
- El usuario confirmó el funcionamiento en navegador, incluido el respeto a movimiento reducido.
- npm run build terminó correctamente según la salida aportada por el usuario (279 ms).
- Sigue pendiente optimizar el tamaño del bundle: aviso de chunks superiores a 500 kB.
- Último git status aportado: MEMORY.MD y Experience.tsx modificados, CameraRig.tsx sin seguimiento.
- El usuario aportó el push correcto de feat/camera-parallax y confirmó después la integración y subida de main.

## Navegación entre destinos
- Implementada en feat/camera-navigation.
- Commit 4879f99 subido a GitHub; confirmado por la salida de Git aportada por el usuario.
- Dos destinos provisionales definidos en src/data/destinations.ts.
- Botones HTML para viajar entre Inicio y Proyecto 01.
- GSAP anima la posición base y el punto de enfoque.
- El parallax se aplica por separado sobre la posición base.
- Con movimiento reducido, el destino cambia inmediatamente.
- Corregido el renderizado bajo demanda mediante invalidate().
- El usuario confirmó la navegación y la corrección en modo reduce.
- Compilación correcta (297 ms según la salida aportada); sigue pendiente optimizar el tamaño del bundle.
- El usuario confirmó el commit y push de la memoria y, posteriormente, la integración, compilación y subida a main. No se aportó el hash del commit de documentación.
- La fase anterior feat/camera-parallax ya fue subida e integrada en main, según la salida del push y la posterior confirmación del usuario.

## Contenido HTML por destino
- Desarrollado en feat/destination-content.
- Se añadió description al tipo Destination y a los dos destinos.
- Textos provisionales: presentación Creative Developer y espacio reservado para Proyecto 01; no son casos de estudio reales.
- Experience muestra título y descripción del destino seleccionado fuera del Canvas mediante aria-live polite y aria-atomic.
- El contenido cambia al pulsar el botón, al inicio del viaje; no está sincronizado con la llegada de cámara.
- El usuario confirmó el cambio de textos en navegador y aportó build correcto (342 ms).
- El usuario confirmó commit y subida de la rama y, después, integración, build y push de main. No se aportaron hashes ni salidas finales de esas operaciones.
- La composición visual se ha implementado posteriormente en feat/immersive-layout; estado detallado en su sección.

## Preferencia permanente sobre la memoria
- El usuario pidió: actualizar MEMORY siempre por cuenta del asistente.
- Regla guardada en AGENTS.MD; ya no pedir al usuario que edite la memoria ni solicitar confirmación conversacional para cada actualización.
- Mantener separada esta autorización de las acciones de Git y de los cambios de código.

## Composición inmersiva (23/11/2026)
- Rama actual confirmada por git status aportado: feat/immersive-layout.
- Se eligió CSS normal frente a Tailwind para controlar y aprender composición, capas y estilos sin añadir otra herramienta.
- src/styles.css contiene base oscura, foco visible, tipografía adaptable y botones con estado activo turquesa.
- Experience separa la escena (experience__scene) de la interfaz HTML (experience__interface), con Canvas de fondo y textos/botones superpuestos.
- La interfaz usa pointer-events none y la navegación auto para conservar interacción con la escena y con los botones.
- App se simplificó para mostrar Experience, evitando la presentación duplicada.
- Se añadió src/vite-env.d.ts con la referencia vite/client. El usuario confirmó que desapareció el error de tipos de la importación CSS.
- Después se corrigió un error de ruta real: .styles.css se sustituyó por ./styles.css en main.tsx; el usuario confirmó que funcionó.
- El usuario confirmó que el texto se lee bien.
- Compilación correcta aportada: 318 ms; CSS 1.18 kB y JavaScript 1212.40 kB minificados (339.55 kB gzip). Sigue el aviso de chunks superiores a 500 kB; no se ha optimizado todavía.
- El usuario confirmó las tres pruebas del layout: navegación con Tab/Enter, ancho móvil sin recortes ni desplazamiento horizontal y cambio de destino sin animación con movimiento reducido.
- Archivos pendientes según git status: AGENTS.MD, MEMORY.MD, App.tsx, Experience.tsx y main.tsx modificados; styles.css y vite-env.d.ts sin seguimiento.
- Fase guardada en el commit 6ec71ed: Add immersive fullscreen layout and styled destination interface. Incluye AGENTS.MD y MEMORY.MD. Rama subida e integrada en main; el push aportado confirmó main de 1576382 a 6ec71ed. Build de integración correcto (280 ms).



## Cuadrícula espacial (24/11/2026)
- Rama actual confirmada por el git status aportado: feat/spatial-grid.
- Creado src/experience/SpatialGrid.tsx con gridHelper de 40 unidades y 40 divisiones, colores #285b60 y #172b38, posición [2, -2, 0].
- SpatialGrid importado y conectado dentro de Canvas en Experience.tsx.
- Añadida niebla del color de fondo #080b12 con distancias 8 y 25 para fundir la cuadrícula lejana.
- El usuario confirmó que la cuadrícula y la niebla se ven correctamente y que ambas geometrías siguen claras al navegar.
- npm run build correcto según la salida aportada: 289 ms; 37 módulos, JavaScript 1212.57 kB minificados y 339.63 kB gzip.
- Sigue pendiente optimizar el tamaño del bundle; el aviso de chunks superiores a 500 kB no impidió la compilación.
- Archivos pendientes según git status: MEMORY.MD y Experience.tsx modificados, SpatialGrid.tsx sin seguimiento.
- Commit f38dcdf: Add spatial grid and atmospheric fog. Rama feat/spatial-grid subida e integrada en main. El usuario aportó build de integración correcto (300 ms) y push de main confirmado de 6ec71ed a f38dcdf.


## Partículas ambientales (24/11/2026)
- Rama actual confirmada por git status aportado: feat/ambient-particles.
- Creado src/experience/Particles.tsx con 180 puntos y posiciones generadas una vez por montaje mediante useState y Float32Array.
- Renderizado mediante points y bufferGeometry; material #8abfc8, tamaño 0.035, opacidad 0.6, sizeAttenuation y depthWrite false.
- Añadido a Canvas en Experience.tsx con reducedMotion como propiedad.
- Rotación ambiental mediante useFrame y useRef, delta limitado y velocidad 0.015 radianes por segundo.
- El movimiento se detiene con reducedMotion y se reanuda cuando deja de estar activo.
- El usuario confirmó visibilidad, movimiento, pausa/reanudación y presencia de partículas entre ambos destinos.
- El usuario confirmó que npm run build pasa; no aportó la salida completa de esta compilación ni métricas nuevas.
- Último git status: MEMORY.MD y Experience.tsx modificados, Particles.tsx sin seguimiento.
- Commit 963a70b: Add ambient particles with reduced motion support. Rama subida e integrada en main. El usuario aportó build correcto (276 ms) y push de main confirmado de f38dcdf a 963a70b. JavaScript: 1213.18 kB minificados y 339.85 kB gzip; el aviso de tamaño sigue pendiente.


## Núcleo holográfico inicial (24/11/2026)
- Rama confirmada por git status del usuario: feat/holographic-core.
- Core.tsx agrupa dos icosaedros para conservar la rotación conjunta: líneas exteriores turquesas y superficie interior tenue a escala 0.96.
- Material exterior meshBasicMaterial wireframe transparente con opacidad 0.65, depthWrite false y AdditiveBlending.
- Material interior meshBasicMaterial #163b45, transparente, opacidad 0.3 y depthWrite false.
- La referencia del objeto animado cambió de Mesh a Group. La rotación y su pausa por movimiento reducido se conservan.
- El usuario confirmó aspecto correcto y que la figura se detiene con movimiento reducido.
- Se corrigió una edición inicial en la geometría equivocada: el nudo de Proyecto 01 conserva su material violeta.
- El diff de Experience.tsx aportado muestra solo comillas, puntos y coma e indentación; no cambios funcionales respecto a la versión anterior.
- Build correcto aportado: 290 ms, JavaScript 1213.42 kB minificados y 339.89 kB gzip. Persiste el aviso de tamaño.
- Es una aproximación visual con capas y mezcla aditiva, sin shader personalizado ni halo de postprocesado.
- El usuario confirmó el cierre completo: commit y subida de feat/holographic-core, integración en main, compilación y push de main correctos. No se aportaron hash ni salidas finales; estado registrado según su confirmación.


## Shader holográfico (27/11/2026)
- Rama comprobada por el asistente: feat/holographic-shader.
- src/shaders/holographic.ts exporta vertex y fragment shader GLSL.
- Vertex shader transmite posición y normal en espacio de vista y altura local.
- Fragment shader combina brillo de contorno y bandas de escaneo mediante uColor y uTime, con conversión de color y tone mapping.
- Core.tsx mantiene líneas exteriores y sustituye el material interior por shaderMaterial transparente y aditivo.
- Uniforms conservados con useState; uTime avanza con delta limitado y se pausa junto al giro cuando reducedMotion está activo.
- Corregido TS2307: el archivo se llamaba holograpic.ts; renombrado a holographic.ts. El asistente comprobó la ruta y leyó el archivo correcto.
- El usuario confirmó build correcto y pruebas en navegador: bandas visibles, pausa de bandas y giro con reduce, reanudación con no-preference.
- No se aportaron nuevas métricas de build. La validación visual fue realizada por el usuario, no por el asistente.
- Este shader inicial no incorpora los chunks de niebla; comprobar su integración visual con la niebla antes de ampliar distancias o destinos.
- Commit, subida e integración de esta fase pendientes. Memoria actualizada antes del cierre.
