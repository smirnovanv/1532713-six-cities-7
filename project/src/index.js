import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const apartments = [
  {
    title: 'Beautiful & luxurious apartment at great location',
    price: 120,
    type: 'Apartment',
    preview: 'img/apartment-01.jpg',
    id: 10,
  }, {
    title: 'Wood and stone place',
    price: 80,
    type: 'Private room',
    preview: 'img/room.jpg',
    id: 11,
  }, {
    title: 'Canal View Prinsengracht',
    price: 132,
    type: 'Apartment',
    preview: 'img/apartment-02.jpg',
    id: 12,
  }, {
    title: 'Nice, cozy, warm big bed apartment',
    price: 180,
    type: 'Apartment',
    preview: 'img/apartment-03.jpg',
    id: 13,
  }, {
    title: 'Wood and stone place',
    price: 80,
    type: 'Private room',
    preview: 'img/room.jpg',
    id: 14,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App apartments = {apartments}/>
  </React.StrictMode>,
  document.getElementById('root'));
