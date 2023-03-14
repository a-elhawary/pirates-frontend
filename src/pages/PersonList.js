import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost/about`)
      .then(res => {
        window.location.replace = 'http://localhost/about';
      })
  }

  // render() {
  //   return (
  //     <ul>
  //       {
  //         this.state.persons
  //           .map(person =>
  //             <li key={person.id}>{person.name}</li>
  //           )
  //       }
  //     </ul>
  //   )
  // }
}