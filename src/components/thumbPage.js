import React, { Component } from 'react';
import Googlesearch from '../components/googleSearch.js';

class Thumbpage extends Component {
    componentWillMount(){
        return (
            (function() {
                var cx = '123:456'; // Insert your own Custom Search engine ID here
                var gcse = document.createElement('script'); gcse.type = 'text/javascript'; gcse.async = true;
                gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
            })()
        ) 
    }
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
