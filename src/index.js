// Import the React and ReactDOM libraries
// We are importing 'react' from node_modules and setting it to a variable named React
import React from 'react';
import ReactDOM from 'react-dom';


// Create a react component
// function component
const App = () => {
    return <div>Hi There!</div>
};

// Take the react component and show it on the screens
ReactDOM.render(
    //<App /> is the component App above in JSX tags
    <App />, 
    //Reference to a DOM element that already exists in our index.html file
        //render out app in <div id="root"></div> from index.html
    document.querySelector('#root')
);