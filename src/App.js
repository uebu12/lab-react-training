import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './IdCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Greetings from './Greetings';
import { property } from 'lodash';
// import DriveCard from './DriveCard';
// import CreditCard from './CreditCard';
// import BoxColor from './BoxColor';

const people = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: new Date('1992-07-14'),
    picture: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    lastName: 'Delores ',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: new Date('1988-05-11'),
    picture: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

const greetings = {
  lang: ['de', 'en', 'es', 'fr'],
  children: ['Ludwig', 'François'],
};

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <div className="container">
        {people.map((person) => {
          return (
            <IdCard
              picture={person.picture}
              firstName={person.firstName}
              lastName={person.lastName}
              gender={person.gender}
              height={person.height}
              birth={`${person.birth}`}
            />
          );
        })}
      </div>
      <div>
        {greetings.children.map((element) => {
          return (
            <Greetings
              children={element}
              lang={element === 'Ludwig' ? 'de' : 'fr' }
            ></Greetings>
          );
        })}
      </div>
    </div>
  );
}

export default App;
