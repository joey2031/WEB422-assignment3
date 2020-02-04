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
    };
    this.viewSaleId = this.viewSaleId.bind(this);
    this.updateSearchId = this.updateSearchId.bind(this);
  }

  // ASK: this method must have the value of "this" correctly bound to the function in the constructor?
 viewSaleId(id) { 
    if (state.recentlyViewed.indexOf(id) === -1) {
      state.recentlyViewed.push(id);
      // Updates the state with the updated "recentlyViewed" array, causing the component to render means call set state

      this.setState((state,props)=>{
        return {recentlyViewed: state.recentlyViewed} // override the array in the state.
      })
    }
  }

  updateSearchId(e){
    this.state.searchId = e.target.value;

  }
  //return (null);
}

export default App;
