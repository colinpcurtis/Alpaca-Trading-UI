import React, { Component } from 'react'
import alpacaAPI from '../Services/alpacaAPI';

class Stocks extends Component {
     state = {
          previouslyRendered: false,
          position: ["ABC"]
     }

     // make constructor to do initial render

     createPositions = () => {

          // const positions = ["ABC", "DEF"];
          if (!this.state.previouslyRendered) {
               const newItem = "DEF";
               this.setState( {position: this.state.position.concat(newItem)} )
               this.setState( {previouslyRendered: !this.state.previouslyRendered} )
          };
     }

     getPositions = () => {
          this.state.position.map((asset) => <li key={asset}>{asset}</li>)
          console.log(this.state.position)
     };

     render() { 
          return (
               <div>
                    <span>{this.createPositions()}</span>

               </div>
           );
     }
}

export default Stocks;