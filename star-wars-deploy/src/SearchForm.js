import React from 'react';
import config from './config';

export default class SearchForm extends React.Component {
 
  fetchSubmit = e =>{
    e.preventDefault();
    let name = e.target['search-input'].value;
    let url = config.API_ENDPOINT+=`${name}`;
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => this.props.setSubmit(data.results));


}


  

    componentDidMount() {} 
  
    render() { 
      console.log(this.props)
        return (<div> 
          <form className="SearchForm" onSubmit={this.fetchSubmit}>
            <h2>Explore the Star Wars universe</h2>
            <input type='text' name='search-input'  required/>
            <button type='submit' onClick={()=> console.log('button works')}>Search</button>
            {// could make a dropdown select menu to offer what to search for e.g. planet, people, etc 
            }
            </form>
            
        </div>);
    }
    
  }