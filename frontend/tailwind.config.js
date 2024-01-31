/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
// {
//   "compilerOptions": {
//     "target": "ES2020",
//     "useDefineForClassFields": true,
//     "lib": ["ES2020", "DOM", "DOM.Iterable"],
//     "module": "ESNext",
//     "skipLibCheck": true,

//     /* Bundler mode */
//     "moduleResolution": "bundler",
//     "allowImportingTsExtensions": true,
//     "resolveJsonModule": true,
//     "isolatedModules": true,
//     "noEmit": true,
//     "jsx": "react-jsx",

//     /* Linting */
//     "strict": true,
//     "noUnusedLocals": true,
//     "noUnusedParameters": true,
//     "noFallthroughCasesInSwitch": true
//   },
//   "include": ["src"],
//   "references": [{ "path": "./tsconfig.node.json" }]
// }

