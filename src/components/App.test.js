import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

describe('Main App', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Router><App/></Router>, div);
    });
});
