import React, { Component } from 'react'
import alpacaAPI from '../Services/alpacaAPI';

class Stocks extends Component {
     // state = {
     //      previouslyRendered: false,
     //      position: ["ABC"]
     // }

     // make constructor to do initial render

     // createPositions = () => {

     //      // const positions = ["ABC", "DEF"];
     //      if (!this.state.previouslyRendered) {
     //           const newItem = "DEF";
     //           this.setState( {position: this.state.position.concat(newItem)} )
     //           this.setState( {previouslyRendered: !this.state.previouslyRendered} )
     //      };
     // }

     // getPositions = () => {
     //      this.state.position.map((asset) => <li key={asset}>{asset}</li>)
     //      console.log(this.state.position)
     // };

     constructor(props) {
          super(props);
          if (this.props.data.previouslyRendered) {
               this.props.data.positions.map(el => console.log(el.qty));
               <p>hi</p>
          }
          else {
               <p>nothing to display</p>
          }
          
     }

     render() { 
          return (
               <div>
                    

               </div>
           );
     }
}

export default Stocks;