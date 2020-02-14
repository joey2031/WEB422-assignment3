import React from 'react';
//import { Spinner } from 'react-bootstrap/Spinner';
import ReactSpinner from 'react-bootstrap-spinner'

class Loading extends React.Component {
    render() {
        return (
            // <Spinner animation="border" role="status">
            //     <span className="sr-only">Loading...</span>
            // </Spinner>
             <ReactSpinner type="border" color="primary" size="5" />
        )
    }

}
export default Loading;
