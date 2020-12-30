import React, { Component } from 'react';
import NavBar from './navbar';
import Stocks from './stock';
import alpacaAPI from '../Services/alpacaAPI';
// import Account from './account';

class Home extends Component {
     state = {
          previouslyRendered: false,
          positions: [],
          gotAccount: false,
          account: [],
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

     dataStyle = {
          fontSize: 15,
          fontWeight: "bold",
          flexWrap: "wrap",
          display: 'flex',
          flexDirection: "column",
     }

     accountStyle = {
          fontSize: 20,
          color: 'green',
          
          fontWeight: 'bold',
     }

     chooseColor(stock) {
          let value = "badge m-2 badge-";
          // returns true if change is positive, representing appreciation in value
          const asset = this.state.positions[this.state.positions.indexOf(stock)];
          (asset.avg_entry_price < asset.current_price)
               ? value += "success" : value += "danger";
          return value;
     };

     percentChange = (stock) => {
          return ((stock.current_price - stock.avg_entry_price) / stock.avg_entry_price).toFixed(2);
     };

     getAccount = () => {
          if (!this.state.gotAccount) {
               const result = alpacaAPI()
               result.getAccount().then( (response) => {
                    this.setState( {account: this.state.account.concat(response.data)} );
                    this.setState( {gotAccount: !this.state.gotAccount} )
               });
          };
     };

     getPositions = () => {
          if (!this.state.previouslyRendered) {
               const result = alpacaAPI()
               result.getPositions().then( (response) => {
                    this.setState( 
                         {positions: this.state.positions.concat(response.data.map(el => el))} )
                    this.setState( {previouslyRendered: !this.state.previouslyRendered} )
               }); 
          };
     };

     displayPositions() {
          return this.state.positions.map((stock) => 
          <div>
               <li key={stock.symbol} style={this.positionsStyle} className={this.chooseColor(stock)}>
                    {stock.symbol}
               </li> 
               <p style={this.dataStyle}>side: {stock.side}, current price: ${stock.current_price}, pct change: {this.percentChange(stock)}%</p>
          </div>
          );
     };

     displayAccount() {
          return this.state.account.map(el => 
               <div>
                    <ul>
                         {Object.entries(el).map(([key, value]) => 
                              <li key={key}>{key}: <b>{String(value)}</b></li>
                         )}
                    </ul>

               </div>
          )}
          // this.state.account.map((el) =>
          //      <div>
          //           <li key={el} style={this.dataStyle}> Account: <b style={this.accountStyle}>{el.status}</b> Value: <b style={this.accountStyle}>${el.equity}</b> Cash: <b style={this.accountStyle}>${el.cash}</b></li>
          //      </div>
          // );
     // }

    

     render() { 
          return ( 
               <div>
                    <div>
                         <NavBar/>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 10 }}>
                         <div>
                         
                         <button className="btn btn-primary m-2" onClick={this.getAccount}>Get Account</button>
                         <p style={this.style}>Account</p>
                         <ul>{this.displayAccount()}</ul>

                         </div>
                         <div>
                         <button className="btn btn-primary m-2" onClick={this.getPositions}>Get Positions</button>
                    
                         <p style={this.style}>Current Positions</p>
                         <Stocks style={this.style} data={this.state}/>
                         <ul>{this.displayPositions()}</ul>
                         </div> 
                    </div>
                    
               </div>
          );
     }
}
 
export default Home;