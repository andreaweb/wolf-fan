import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {
  render() {
    return (
    	<div>
	    	<header className="App-header">
	          <h1>Wolf Fan</h1>
	          <h2>Start or Join a Pack</h2>
	          <p>Pay homage to your favorite artist. Memorize their songs and listen to them in repeat.
	          Customize your own app all about them.</p>
	        </header>
    		<div className="bg">
    		</div>
    		<aside>
    			<input placeholder="Band or Singer" type="search"></input>
    			<Link to="/thumbPage">
	    			<button>Go</button>
    			</Link>
    		</aside>
    	
		</div>
    );
  }
}

export default Homepage;
