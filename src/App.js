import React from 'react';
import './App.css';
import {
  Navbar, Nav, NavItem, NavDropdown, MenuItem,
  FormGroup, FormControl, Grid, Row, Col
} from 'react-bootstrap';
import { Link, Switch, Redirect, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

class App extends React.Component { // not sure if you need this for the App component
  constructor(){
    // I think this s right. Or would you put them in something like this: this.state = {}
    this.recentlyViewed = [];
    this.searchId = "";
  }
  //return (null);
}

export default App;
