import React, { Component } from 'react'


class Account extends Component {
     displayAccount() {
          return this.props.account.map(el => 
               <div>
                    <ul>
                         {Object.entries(el).map(([key, value]) => 
                              <li key={key}>{key}: <b>{String(value)}</b></li>
                         )}
                    </ul>
               </div>
          );
     };

     render() { 
          return ( 
               <div>{this.displayAccount()}</div>
           );
     }
}
 
export default Account;