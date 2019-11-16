import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'


class ViewTable extends Component {

    state = {  
        loading: true,
        data : null,
        refundToggle: false
    }

     refundHandler = () => {
        console.log("Clicked");
    }

    async componentDidMount() {
        const url = "http://localhost:8000/payments";
        const response = await fetch (url);
        const data = await response.json();
        this.setState({data: data.result.items, loading:false})
     }


    render() { 
        return (  
            <div>
                { 
                    this.state.loading || !this.state.data ? <div> Loading ... </div> : 
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>State</th>
                        </tr>
                    </thead>
                    {this.state.data.map((item) => {
                        return (
                            <tr key={item.id} >
                            <td>{item.id}</td>
                            <td>{item.amount}</td>
                            <td>{item.created}</td>
                            <td>{item.state}</td>
                            <td><Button onClick={this.refundHandler}>Refund</Button></td>
                            </tr>
                        );
                    })}

            </Table> 

            }

            </div>
        );
    }
}

export default ViewTable;