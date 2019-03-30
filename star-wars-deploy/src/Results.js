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
//TURN THIS INTO A CLASS COMP AND FOLLOW TEMPLATE BELOW FOR LOADING INDICATOR..
//COULD PROBABLY FIND A STARWARS ONE

// Loading Indicators with Ajax

// class RepoList extends React.Component {
//     state = {
//         loading: false, // Extra state - tells us whether we are loading
//         repos: []
//     };
//     componentDidMount() {
//         this.setState({loading: true}); // AJAX request is starting
//         fetch('https://api.github.com/users/dhh/repos')
//             .then(res => res.json())
//             .then(repos => this.setState({
//                 repos,
//                 loading: false // AJAX request is done
//             }));
//     }
//     render() {
//         // Render a message if the request is ongoing
//         if (this.state.loading) {
//             return <div>Loading...</div>;
//         }
//         const repos = this.state.repos.map(repo => <li>{repo.name}</li>);
//         return <ul>{repos}</ul>;
//     }
// }