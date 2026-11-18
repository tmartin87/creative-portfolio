# Memoria del proyecto

Última actualización: 18 de noviembre de 2026.

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
- Actualizar esta memoria al terminar una fase; no guardar credenciales ni dar tareas no verificadas por completadas.

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
- src/App.tsx: muestra el título Creative Developer y un párrafo inicial. Aún no contiene Canvas ni escena 3D.
- vite.config.ts, tsconfig.json, package.json y package-lock.json.
- .gitignore, README.md, AGENTS.MD y MEMORY.MD.
- Carpetas creadas inicialmente: src/components, src/experience, src/hooks y src/data. Las carpetas vacías no se guardan en Git.
- No hay todavía estilos propios, shaders, animaciones, navegación, contenido real de proyectos ni skills propias implementadas.

## Validación e incidencias resueltas
- El usuario confirmó que la aplicación básica se veía en el navegador.
- El 404 inicial se resolvió moviendo index.html desde src a la raíz.
- El aviso de TypeScript por falta de archivos desapareció al crear src/App.tsx.
- El usuario aportó una compilación de producción correcta antes de añadir type: module.
- Se añadió type: module para corregir el aviso de Vite sobre sintaxis ESM cargada como CommonJS. No se ha aportado una nueva salida de compilación posterior que confirme la desaparición del aviso.
- No se ha realizado QA de una escena WebGL porque todavía no existe.

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
- React Three Fiber renderizará la escena; GSAP se propone para animar posición y enfoque de cámara. Todavía no está implementado.

## Arquitectura acordada
- Separar la interfaz HTML de la experiencia 3D.
- Mantener el contenido y la navegación accesibles por teclado.
- Prever alternativa sin WebGL y respetar movimiento reducido; pendientes de implementación.
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
- Esta actualización de memoria no se ha confirmado mediante commit ni subido a GitHub.

## AGENTS y skills
- AGENTS.MD existe y contiene las reglas acordadas; se observaron barras invertidas antes de algunos marcadores Markdown. No se ha reformateado.
- MEMORY.MD es un registro explícito de continuidad, no memoria automática ni sustituto de AGENTS.MD.
- El usuario quiere utilizar skills, pero todavía no se ha elegido ni creado una skill propia.
- Crear una skill cuando exista una tarea concreta y repetible, explicando su utilidad antes de usarla.

## Próximo paso
Cerrar la sesión guardando la escena estática: comprobar npm run build y git status, revisar cambios, crear commit y subirlo con el usuario. Al retomar, antes de modificar código, crear o seleccionar la rama feat/animated-core tras comprobar el estado del repositorio. Después conectar Core y respetar movimiento reducido.

## Fases siguientes propuestas
1. Añadir movimiento ambiental y respuesta al cursor respetando movimiento reducido.
2. Definir los datos de los destinos y animar cámara y enfoque entre dos puntos.
3. Añadir menú, anterior/siguiente y contenido HTML accesible.
4. Incorporar scroll, partículas y materiales más experimentales según el diseño elegido.
5. Medir rendimiento en móvil, revisar accesibilidad, dependencias y alternativa sin WebGL.
6. Sustituir contenido provisional por proyectos reales y preparar despliegue.

## Información aún pendiente
- Nombre público, presentación profesional y contacto.
- Selección y contenido real de proyectos: imágenes, enlaces, responsabilidades y resultados.
- Orlune y Nexo se mencionaron en el contexto anterior, pero no hay materiales ni detalles verificados. No inventar sus características.
- Idioma final del portfolio, diseño visual definitivo y destino de alojamiento.

## Avance de la sesión y próxima rama
- El usuario confirmó que la escena estática conectada a App se ve correctamente: fondo oscuro, icosaedro turquesa y luces.
- Se proporcionó el código de src/experience/Core.tsx con useRef y useFrame para rotación; su creación no está confirmada.
- Conectar Core dentro de Canvas y añadir soporte de movimiento reducido siguen pendientes.
- El usuario pidió subir este avance a GitHub y continuar en la próxima sesión; faltan la salida de build, el estado de Git y la confirmación del commit/push.
- Próxima funcionalidad: animación del núcleo, en la rama feat/animated-core. No se ha creado esa rama todavía.
- La regla permanente de usar ramas para funcionalidades y correcciones queda registrada en AGENTS.MD.
- Este avance actualiza la descripción inicial de App sin Canvas: esa descripción corresponde a la revisión anterior, no al estado comunicado posteriormente por el usuario.
