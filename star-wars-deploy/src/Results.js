import React from 'react';

export default class Results extends React.Component{
  
    renderResults=(x)=>{
        
        x.map(item => <li>{item.name}</li>)
    }
    render(){
        if (this.props.list!== undefined){
            console.log(this.props.list)
          } 
        return(
            <ul>
    
                {this.props.list!== undefined && this.renderResults(this.props.list)}
    
            </ul>
            
        )
    }
    
}