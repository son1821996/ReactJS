import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  showInfo(object){
    return <h3>
              <div className="object"> 
              Ten: { object.id } <br />
              Cong ty: { object.company} <br/>
            </div>
            </h3>
  }

  render() {
    const a = 5, b = 6;
    const name = 'Nguyen Hoang Son';
    const object = {
      id: 1,
      name: 'Nguyen van A',
      company: 'Bakery',
      avatar: ''
    }

    const users = [
      {
        id: 1,
        name: 'Nguyen van A',
        age: '18'
      },
      {
        id: 2,
        name: 'Nguyen van B',
        age: '24'
      },
      {
        id: 3,
        name: 'Nguyen van C',
        age: '12'
      }
    ]

    const elements = users.map((user, index) => {
      return <div key={ user.id }>
                <h2>Ten: {user.name} </h2>
                <h3>Tuoi : {user.age} </h3>
              </div>
    }); 


    return (
      <div>
        <div className="number"> a + b =  { a + b }</div>
        <div className="name">Ten : { name }</div>
        { this.showInfo(object) }
        <br/>
        { elements }
      </div>
        
    );
  }
}

export default App;
