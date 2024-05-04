# Textform Component Explanation

The Textform component in React allows users to input text, display it, and manipulate it with a button. Here's a breakdown of the code:

### Import Statements

```javascript
import React, { useState } from "react"; // Import React and the useState hook from the 'react' package.
import PropTypes from "prop-types"; // Import PropTypes for prop type validation (although not used in this code).
```

## Textform Component Definition

```javascript

export default function Textform(props) {
```

- This line defines a function component called Textform. It exports the component as the default export of the module and takes props as its argument to access parent component data.

## State Hook for Text Management

```javascript
const [text, setText] = useState("Enter your text here !");
```

- Here, the useState hook is used to create a state variable text initialized with "Enter your text here !". setText is the function to update the state text.

## Event Handlers

### handleUppercase

```javascript
const handleUppercase = () => {
  console.log("button was clicked"); // Log to console whenever the button is clicked
  let newText = text.toUpperCase(); // Convert the text state to uppercase
  setText(newText); // Update the state with the new uppercase text
};
```

- This function is triggered when the user clicks the button to convert the text to uppercase. It logs to the console, changes the text to uppercase, and then updates the state.

### handleOnchange

```javascript
const handleOnchange = (event) => {
  setText(event.target.value); // Update the text state with whatever is typed into the textarea
};
```

- This function handles changes in the textarea input. It updates the state with the current value of the textarea, ensuring the component displays what the user is typing.

## Component Return

### Return Statement Overview

- In React, the return statement in a function component specifies what the component should render to the DOM. It typically returns JSX, which is a syntax extension that allows you to write HTML elements in JavaScript.

```javascript
return <div>...</div>;
```

- This returns a div element that acts as a container for all the elements within this component.

### JSX Elements Explained

#### Outer div

    This div serves as the root element of the component's output. Everything rendered by this component will be contained within this div.

#### Heading Element (h1)

```javascript
<h1>{props.heading}</h1>
```

- h1: This is a standard HTML heading tag that creates a level 1 heading. It is used here to display a prominent title for the component.
- {props.heading}: This is a JavaScript expression wrapped in curly braces {}. It allows you to embed dynamic content within your JSX. props.heading accesses the heading property from the component's props object, which is expected to be passed by the parent component. This will be displayed as the content of the h1 tag.

#### Div for Styling and Alignment

```javascript
<div className="mb-3">
```

- div: Another div tag used for structuring and grouping HTML elements.
- className="mb-3": className is used in JSX to apply CSS classes. Here, mb-3 is likely a Bootstrap class that adds a margin at the bottom of the div.

#### Textarea Element

```jsx
<textarea
  className="form-control"
  id="exampleFormControlTextarea1"
  rows="8"
  value={text}
  onChange={handleOnchange}
></textarea>
```

- textarea: The HTML textarea element represents a multi-line plain-text editing control, useful for accepting user inputs or comments.
- className="form-control": A Bootstrap utility class that styles forms for better appearance.
- id="exampleFormControlTextarea1": Sets a unique identifier which can be used for styling or scripting (JavaScript).
- rows="8": Specifies the visible number of lines in the textarea.
- value={text}: React uses the value attribute on form fields to create controlled components. text is a state variable in this component, and it holds the current text inside the textarea.
- onChange={handleOnchange}: Registers an event handler for the change event. handleOnchange is a function that updates the state text whenever the user types into the textarea, ensuring the component re-renders with the updated text.

#### Button Element

```jsx
<button type="button" className="btn btn-primary" onClick={handleUppercase}>
  Convert to UPPERCASE
</button>
```

- button: An HTML button element that users can click.
- type="button": Specifies that the button is a clickable button.
- className="btn btn-primary": Bootstrap classes to style the button. btn is the basic button styling and btn-primary provides a specific blue color and padding.
- onClick={handleUppercase}: An event handler for the click event. When the button is clicked, handleUppercase is triggered, which is a function defined in the component to convert the text in the textarea to uppercase and update the component's state.
