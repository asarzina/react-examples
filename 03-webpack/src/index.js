import React from 'react';
import ReactDOM from 'react-dom';
import '../../style.css';

const element = (
  <h2 className="greetings">
    Hello world!
  </h2>
);

ReactDOM.render(
  element,
  document.getElementById('app')
);
