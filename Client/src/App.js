import React from 'react';
import Login from './Login';
import Home from './Home';

import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      visible: 'sdds',
      loggedIn: true, userName: "Ash",
      name: 'ASH KASH MANAGER'
    }
  }


  render() {
    return (
      <div className='App'>
        <link href="https://fonts.googleapis.com/css2?family=Righteous&family=Roboto&display=swap" rel="stylesheet"></link>
        {
          this.state.userName != null ? <Home user={this.state.userName} /> : <Login name={this.state.name} />
        }
      </div>
    );
  }
}

export default App;