import React from 'react';
import Loading from './Loading';
class Sale extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               sale: {},
               loading: true
          }
     }

     componentDidMount() {
          fetch(`https://stormy-fjord-91108.herokuapp.com/api/sales/${this.props.id}`)
          .then(res=>res.json())
               .then((data) => {
                    console.log(data);
                    if (data._id != null) { // check to see if it has an id
                       this.props.viewedSale(data._id); // the viewedSale function gets passed in via props
                         this.setState({
                              sale: data,
                              loading: false
                         });
                    }

               }).catch((err) => {
                    console.log(err);
               });

     }
     componentDidUpdate(prevProps) {
          if (prevProps.id !== this.props.id) {
               this.state.loading = true;
            // In the first assignment they told us sales instead of sale
          fetch(`https://stormy-fjord-91108.herokuapp.com/api/sales/${this.props.id}`)
               .then(res => res.json())
               .then((data) => {
                    this.setState({
                         sale: data,
                         loading: false
                    });

               }).catch((err) => {
                    console.log(err);
               });
          }
     }

     itemTotal(items) { // takes an array of item objects
          let itemTotal = 0;
          for (let i = 0; i < items.length; i++) {
               console.log(items[i].price);
               console.log(items[i].quantity);
               itemTotal += (items[i].price * items[i].quantity);
          }
          console.log(itemTotal);
          return itemTotal;

     }
     
     render() {
          if (this.state.loading) {
               return <Loading></Loading>
               //return null; // NOTE: This can be changed to render a <Loading /> Component for a better user experience
          } else {
              // return <Loading></Loading> For testing
              
               if (this.state.sale._id) {
                    return (<div>
                         <h1>Sale: {this.state.sale._id}</h1>
                         <h2>Customer</h2>
                         <ListGroup>
                              <ListGroupItem><strong>email: </strong>{this.state.sale._id}</ListGroupItem>
                              <ListGroupItem><strong>age: </strong>{this.state.sale.customer.age}</ListGroupItem>
                              <ListGroupItem><strong>satisfaction: </strong>{this.state.sale.customer.satisfaction}/5</ListGroupItem>
                         </ListGroup>
                         <h2> Items: {this.itemTotal(this.state.sale.items)}</h2>
                         <Table>
                              <thead>
                                   <tr>
                                        <th>Product Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {this.state.sale.items.map((data, index) =>
                                        <tr key={index}>
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

