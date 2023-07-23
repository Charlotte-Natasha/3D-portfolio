# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Installation

npm create vite@latest

cd my-project

npm install
npm run dev

### Packages installed 

npm install styled-components

npm install styled-icons --save

npm i -S react-simple-maps

npm install @emailjs/browser --save

npm i @react-three/fiber @react-three/drei three

(sudo) npm install -g gltf-pipeline

### Converting a glTF to Draco glTF

gltf-pipeline -i model.gltf -o modelDraco.gltf -d

npx gltfjsx model.gltf --transform