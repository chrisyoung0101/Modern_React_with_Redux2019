// Import the React and ReactDOM libraries
// We are importing 'react' from node_modules and setting it to a variable named React
import React from 'react';
import ReactDOM from 'react-dom';

//function to be referenced or called inside JSX
function getButtonText() {
    return 'Click on me!';
}

// Create a react component
// function component
const App = () => {

    //opening jsx tag must be on same line as return or error
    //using this common convention below
    return (
        <div> 
            <label className="label" for="name">Enter name :</label>
            <input id="name" type="text"/>
            {/* <button style="background-color: blue; color: white;">Submit</button> */}
            <button style={{ backgroundColor: 'blue', color: 'white'}}>
            {/* reference the above JS function */}
            {getButtonText()}
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
