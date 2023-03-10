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

### JSX Expressions
Is any valid JS code that resolves to a value. For example:
* 3 + 4 resolves to 7.
* "Sam" resolves to string.
* new Date() resolves to a date object.
* 2 * 4 resolves to 8
* name [assuming the var `name` has been declared] resolves to the value of that var.

In JSX your can use these expressions by wrapping them with curly brackets `{ }`:
```javascript
const title = <h1>Your have {2+3} notifications</h1>;
```
#### Variables
```javascript
const user = {
    id: 1,
    name: 'Sam'
}

const element = <p className='user-info'>Welcome {user.name}!</p>;
```
#### Functions
```javascript
function capitalise(word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
const name = "brendan";

const element = <p className="user-info">Welcome {capitalise(name)}</p>
```

#### Attributes Expresions
The value of the attribute will be based on an expression (or most often a variable):
```javascript
const limit = 5;
const element = <input type="number" max={limit} />
// DO NOT use quotes and curly braces:
const element = <input type="number" max="{limit}" /> // DON'T!
```
The rule is:
* If the value is a string -> wrap it with quotes `''` or `""`.
* If the value is dynamic (result of an expression) -> wrap it with curly braces `{}`. 

#### Numbers and Booleans
Number and Booleans attribute values should be passed as an expression:
```javascript
</input max={2} disabled={true} className="textbox" />
```

#### Attributes Expresions II
When one of your attributes is partially dynamic, you will have to treat it as if it was entirely dynamic.
```html
<li id="item-1"></li>
<li id="item-2"></li>
<li id="item-3"></li>
```
Using string concatenation:
```javascript
<li id={"item-" + count}></li>
```
Using template strings
```javascript
<li id={`item-${count}`}></li>
```

#### Multiple classes
Use case:
```javascript
const clickable = 'clickable';
const active = 'active';

const button = <button className={clickable + ' ' + active}>Click me</button>
// or
const button = <button className={`${clickable} ${active}`}>Click me</button>
```

### JSX Children
HTML advanced elements:
```html
<ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>
```
In JSX can be represented like:
```javascript
const list = <ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>;
```
Gotchas:
```javascript
function getList() {
    return 
        <ul>
            <li>First Item</li>
            <li>Second Item</li>
        </ul>;
}
```
But this will break your code because of a JavaScript concept called Automatic Semi-colon Insertion (ASI). JS will automatically insert a semi-colon after `return` when it gets transformed from JSX to JS.
To avoid this issue, wrap JSX elements with parentheses:
```javascript
function getList() {
    return (
        <ul>
            <li>First Item</li>
            <li>Second Item</li>
        </ul>
    );
}
```

#### Self Closing Tags
Common self-closing tags:
* img
* br (line break)
* hr (horizontal rule)
* input
In JSX you can not open an element without closing it. Is recommended to use the selg-closing tag syntax `/>`
```javascript
const image = <img src="image.png" />
```

#### JSX Fragments
You can only return 1 JSX element at a time. This element can have chiildren. That's because your are returning an Object, every element is an Object.
React solves this by making you return a Fragment that wraps the elements that you want to return.
```html
<!-- You want to return this example: -->
<h1>Grocery delivered to your door</h1>
<h2>Free delivery</h2>
<p>Get started now!</p>
```
```javascript
function getHeroBanner() {
    return (
        <>
            <h1>Grocery delivered to your door</h1>
            <h2>Free delivery</h2>
            <p>Get started now!</p>
        </>
    );
}
```
Fragment is an internal representation in React that lets you wrap multiple elements.
The original syntax is:
```javascript
function getHeroBanner() {
    return (
        <React.Fragment>
            <h1>Grocery delivered to your door</h1>
            <h2>Free delivery</h2>
            <p>Get started now!</p>
        </React.Fragment>
    );
}
```

### Components
A React Component is a function that returns one React Element, which describes how a section of the User Interface should look. `Components promote code reuse.`
Example:
```javascript
function Footer() {
    return (
        <div>
            <h3>Company name</h3>
            <p>All rights reserved</p>
        </div>
    );
}
```
Then used with JSX:
```javascript
import {createRoot} from "react-dom/client";

function Footer() {
    return (
        <div>
            <h3>Company name</h3>
            <p>All rights reserved</p>
        </div>
    );
}

const root = document.querySelector("#root");
createRoot(root).render(<Footer></Footer>);
```
We call this a `function component` because the Component is defined as a function.

#### UpperCamelCase Component Name
The first character must be in upper case for it to be considered a Component.

#### Components under the hood
* Is it an uppercase letter? Then it's a Component.
* Is it a lowercase letter? Then it's an Element.

#### Element vs. Component?
A React Component is a function that returns a React Element.

#### Self-closing tags
Just like with Elements, you can use the self-closing syntax for Components that do not have any children. So instead of writing `<Logo></Logo>` you can write: `<Logo />`.

#### One Component per File
It's recommended that the name of the file matches the name of the Component:
* file: Footer.js for the Component Footer
* file: AppNavbar.js for the Component AppNavbar

Your app will still have an `index.js` which is the main entry point of your app (this is sometimes called `app.js`).
Example:
```javascript
// Footer.js
export default function Footer() {
    return (
        <>
            <h3>Footer</h3>
            <p>All rights reserved</p>
        </>
    );
}
```
This file will export default the Footer component. This is required to be able to use the Footer component in other files:
```javascript
//index.js
import {createRoot} from "react-dom/client";
import Footer from "./Footer.js";

function App() {
    return (<>
         <Footer />
         <Footer />
    </>);
}

const root = document.querySelector("#root");

createRoot(root).render(<App />);
```

### Props
```javascript
// GreetUser.js
export default function GreetUser(props) {
    console.log(props); // {user: "Sam"}
    return <div>Welcome {props.user}</div>;
}
```
#### Children props
`props` represent attributes on a Component.
```javascript
const element = <HeroTitle>Welcome!</HeroTitle>
```
access with `props.children`:
```javascript
function HeroTitle(props) {
    return <h1 className="hero">{props.children}</h1>;
}
```
Another example:
```javascript
function Navbar(props){
    return <div className="navbar">{props.children}</div>;
}

const element = <Navbar>
    <HeroTitle>Welcome!</HeroTitle>
    <div>Some content</div>
    <p>Another content</p>
</Navbar>;
```

### Destructuring
Recap:
```javascript
const person = {
    firstName: 'Sam',
    lastName: 'Doe',
    age: 24
}
```
Split name in 2 variables, using destructuring.
```javascript
const {firstName} {lastName} = person;
```
You could also provide a default value for a variable, in case it did not exist in the object.
```javascript
const {firstName, lastName, status = 'single'} = person;
// status doesn't exist in person Object.
```

#### Destructuring props
Before destructuring.
```javascript
function WelcomeUser(props) {
    const username = props.username;
    const notifications = props.notifications;

    return <div>Welcome {username}! You've got {notifications} unread notifications.</div>;
}
```
After destructuring.
```javascript
function WelcomeUser(props) {
    const {username, notifications} = props;

    return <div>Welcome {username}! You've got {notifications} unread notifications.</div>;
}
```

#### Destructuring in the argument
```javascript
function WelcomeUser({username, notifications}) {
    return <div>Welcome {username}! You've got {notifications} unread notifications.</div>;
}
```

Exercise:
```javascript
import {createRoot} from 'react-dom/client';

function Button(props){
    const {className, children} = props;
    return <button className={className}>{children}</button>;
}

const root = document.querySelector('#react-root');
createRoot(root).render(<Button className="primary">Login</Button>);
```

### UI Kit
A UI Kit is a collection of all the design elements that you will use in your app:
* Buttons
* Text Boxes
* Cards

Benefits:
* Maintain consistency: all the buttons will look the same (we can also create two types of buttons: primary and secondary).
* Update UI elements in a single place: do you want to change the padding for the button? You can do that in a single Component.
* Would you like to replace your custom UI Kit with another one? You only need to update the individual components.


-