import React, { Component } from 'react';

import Header from './Header';

export default class home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
    componentDidMount(){
    $(document).ready(function(){
    });
  }
  render() {
    return (
        <div>
          <Header/>
          <div className="container">
            <div className="row">
              <div className="col s12 m9 l10">
                
              </div>
            </div>
          </div>
        </div>
    )     
  }
};
