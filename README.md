# Kinasis Web - Proyecto Astro

Sitio web corporativo de Kinasis construido con Astro, React y Vue.

## 🚀 Estructura del Proyecto

```text
/
├── public/                    # Archivos estáticos (favicon, imágenes, etc.)
├── src/
│   ├── assets/               # Recursos del proyecto (imágenes, iconos)
│   ├── components/           # Componentes reutilizables
│   │   ├── AboutUs/         # Componentes de "Acerca de Nosotros"
│   │   ├── Contact/         # Componentes de Contacto
│   │   ├── DevTools/        # Componentes de Herramientas de Desarrollo
│   │   ├── Foundators/      # Componentes de Fundadores
│   │   ├── Goals/           # Componentes de Objetivos
│   │   ├── OurVision/       # Componentes de Nuestra Visión
│   │   ├── ProcessDev/      # Componentes de Proceso de Desarrollo
│   │   ├── ReadyWork/       # Componentes de Trabajos Realizados
│   │   ├── Services/        # Componentes de Servicios
│   │   └── Team/            # Componentes de Equipo
│   ├── layouts/              # Layouts de páginas
│   │   └── Layout.astro
│   └── pages/                # Páginas del sitio
│       ├── index.astro
│       ├── HomePage.astro
│       ├── TeamWorkPage.astro
│       ├── TecnologiesPage.astro
│       └── WorkPage.astro
├── astro.config.mjs          # Configuración de Astro
├── package.json
├── tsconfig.json
└── README.md
```

## 📁 Convenciones de Archivos

### Componentes

Cada componente y micro-componente sigue esta estructura:

```text
ComponentName/
├── ComponentName.astro       # (o .jsx, .tsx, .vue según el framework)
├── style.css                 # Archivo de estilos (OBLIGATORIO)
├── script.js                 # (OPCIONAL) Solo si se requiere funcionalidad adicional (API REST, etc.)
└── data.json                 # (OPCIONAL) Solo si el componente necesita datos estructurados
```

**Notas importantes:**
- **Estilos**: Cada componente **debe tener** un archivo de estilos. Actualmente se está evaluando si usar:
  - CSS puro
  - SASS/SCSS
  - Bootstrap
  - Otra solución de estilos
  
  *Pendiente de decisión, pero el archivo de estilos es obligatorio.*

- **JavaScript**: Los archivos `.js` solo se agregan cuando el componente necesita:
  - Llamadas a API REST
  - Lógica compleja de negocio
  - Funcionalidad interactiva adicional

- **JSON**: Algunos componentes pueden incluir archivos `.json` para:
  - Configuración
  - Datos estáticos
  - Contenido estructurado

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto en la terminal:

| Comando                   | Acción                                                    |
| :------------------------ | :-------------------------------------------------------- |
| `npm install`             | Instala las dependencias                                  |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321`      |
| `npm run build`           | Construye el sitio para producción en `./dist/`           |
| `npm run preview`         | Previsualiza la build localmente antes de desplegar       |
| `npm run astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check`      |
| `npm run astro -- --help` | Obtiene ayuda sobre el CLI de Astro                       |

## 🛠️ Tecnologías

- **Astro**: Framework principal
- **React**: Para componentes interactivos React
- **Vue**: Para componentes interactivos Vue
- **TypeScript**: Tipado estático

## 📦 Instalación

```bash
# Clonar el repositorio
git clone [url-del-repositorio]

# Instalar dependencias
npm install

# Instalar integraciones de React y Vue (si no están instaladas)
npm install react react-dom @astrojs/react vue @astrojs/vue

# Iniciar servidor de desarrollo
npm run dev
```

## 🌐 Integraciones

Las integraciones de React y Vue están configuradas en `astro.config.mjs`:

```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vue from '@astrojs/vue';

export default defineConfig({
  integrations: [
    react(),
    vue()
  ],
});
```

## 📚 Recursos

- [Documentación de Astro](https://docs.astro.build)
- [Documentación de React](https://react.dev)
- [Documentación de Vue](https://vuejs.org)
