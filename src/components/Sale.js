import React from 'react';
import Sales from './Sales';
import { ListGroup, ListGroupItem, Table } from 'react-bootstrap';
class Sale extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               sale: {},
               loading: true
          }
     }

     componentDidMount() {
          fetch(`https://stormy-fjord-91108.herokuapp.com/api/sale/${this.props.id}`)
               .then((data) => {
                    this.setState = {
                         sale: data
                    }
               }).catch((err) => {
                    console.log(err);
               });

     }
     componentDidUpdate(prevProps) {
          if (prevProps.id !== this.props.id) {
               this.state.loading = true;
          }
          fetch(`https://stormy-fjord-91108.herokuapp.com/api/sale/${this.props.id}`)
               .then((data) => {
                    this.setState = {
                         sale: data
                    }

               }).catch((err) => {
                    console.log(err);
               });

     }

     itemTotal(items) { // takes an array of item objects
          for (let i = 0; i < items.length; i++) {
               items.itemTotal += (items[i].price * items[i].quanity);
          }

     }
     // Not working, fix tommorow
     render() {
          if (this.state.loading) {
               return null; // NOTE: This can be changed to render a <Loading /> Component for a better user experience
          } else {
               if (this.state.sale._id) {
                    return (<div>
                         <h1>Sale: {this.state.sale._id}</h1>
                         <h2>Customer</h2>
                         <ListGroup>
                              <ListGroupItem><strong>email:</strong>{this.state._id}</ListGroupItem>
                              <ListGroupItem><strong>age:</strong>{this.state.customer.age}</ListGroupItem>
                              <ListGroupItem><strong>satisfaction:</strong>{this.state.customer.satisfaction}/5</ListGroupItem>
                         </ListGroup>
                         <h2> Items: How do I do the total?</h2>
                         <Table>
                              <thead>
                                   <tr>
                                        <th>Product Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {this.state.sales.map(data =>
                                        <tr>
                                             <td>{data.name}</td>
                                             <td>{data.quantity}</td>
                                             <td>{data.price}</td>
                                        </tr>
                                   )}
                              </tbody>
                         </Table>
                    </div>);
               } else {
                    return <div><h1>Unable to find Sale</h1><p>id: {this.props.id}</p></div>
               }
          }
     }

}

export default Sale;

