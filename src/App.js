import React from 'react';
import './App.css';
import IdCard from './IdCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Greetings from './Greetings';
// import { property } from 'lodash';
import Random from './Random';
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

const maxNumber = [6, 100];

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
        <h1 className="title">Greetings</h1>
        <div className="d-flex flex-column px-2">
          {greetings.children.map((element) => {
            return (
              <Greetings
                children={element}
                lang={element === 'Ludwig' ? 'de' : 'fr'}
              ></Greetings>
            );
          })}
        </div>
      </div>
      <div>
        <h1>Random</h1>
        {maxNumber.map((element) => {
          return <Random max={element} min="1"></Random>;
        })}
      </div>
    </div>
  );
}

export default App;
