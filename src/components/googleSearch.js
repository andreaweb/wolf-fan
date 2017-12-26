/* global gapi */
import React, { Component } from 'react';

const API_KEY = 'AIzaSyCDaNYrEbiJSMlElJhOPsQHLs1u6TcP8R4';
class Googlesearch extends Component {

  loadYoutubeApi() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      gapi.load('client', () => {
        gapi.client.setApiKey(API_KEY);
        gapi.client.load('youtube', 'v3', () => {
          this.setState({ gapiReady: true });
        });
      });
    };

    document.body.appendChild(script);
  }

  componentDidMount() {
    this.loadYoutubeApi();
  }

  render() {
      if (this.state.gapiReady) {
       return (
         <h1>GAPI is loaded and ready to use.</h1>
       );
    };
  }
}
export default Googlesearch;