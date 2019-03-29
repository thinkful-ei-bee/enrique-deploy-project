import React from 'react';
import config from './config';

export default class CharSearch extends React.Component {
  constructor(props){
      super(props);
      this.CharacterInput = React.createRef();
  }
  fetchSubmit = e =>{
      e.preventDefault();
      console.log(e)
  }


    componentDidMount() {} 
  
    render() { 
        return (<div> 
          <section className="CharacterSearch" onSubmit={this.fetchSubmit}>
            <h2>Character Search</h2>
            <input type='text' name='character-name' ref={this.CharacterInput} required/>
            <button type='submit' onClick={(e)=> console.log('button works')}>Search</button>
            </section>
            
        </div>);
    }
    
  }