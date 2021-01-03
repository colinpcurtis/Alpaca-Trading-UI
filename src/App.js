import Home from './components/homescreen';
import React, { Component } from 'react'

class App extends Component {
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

   dataStyle = {
        fontSize: 15,
        flexWrap: "wrap",
        display: 'flex',
        flexDirection: "column",
   }

   accountStyle = {
        fontSize: 20,
        color: 'green',
        fontWeight: 'bold',
   }
   
    render() {
        return (
            <div>
                <Home 
                    style={this.style} 
                    positionsStyle={this.positionsStyle} 
                    dataStyle={this.dataStyle} 
                    accountStyle={this.accountStyle}/>
            </div>
        )
    }
}

export default App;