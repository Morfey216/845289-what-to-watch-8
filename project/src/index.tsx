import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from './mocks/films';

ReactDOM.render(
  <React.StrictMode>
    <App
      title = "The Grand Budapest Hotel"
      genre = "Drama"
      release = "2014"
      films = {films}
    />
  </React.StrictMode>,
  document.getElementById('root'));
