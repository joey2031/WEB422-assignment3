import React from 'react';
//import { Spinner } from 'react-bootstrap/Spinner';

class Loading extends React.Component {
    render() {
        return ( 
            // For some reason the spinner wouldnt work 
            //I tried other imports and it always said Can't resolve 'react-bootstrap/...'
             <h1>Loading...</h1>

            // <Spinner animation="border" role="status">
            //     <span className="sr-only">Loading...</span>
            // </Spinner>
        )
    }

}
export default Loading;
