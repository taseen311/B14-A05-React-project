# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.


# 🚀 Builder Development Stack ## 📌 Project Description

Dev Stack Builder is a modern interactive web app to help developers explore different technologies and build their own personalised development stack.

Users can explore various frontend, backend, database, styling and DevOps technologies. They can add their favourite technologies to the stack, control the tools of their choice and build an ideal combination of technology for their development journey.

The project is developed with React and frontend technologies emphasising component based architecture, state management, and responsive UI design.
🛠️ Used Technologies

- React.js
- JavaScript 
- Tailwind CSS
- DaisyUI
- React icons
- React-Toastify
- Handling JSON Data- Fast

--- 

 Features 
 1. 🔍 Browse Technologies

With users can see different development technologies by:

Technology legend- First name
- Classification
- With regards to
- Level of difficulty
- Rate
- Badge details ## 2. 🧰 Build Personal Stack

Add technologies to build your own development stack.

Features:
- Include in stack technology
- Avoid duplicates of technology selection
- Remove single technology
- Eliminate all selected technologies


3. Mobile Friendly Design

The website is fully responsive for:

- Desktop- iPad (
- mobile

The layout automatically adjusts to the size of the screen.
--- 


 Q&A


## 1. Introduction: What is JSX and Why Do We Need It?

JSX means JavaScript XML. It gives developers the ability to write HTML-like code within JavaScript.

JSX makes it easy for React developers to write and read the structure of UI. It helps developers to create components in a simple and organised way.

--- 

## 2. What is the difference between state and props?
**Props:**

Props are data passed from parent component to child component . Props are read-only, child component cannot modify them.

Example:
<TechnologyCard technology={technology}/><br/>

 3. What is the `useState` hook? Where did you use it in this project? ### Answer:

The `useState` hook is a React hook that lets us create and manage state inside a functional component.

State contains information that can change over time. React will automatically update the UI whenever the state value changes.## How used in this project:

In this Dev Stack Builder project, I used `useState` to track the selected technology stack.

Example:
`const [stacked, setStacked] = useState([]);


## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
### Answer:

The `useEffect` hook is used to perform side effects in React components.

It is mainly used for tasks like:
- Fetching data from an API
- Updating external resources
- Running code after component rendering

### Usage in this project:

I did not use the `useEffect` hook to load the JSON data.

Instead, I used React's `use()` hook with Suspense to handle the Promise returned from fetching the JSON file.

Example:

```jsx
const techs = use(techPromise);

## 5. Why does every item in a `.map()` list need a unique `key` prop?
### Answer:

In React, every item inside a `.map()` list needs a unique `key` prop because React uses it to identify each element separately.

The `key` helps React understand which item has been changed, added, or removed. It improves performance and allows React to update the UI efficiently.

Example:
jsx
{
  techs.map(item => (
    <TechnologyCard
      key={item.id}
      tech={item}
    />
  ))
}

## 6. What is conditional rendering? Show one place you used it.
### Answer:

Conditional rendering means showing different UI elements based on a specific condition.

In React, it allows components to display different content depending on the current state or user action.

In this project, I used conditional rendering in the **Your Stack** section.

Example:

jsx
{
  stacked.length === 0 ?

  <p>
    No Technology Selected
  </p>

  :

  <div>
    {
      stacked.map(item => (
        <p key={item.id}>
          {item.name}
        </p>
      ))
    }
  </div>
}

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
### Answer:

In React, data is passed from a parent component to a child component using **props**.

The parent component sends data as an attribute, and the child component receives that data through props.
Example:
**Parent Component:**

jsx
<TechnologyCard
    tech={tech}
/>