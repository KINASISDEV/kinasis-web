<div align="center">

# Kinasis Web

### Sitio web corporativo de Kinasis

[![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vue](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

</div>

---

## �️ Estructura del Proyecto

```text
📦 kinasis-web/
├── 📁 public/                    # 🖼️ Archivos estáticos (favicon, imágenes, etc.)
├── 📁 src/
│   ├── 📁 assets/               # 🎨 Recursos del proyecto (imágenes, iconos)
│   ├── 📁 components/           # 🧩 Componentes reutilizables
│   │   ├── 📁 AboutUs/         # ℹ️ Componentes de "Acerca de Nosotros"
│   │   ├── 📁 Contact/         # 📧 Componentes de Contacto
│   │   ├── 📁 DevTools/        # 🛠️ Componentes de Herramientas de Desarrollo
│   │   ├── 📁 Foundators/      # 👥 Componentes de Fundadores
│   │   ├── 📁 Goals/           # 🎯 Componentes de Objetivos
│   │   ├── 📁 OurVision/       # 👁️ Componentes de Nuestra Visión
│   │   ├── 📁 ProcessDev/      # ⚙️ Componentes de Proceso de Desarrollo
│   │   ├── 📁 ReadyWork/       # ✅ Componentes de Trabajos Realizados
│   │   ├── 📁 Services/        # 💼 Componentes de Servicios
│   │   └── 📁 Team/            # 👨‍💻 Componentes de Equipo
│   ├── 📁 layouts/              # 📐 Layouts de páginas
│   │   └── 📄 Layout.astro
│   └── 📁 pages/                # 📄 Páginas del sitio
│       ├── 🏠 index.astro
│       ├── 📄 HomePage.astro
│       ├── 👥 TeamWorkPage.astro
│       ├── 💻 TecnologiesPage.astro
│       └── 💼 WorkPage.astro
├── ⚙️ astro.config.mjs          # Configuración de Astro
├── 📦 package.json
├── 🔧 tsconfig.json
└── 📖 README.md
```

## 📁 Convenciones de Archivos

### 🧩 Componentes

Cada componente y micro-componente sigue esta estructura:

```text
📁 ComponentName/
├── 📄 ComponentName.astro       # (o .jsx, .tsx, .vue según el framework)
├── 🎨 style.css                 # Archivo de estilos (OBLIGATORIO)
├── 📜 script.js                 # (OPCIONAL) Solo si se requiere funcionalidad adicional (API REST, etc.)
└── 📊 data.json                 # (OPCIONAL) Solo si el componente necesita datos estructurados
```

### ✨ Notas importantes:

#### 🎨 **Estilos** (Obligatorio)
Cada componente **debe tener** un archivo de estilos. 

> ⚠️ **Pendiente de decisión:** Actualmente se está evaluando si usar:
> - ✅ CSS puro
> - ✅ SASS/SCSS
> - ✅ Bootstrap
> - ✅ Otra solución de estilos

#### 📜 **JavaScript** (Opcional)
Los archivos `.js` solo se agregan cuando el componente necesita:
- 🌐 Llamadas a API REST
- 🧠 Lógica compleja de negocio
- ⚡ Funcionalidad interactiva adicional

#### 📊 **JSON** (Opcional)
Algunos componentes pueden incluir archivos `.json` para:
- ⚙️ Configuración
- 📦 Datos estáticos
- 📋 Contenido estructurado

## ⚡ Comandos

Todos los comandos se ejecutan desde la raíz del proyecto en la terminal:

| Comando                   | Acción                                                    |
| :------------------------ | :-------------------------------------------------------- |
| 📥 `npm install`             | Instala las dependencias                                  |
| 🚀 `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321`      |
| 🏗️ `npm run build`           | Construye el sitio para producción en `./dist/`           |
| 👀 `npm run preview`         | Previsualiza la build localmente antes de desplegar       |
| 🛠️ `npm run astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check`      |
| ❓ `npm run astro -- --help` | Obtiene ayuda sobre el CLI de Astro                       |

## 🛠️ Stack Tecnológico

<div align="center">

| Tecnología | Descripción |
|:----------:|:------------|
| ![Astro](https://img.shields.io/badge/Astro-FF5D01?style=flat&logo=astro&logoColor=white) | Framework principal para desarrollo web |
| ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) | Para componentes interactivos React |
| ![Vue](https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=vue.js&logoColor=white) | Para componentes interactivos Vue |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) | Tipado estático y mejor DX |

</div>

## 📦 Instalación

### 🔧 Configuración inicial

```bash
# 📥 Clonar el repositorio
git clone [url-del-repositorio]

# 📂 Navegar al directorio
cd kinasis-web

# 📦 Instalar dependencias
npm install

# ⚡ Instalar integraciones de React y Vue (si no están instaladas)
npm install react react-dom @astrojs/react vue @astrojs/vue

# 🚀 Iniciar servidor de desarrollo
npm run dev
```

### 🌐 El servidor estará disponible en:
```
http://localhost:4321
```

## 🔌 Integraciones

Las integraciones de React y Vue están configuradas en `astro.config.mjs`:

```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vue from '@astrojs/vue';

export default defineConfig({
  integrations: [
    react(),    // ⚛️ Soporte para React
    vue()       // 💚 Soporte para Vue
  ],
});
```

---

## 📚 Recursos y Documentación

<div align="center">

| 📖 Recurso | 🔗 Link |
|:-----------|:--------|
| Documentación de Astro | [docs.astro.build](https://docs.astro.build) |
| Documentación de React | [react.dev](https://react.dev) |
| Documentación de Vue | [vuejs.org](https://vuejs.org) |

</div>

---

<div align="center">

### 💡 Desarrollado por el equipo de **Kinasis**

🌟 *Building the future, one component at a time* 🌟

</div>
