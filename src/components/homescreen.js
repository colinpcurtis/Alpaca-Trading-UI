import React, { Component } from 'react';
import NavBar from './navbar';
import Stocks from './stock';
import alpacaAPI from '../Services/alpacaAPI';

class Home extends Component {
     state = {
          previouslyRendered: false,
          positions: [],
     };

     style = {
          fontSize: 20,
          fontWeight: "bold",
          padding: 30
     };

     positionsStyle = {
          fontSize: 20,
          fontWeight: "bold",
          display: "flex",
          width: 70,
          flexDirection: "row",
          justify: "center"
     };

     chooseColor() {
          let value = "badge m-2 badge-";
          (true) ? value += "success" : value += "danger";
          return value;
     };

     displayPositions() {
          return this.state.positions.map((stock) => 
               <li key={stock.symbol} style={this.positionsStyle} className={this.chooseColor()}>
                    {stock.symbol}
               </li>);
     };

     getPositions = () => {
          if (!this.state.previouslyRendered) {
               const result = alpacaAPI()
               result.getPositions().then( (response) => {
                    this.setState( 
                         {positions: this.state.positions.concat(response.data.map(el => el))} )
                    this.setState( {previouslyRendered: !this.state.previouslyRendered} )
               }); 
          }
     };

     // makeAPICall = () => {
          
     //      // this.setState( {position: [this.state.position, ...response["data"]]} )
     // }

     render() { 
          return ( 
               <div>
                    <NavBar/>
                    <p style={this.style}>Current Positions</p>
                    <Stocks style={this.style} />
                    <ul>{this.displayPositions()}</ul>
                    <button onClick={this.getPositions}>Update</button>
               </div>
          );
     }
}
 
export default Home;