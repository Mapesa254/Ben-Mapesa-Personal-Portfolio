# Modern Personal Portfolio UI

This is a modern, highly interactive, and responsive Personal Portfolio built purely with vanilla web technologies and Vite. The original UI design concept is available at [Figma](https://www.figma.com/design/JH7GghXU6hSBeFyLTMKhjA/Modern-Personal-Portfolio-UI).

## Table of Contents
- [Features](#features)
- [Technologies & Dependencies](#technologies--dependencies)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)

## Features

- **Semantic HTML5:** Clean, structured `index.html` acting as the structural skeleton.
- **Vanilla TypeScript:** All interactivity, state management, and dynamic behavior (like theme toggling, filtering, scrolling animations) are handled via pure, modular TypeScript.
- **Tailwind CSS v4:** Modern utility-first styling with custom CSS properties for complex designs (e.g., gradients, glassmorphism, glowing orbs).
- **Responsive Design:** Fully fluid layouts tailored for both mobile devices and desktop clients.
- **Dark/Light Mode:** Seamless dynamic theme switching built into the navigation bar.
- **Lucide Icons:** Crisp, scalable vector icons injected dynamically via data attributes.

## Technologies & Dependencies

This project relies on a minimal set of dependencies to maintain high performance without the overhead of heavy frameworks like React:

### Core Dependencies
- **[Vanilla TypeScript](https://www.typescriptlang.org/) (`^5.7.2`):** Brings type safety and modular architecture to vanilla JS.
- **[Tailwind CSS](https://tailwindcss.com/) (`^4.1.12`):** Rapid UI development, handled via `@tailwindcss/vite` plugin.
- **[Lucide Icons](https://lucide.dev/) (`^0.487.0`):** Used for beautiful, consistent iconography across the platform.

### Development Dependencies
- **[Vite](https://vitejs.dev/) (`^6.4.1`):** A blazing fast frontend build tool and local development server.

## Project Structure

```text
├── index.html            # Main markup file containing all layout & textual content
├── package.json          # Project metadata, scripts, and dependency definitions
├── src/
│   ├── main.ts           # Primary entry point; orchestrates TS modules
│   ├── js/               # Modular logic (about, contact, projects, skills, tools)
│   └── styles/           # Global and component-specific Vanilla CSS logic
```

## Getting Started

Follow these steps to run the portfolio on your local machine.

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.0 or higher recommended)
- `npm` or `yarn` package manager

### Installation

1. Install the necessary dependencies:
   ```bash
   npm i
   ```

### Running the Development Server

Start the Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```

### Building for Production

Compile the project and bundle all assets for production usage:
```bash
npm run build
```
You can then preview the production build using:
```bash
npm run preview
```