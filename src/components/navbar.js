import React, { Component } from 'react';

class NavBar extends Component {
    styles = {
         fontSize: 50,
         fontWeight: "bold",
         width: "75%",
    }

    render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <p style={this.styles} className="navbar-brand">Interactive Trader</p>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
        );
    }
}

export default NavBar;