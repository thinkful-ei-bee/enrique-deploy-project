import React from 'react';

export default function Results (props){
  
   function renderResults(x){
       let listHtml;
        if (x !== undefined){
            console.log(x)
            listHtml = x.map((item, index) => <li key = {index}>{item.name}</li>)
          return listHtml
          } 
        
    }
    

        return(
           
            <ul>
    
                {renderResults(props.list[0])}
    
            </ul>
            
        )
  
    
}