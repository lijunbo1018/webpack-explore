import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './contents'

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(
    <Hello name="world" />,
    root
);