import React from 'react';
// import {Router} from 'react-router-dom';
import Results from './Results';
import './App.css';
import SearchForm from "./SearchForm";


export default class App extends React.Component {
  constructor(props) { 
      super(props);
      this.state = {
        searchTerm:[],
        resultList:[],
      };
  }

  componentDidMount() {} 


 


  setSubmit = input => {
    console.log(input)
    this.setState({
      resultList:[
        ...this.state.resultList,
        input
      ]
    }, ()=>{ console.log(this.state.resultList)}
    )
  }

  render() { 
      return (<div> 
        <header>
          <h1>STAR WARS SEARCH</h1>
          </header>
          <SearchForm setSubmit={this.setSubmit} />
          <Results list={this.state.resultList}>Results</Results>
      </div>);
  }
  
}

