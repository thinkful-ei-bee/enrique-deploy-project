import React from 'react';
import config from './config';

export default class SearchForm extends React.Component {
 constructor(props){
   super(props);
   this.state={name:'', spaceship:'', species:'', films:'', vehicles:'', planets:'',
 }

 }


  fetchSubmit = e =>{
    e.preventDefault();
   
    
    let url = `${config.API_ENDPOINT}${this.state.name}`;
// make switch statement function to adjust url to search for people, spaceship, etc

    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => this.props.setSubmit(data.results));


}

handleChange=(e)=>{
  
  this.setState({[e.target.name]: e.target.value})
}
  

    componentDidMount() {} 
  
    render() { 
      console.log(this.props)
        return (<div> 
          <form className="SearchForm" onSubmit={this.fetchSubmit.bind(this)}>
            <h2>Search for:</h2>
            <input type='text' name='name' placeholder='characters' onChange={this.handleChange.bind(this)}  />
            <input type='text' name='spaceship' placeholder='spaceships' onChange={this.handleChange.bind(this)}  />
            <input type='text' name='planet' placeholder='planets' onChange={this.handleChange.bind(this)}  />
            <input type='text' name='vehicles' placeholder='vehicles' onChange={this.handleChange.bind(this)}  />
            <input type='text' name='species' placeholder='species' onChange={this.handleChange.bind(this)}  />
            <input type='text' name='films' placeholder='films' onChange={this.handleChange.bind(this)}  />

            <button type='submit' onClick={()=> console.log('button works')}>Search</button>
            {// could make a dropdown select menu to offer what to search for e.g. planet, people, etc 
            }
            </form>
            
        </div>);
    }
    
  }