# Namaste React 🚀

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Namaste Food

/\* Components of Our Food-Order App

- Header
- - Logo
- - Nav Items
- Body
- - Search Bar
- - Restaurant-Container
-      - Restaurant-Card
-          - Img
-          - Name of Res, Star Rating, cuisine, delivery time.
- Footer
- - Copyright
- - Links
- - Address
- - Contact
    \*/

# Two Types of Import/Export

- Default Import/Export
  export default Component;
  import {Componenr} from "path";

- Named Import/Export
  export const Component=()=>{};
  import {Component} from "path"

# React Hooks

- Normal JS utility functions
- Some important react hooks
  useState()
  useEffect()

## `useState()`

`useState()` is a React Hook that allows functional components to manage state. Whenever a state variable updates, React triggers a reconciliation cycle, leading to the re-rendering of the component.

## `useEffect()`

`useEffect()` is another React Hook used for handling side effects in functional components. Its behavior varies based on the presence or absence of a dependency array.

- If **no dependency array** is provided, `useEffect` is called on every render.
- If the **dependency array is empty**, `useEffect` is called only on the initial render (just once).
- If the **dependency array is not empty**, `useEffect` is called every time the dependency array changes.

# 2 types of Routing

- Server Side Routing
- Client Side Routing
