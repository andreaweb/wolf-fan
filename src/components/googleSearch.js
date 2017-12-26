import React, { Component } from 'react';


class Googlesearch extends React.Component {
  render() {
    return(
      <div className = "content">
        <div className="gcse-searchbox" data-resultsUrl="http://www.google.com" data-newWindow="true" data-queryParameterName="search" >
        </div>
      </div>
    );
  }
}

export default Googlesearch;