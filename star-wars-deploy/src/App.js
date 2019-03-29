import React from 'react';
// import {Router} from 'react-router-dom';
import Results from './Results';
import './App.css';
import SearchForm from "./SearchForm";
import config from './config';

export default class App extends React.Component {
  constructor(props) { 
      super(props);
      this.state = {
        searchTerm:[],
        resultList:[],
      };
  }

  componentDidMount() {} 


 
filterResults= (name, array) =>{
  console.log(array)
  let results = [];
  
  let filtered = array.results.filter((item) =>  item.name === name); //how can i get access to page 2, 3 etc
  results.push(filtered);
  console.log(results);
  return results;
}

  setSubmit = input => {
    this.setState({
      searchTerm:[
        ...this.state.searchTerm,
        input
      ]
    })
  }

  render() { 
      return (<div> 
        <header>
          <h1>STAR WARS SEARCH</h1>
          </header>
          <SearchForm setSubmit={this.setSubmit} filterResults={this.filterResults}/>
          <Results list={this.resultList}>Results</Results>
      </div>);
  }
  
}

