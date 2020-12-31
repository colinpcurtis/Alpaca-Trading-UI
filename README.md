# Alpaca Trading UI

### Getting Started
Note: this is very preliminary and still needs a lot of cleaning up, but it allows you to interact with your Alpaca account and interactlively view your trading positions.

To use this project, run ```git clone https://github.com/colinpcurtis/React-Trading-API-Interface.git``` in the terminal.  

In the ```config.js``` file add your Alpaca Trade API Key and Secret key.  This allows the UI to make API calls to your account and orders.  Then use ```npm start``` to run the project and view the webpage.

### Browser Interface
Currently there are two supported functions, ```Get Account``` and ```Get Positions```.  The first displays your important account information whereas the second lists your positions, order side, current price, and percent change from purchase.