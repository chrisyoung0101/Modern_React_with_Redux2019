// Import the React and ReactDOM libraries
// We are importing 'react' from node_modules and setting it to a variable named React
import React from 'react';
import ReactDOM from 'react-dom';


// Create a react component
// function component
const App = () => {

    const buttonText = { text: 'Click me' };
    const labelText = 'Enter name yo :';

    
    return (
        <div> 
            <label className="label" for="name"> {labelText} </label>
            <input id="name" type="text"/>
            <button style={{ backgroundColor: 'blue', color: 'white'}}>
            {buttonText.text}
            </button>
        </div>
    );
};

// Take the react component and show it on the screens
ReactDOM.render(
    //<App /> is the component App above in JSX tags
    <App />, 
    //Reference to a DOM element that already exists in our index.html file
        //render out app in <div id="root"></div> from index.html
    document.querySelector('#root')
);
