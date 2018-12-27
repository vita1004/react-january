import React, { Component } from 'react';
import './index.css';
import './App.css';
import Table from './Table';
import Form from './Form';
import Api from './Api';

class App extends Component {

  state = {
    characters: []
  };

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  }

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  }

  render() {
    const { characters } = this.state;

    return (
      <div className="container">
        <h1>React Tutorial</h1>
        <p>Add a character with a name and a job to the table.</p>
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <h3>Add New</h3>ttttt
        <Form handleSubmit={this.handleSubmit} />

        <Api/> 
        <div>Test</div>
      </div>
    );
  }
}

export default App;
