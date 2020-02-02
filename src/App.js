import React from 'react';
import './App.css';
import {
  Navbar, Nav, NavItem, NavDropdown, MenuItem,
  FormGroup, FormControl, Grid, Row, Col
} from 'react-bootstrap';
import { Link, Switch, Redirect, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

class App extends React.Component { // not sure if you need this for the App component
  constructor() {
    this.state = {
      recentlyViewed =[],
      searchId = ""
    }
  }

  // ASK: this method must have the value of "this" correctly bound to the function in the constructor?
 viewSaleId(id) { 
    if (state.recentlyViewed.indexOf(id) === -1) {
      state.recentlyViewed.push(id);
    }
  }

  updateSearchId(e){

  }
  //return (null);
}

export default App;
