import React from 'react';
import {Router} from 'react-router-dom';
import Main from './Main';
import './App.css';
import CharSearch from "./CharSearch";

export default class App extends React.Component {
  constructor(props) { 
      super(props);
      this.state = {
        searchCharacter:[],
        characterList:[],
      };
  }

  componentDidMount() {} 

  handleCharSubmit = name => {
    this.setState({
      searchCharacter:[
        ...this.state.searchCharacter,
        name
      ]
    })
  }

  render() { 
      return (<div> 
        <header>
          <h1>STAR WARS SEARCH</h1>
          </header>
          <CharSearch searchChar= {this.state.handleCharSubmit}/>
          <Main>Results</Main>
      </div>);
  }
  
}

