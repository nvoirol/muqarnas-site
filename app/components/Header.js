import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  componentDidMount(){
  $(document).ready(function(){
     $('.dropdown-trigger').dropdown();
    })
  }

  render() {
    return (
      <div>
        <header>
          <div className= "topContainer">
            <div className= "top">
              /*Dropdown Structure*/
              <ul id= "Dropdown1" classname= "muqarnas-dropdown-content">
                <li><a href = "Egypt_Syria_muqarnas">Egypt/Syria</a></li>
                <li classname= "divider"></li>
                <li><a href = "India_muqarnas">India</a></li>
                <li classname= "divider"></li>
                <li><a href = "Iran_muqarnas">Iran</a></li>
                <li classname= "divider"></li>
                <li><a href = "Morocco_muqarnas">Morocco</a></li>
                <li classname= "divider"></li>
                <li><a href = "Spain_muqarnas">Spain</a></li>
                <li classname= "divider"></li>
                <li><a href = "Turkey_muqarnas">Turkey</a></li>
              </ul>
              <ul id= "Dropdown2" classname= "mihrab-dropdown-content">
                <li><a href = "Egypt_Syria_mihrab">Egypt/Syria</a></li>
                <li classname= "divider"></li>
                <li><a href = "India_mihrab">India</a></li>
                <li classname= "divider"></li>
                <li><a href = "Iran_mihrab">Iran</a></li>
                <li classname= "divider"></li>
                <li><a href = "Morocco_mihrab">Morocco</a></li>
                <li classname= "divider"></li>
                <li><a href = "Spain_mihrab">Spain</a></li>
                <li classname= "divider"></li>
                <li><a href = "Turkey_mihrab">Turkey</a></li>
              </ul>
              <ul id= "Dropdown3" classname= "minbar-dropdown-content">
                <li><a href = "Egypt_Syria_mihrab">Egypt/Syria</a></li>
                <li classname= "divider"></li>
                <li><a href = "India_mihrab">India</a></li>
                <li classname= "divider"></li>
                <li><a href = "Iran_mihrab">Iran</a></li>
                <li classname= "divider"></li>
                <li><a href = "Morocco_mihrab">Morocco</a></li>
                <li classname= "divider"></li>
                <li><a href = "Spain_mihrab">Spain</a></li>
                <li classname= "divider"></li>
                <li><a href = "Turkey_mihrab">Turkey</a></li>
              </ul>
              <nav>
                <div classname="nav-wrapper">
                 <a href="#!" class="brand-logo">M.M.M.</a>
                  <ul classname="right hide-on-med-and-down">
                    <li><a classname="dropdown-trigger" href="#!" data-target="Dropdown1">Muqarnas<i class="material-icons right">arrow_drop_down</i></a></li>
                    <li><a classname="dropdown-trigger" href="#!" data-target="Dropdown2">Mihrab<i class="material-icons right">arrow_drop_down</i></a></li>
                    <li><a classname="dropdown-trigger" href="#!" data-target="Dropdown3">Minbar<i class="material-icons right">arrow_drop_down</i></a></li>
                  </ul>
                </div>
              </nav>
            </div>           
          </div>         
        </header>
      </div>
    )
  }

        