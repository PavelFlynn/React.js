## React.js
 - Is a JS library for building User Interfaces or is only responsible for the view layer of the application.
 - Renders User Interface. and updates the UI whenever it changes.
 - Is not a Frameworks, is a library.
 - Framework vs Library. Library helps you in 1 aspect vs Framework helps you in many aspects.
 - React is not about the design of your UI, not a UI library.
 
#### Install React
Installs React.js by using package manager such as npm or yarn.
```sh
npm install react
```
Install with vite
```sh
npm init vite nameApp
```

#### Import React
**default import** because it follows the syntax: `import {something} from 'package-name'`
```javascript
import React from 'react';
```
**bare immport** because your'not importing from a file path. Always starts with a `./`
```javascript
import {something} from './file';
```
By importing 'react', you get a React object that contains methods and properties.
```javascript
console.log(React.version); // we're calling react version by its property
```

### Document.createElement
`document.createElement` is a Web API provided by browsers to create a HTML element.
```javascript
const element = document.createElement('h2');
document.body.appendChild(element);
```
and to check all its properties (method provided by browsers to list all properties of a object):
```javascript
console.dir(element);
```
the most important properties in the list are:
- id
- style
- className

You can change its values:
```javascript
const element = document.createElement('h2');
element.className = 'newClassName';
element.style = 'color: red; background-color: blue';
```

#### Multi classes
Can be set by separating the class names with space character:
```javascript
const element = document.createElement('h2');
element.className = 'container center';
```

#### className not class
Changing element's class happens through the `className` property and not the `class`. Because `class` is a JS keyword reserved and is used for creating a JS class, called by `new`.

### React.createElement
* You dont use `document.createElement();` in react.
* In React, an Element is the smallest building block.

#### Comparison
`document.createElement()` returns a DOM element, whereas `React.createElement` returns an object that represents a DOM element (because operates a Virtual DOM) and allows React to perform performance optimizations.
```javascript
const element = React.createElement('h1');
/*
    returns an object similar to:
    {
        type: 'h1',
        props: {}
    }
*/
```
A Virtual DOM is when a representation of the UI is kept in memory and sycend with the DOM.
```javascript
React.createElement('h1', {className: 'center', style: 'color: red'})
```

#### Writing Text
To wirte text inside the element, you need to provide a 3rd parameter for `React.createElement()` called `children`.
```javascript
React.createElement('h1', {}, 'Hello World');
// or
React.createElement('h1', null, 'Hello World');
```

### React Native
Is the glue between React and native apps. React is the library that lets you write reusable UI and:
* ReactDOM makes UI visible in browser.
* React Native makes UI visible in a native app.
* ReactDOM binds the idea of React to a web browser (Chrome, safari, Firefox, etc.).
* React Native binds the idea of React to a native app (Native Android, Native iOS).

#### Reconciliation
React is creating the virtual representation of your UI in the memory, and then ReactDOM receives that and syncs your UI (and the changes to it) to the DOM. This process is called reconciliation.

### ReactDOM
Install ReactDOM
```sh
npm install react-dom
```
as creating a project from scratch, you need to install both packages:
```sh
npm install react react-dom
```
#### Importing ReactDOM
We need to import 1 method `createRoot` is importable from `react-dom/client`:
```javascript
import {createRoot} from 'react-dom/client';
// Call createRoot()
```

#### Root app
We use ReactDOM to render (visualize) React Elements on the page. We tell to ReactDOM where to render in a element `root`, which is a `<div>` with and `id` of `root` or `app-root` or `react-root`:
```html
<div id="root"></div>
```
Example:
```javascript
import {createRoot} from 'react-dom/client';

const root = document.querySelector('#root');
createRoot(root).render(React.createElement('p', {}, 'Hello World!'));
```

### Root Element
Also called `container`. Will become completely managed by React.

### JSX
```javascript
import React from 'react';

const title = <h1>Hello World</h1>;
```
JSX is not part of the browser. You need `babel` to convert JSX to JS.
JSX does not require React to be in scopre. No need to import React to JSX files.

#### JSX with ReactDOM
Example how JSX works with ReactDOM
```html
<div id="root"></div>
```
```javascript
import React from 'react';
import {createRoot} from 'react-dom/client';

const root = document.querySelector('#root');
createRoot(root).render(<h1>Hello World</h1>);
```

#### Attributes
Set attributes to elements in JSX:
```javascript
const title  = <h1 id="brand-title">Supermarket</h1>;
// Equivalent to:
const title = React.createElement("h1", {id: "brand-title"}, "Supermarket");
```
another excample with class to element:
```javascript
const title = <h1 id="brand-title" className="primary-color">Supermarket</h1>;
```
JSX element is an Object, treat those elements as objects, assign to variable or return from a function.
Exercise:
```javascript
function getLoginStatus(is_loggedin) {
    if (is_loggedin) {
        return <p>You are logged in</p>
    } else {
        return <a href='/login'>Login</a>
    }
}
```
