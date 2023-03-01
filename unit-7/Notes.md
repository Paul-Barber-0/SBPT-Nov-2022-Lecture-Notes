# React
- Create by Facebook
- Is a client-side JS Library
- Quickly renders on the page
- Companies transisitioning more to React
  - Netflix, Uber, Dropbox, AirBnB
- Works through **Components**

# JSX
- JSX is JavaScript syntax that return HTML
  1. **Must** export for it be used.
  2. **Must** be imported to be used.
  3. **Must** be mounted to be used.
  4. **Must** only return **ONE** JSX Element

# Starting a React App
`npx create-react-app .` or `npx create-react-app app-name`
    - "." indicates the folder as the project name
    - "app-name" will generate a new folder with the project details within it.

## Points of Interest
- public
  - `index.html`: What is displayed to the browser.
- src
  - `index.js`: JavaScript being rendered to `index.html`.
  - `App.js`: Main point where components are mouonted. This is being rendered within `index.js`

```js
/* 
  - Create a new folder called aboutme within the components folder.
  - Create a new file inside the folder called AboutMe.jsx.
  - Create a <p> tag that notes where you grew up. 
    - Use variables for city and state.
  - Create an unordered list with the last 3 places you have visited. (Target, Alaska, the Kitchen, etc.)
  - Export the component.
  - Import the component into App.jsx and mount it between the Header and Footer components.
*/
```

# React Fragment
- Reduces the Nodes within the DOM
```jsx
  <React.Fragment></React.Fragment>
  // or
  <></>
```
- Common Practice:
  - If it is a <div> without styling, just use a fragment.

# Props
- Stands for Properties
- Cannot be passed to sibling components
- Sent through mounted components.
- `props` is a naming convention that indicates this process.
- Passed as an object

```jsx
<Component propKey={propValue} />
```
```jsx
// component that gets props
function Component(props) {}
```

### React Extension
**React Snippets**
[docs](https://github.com/ults-io/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md)
- Quick Commands:
  - `rfce`
    - React Functional Component Export
  - `rfc`
    - React Function Component (default export)

# State
- Helps modify data based on a condition
  - ex:
    - offline/online status
    - session token value
  - Utilizes types of hooks
  - Requires to be imported.

`import { useState } from 'react';`

## useState()
- Structure:
  - `keyword [ variable, function ] = hook(initial value);`
  - The Process:

```js
function useState(startingData) {
  function updateState(newData) {
    startingData = newData
  }

  return [startingData, updateState]
}
```

## Re-Rendering
- we can use a callback function to help with rendering processes.
- useState can take raw value but also a callback function.

ex:
```jsx
const [ count, setCount ] = useState(0); // raw value
const [ count, setCount ] = useState(() => 0); // CB Function
```
- Callback functions renders initial value once.