import React from 'react';
import './App.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Grid, Row, Col } from 'react-bootstrap';
import { Link, Switch, Redirect, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Sale from './components/Sale';
import Sales from './components/Sales';
import NotFound from './components/NotFound';

class App extends React.Component { // not sure if you need this for the App component
  constructor(props) {
    super(props);
    this.state = {
      recentlyViewed: [],
      searchId: ""
    };
    this.viewedSale = this.viewedSale.bind(this);
    this.updateSearchId = this.updateSearchId.bind(this);
  }

  viewedSale(id) {
    if (this.state.recentlyViewed.indexOf(id) === -1) {
      this.state.recentlyViewed.push(id);


      // Updates the state with the updated "recentlyViewed" array, causing the component to render means call set state
      this.setState((state, props) => {
        return { recentlyViewed: state.recentlyViewed } // override the array in the state.
      })
    }
  }
  updateSearchId(e) {
    this.state.searchId = e.target.value;
  }


  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect staticTop>
          <Navbar.Header>
            <LinkContainer to="/">
              <Navbar.Brand>
                WEB422 - Sales
            </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/Sales">
                <NavItem>All Sales</NavItem>
              </LinkContainer>
              <NavDropdown title="Previously Viewed" id="basic-nav-dropdown">
                {this.state.recentlyViewed.length > 0 ?
                  this.state.recentlyViewed.map((id, index) => (
                    <LinkContainer to={`/Sale/${id}`} key={index}>
                      <MenuItem >Sale: {id}</MenuItem>
                    </LinkContainer>)) :
                  <MenuItem>...</MenuItem>}
              </NavDropdown>
            </Nav>
            <Navbar.Form pullRight>
              <FormGroup>
                <FormControl type="text" onChange={this.updateSearchId} placeholder="Sale ID" />
              </FormGroup>{' '}
              <Link className="btn btn-default" to={"/Sale/" + this.state.searchId}>Search</Link>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>

        <Grid>
          <Row>
            <Col md={12}>
              <Switch>

                <Route exact path="/" render={() => (
                  <Link to="/Sales"></Link> // Redirect to the /Sales route
                )} />

                <Route exact path="/Sales" render={() => (
                  <Sales />
                )} />

                <Route exact path="/Sale/:id" render={(props) => (
                  //this is taking 2 paramaters but the component only hase 1
                  <Sale id={props.match.params.id} viewedSale={this.viewedSale} />
                )} />

                <Route render={() => (
                  <NotFound />
                )} />

              </Switch>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  };
}

export default App;
