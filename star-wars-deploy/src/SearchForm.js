import React from 'react';
import config from './config';

export default class SearchForm extends React.Component {
 constructor(props){
   super(props);
   this.state={category:'', term:''
 }

 }


  fetchSubmit = e =>{
    e.preventDefault();
    let url = `${config.API_ENDPOINT}${this.state.category}/?search=${this.state.term}`;
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => this.props.setSubmit(data.results));


}

// handleChange=(e)=>{ Jon trick
  
//   this.setState({[e.target.name]: e.target.value})
// }
handleChange=(e)=>{
  
  this.setState({category: e.target.name, term: e.target.value})
}
  //MAKE ONE FUNCTION THAT VALIDATES FOR ALL... CHECK AGAINST NUMBERS AND OTHER NON-LETTERS
  //PROVIDE A DEFAULT MESSAGE IF INPUT RETURNS WITH NO RESULTS and trims spaces or whitespace

    componentDidMount() {} 
  
    render() { 
      
        return (<div> 
          <form className="SearchForm" onSubmit={this.fetchSubmit.bind(this)}>
            <h2>Search for:</h2>
            <input type='text' name='people' placeholder='characters' onChange={this.handleChange.bind(this)}  />
            <input type='text' name='starships' placeholder='starships' onChange={this.handleChange.bind(this)}  />
            <input type='text' name='planets' placeholder='planets' onChange={this.handleChange.bind(this)}  />
            <input type='text' name='vehicles' placeholder='vehicles' onChange={this.handleChange.bind(this)}  />
            <input type='text' name='species' placeholder='species' onChange={this.handleChange.bind(this)}  />
            <input type='text' name='films' placeholder='films' onChange={this.handleChange.bind(this)}  />

            <button type='submit'>Search</button>
            {// could make a dropdown select menu to offer what to search for e.g. planet, people, etc 
            }
            </form>
            
        </div>);
    }
    
  }