import React, { Component } from 'react';
import Googlesearch from '../components/googleSearch.js';

class Thumbpage extends Component {
    render() {
        return (
        	<div id="testgoogle">
                <header className="App-header">
                  <h1>Choose an image</h1>
                  <h2>to represent them best</h2>
                  <p>The image is gonna be your app thumbnail.</p>
                </header>
                <Googlesearch />
        		<div className="bg">
        		</div>
        	</div>
        );
    }
}

export default Thumbpage;
