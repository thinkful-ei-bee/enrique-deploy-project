import React from 'react';
import config from './config';

export default class SearchForm extends React.Component {
 constructor(props){
   super(props);
   this.state={name:'', spaceship:'',
 }

 }


  fetchSubmit = e =>{
    e.preventDefault();
   
    
    let url = `${config.API_ENDPOINT}${this.state.name}`;
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
            <h2>Explore the Star Wars universe</h2>
            <input type='text' name='name' onChange={this.handleChange.bind(this)}  required/>
            <input type='text' name='spaceship' onChange={this.handleChange.bind(this)}  />
            <button type='submit' onClick={()=> console.log('button works')}>Search</button>
            {// could make a dropdown select menu to offer what to search for e.g. planet, people, etc 
            }
            </form>
            
        </div>);
    }
    
  }