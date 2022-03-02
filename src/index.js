import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AboutME from './AboutMe';
import test from './test';


import reportWebVitals from './reportWebVitals';


const description = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita beatae aperiam rerum voluptate temporibus optio esse est consectetur architecto, impedit voluptatem ratione quis id tempora deleniti at qui vel placeat?',
  name: 'Hi, I am Joana'
};


//calls my image
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//calls my about section
ReactDOM.render(
  <AboutME
    text={description.text}
    name={description.name} />,
  document.getElementById('aboutMe')
);


reportWebVitals();
