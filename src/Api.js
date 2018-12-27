import React, { Component } from 'react';

class Api extends Component {
    state = {
        data: [],
        // description: [],
        isLoading: false,
        error: null,
    };

    componentDidMount() {
        this.setState({isLoading: true});
        const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*";
        const url2 = "http://testgis3.grantep.com/items/getbiitm01";
        const API = 'https://hn.algolia.com/api/v1/search?query=';
        const DEFAULT_QUERY = 'redux';
        const url3 = 'http://api.icndb.com/jokes';
        
        fetch(url2)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => this.setState({ data: data, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));
            
    }

    render() {
        const { data , isLoading, error } = this.state;
        // const result = data.map((entry, index) => {
        //     return <li key={data.objectID}></li>;
        // });
        if (error){
            return <p>{error.message}</p>;
        }
        if (isLoading){
            return <p>Loading ...</p>;
        }
        return (
            <div>
                <tr>
                    <th>Item No</th>
                    <th>Description</th>
                </tr>
                    {this.state.data.map(data => 
                        <tr key={data.itemNo}> 
                            <td>{data.itemNo}</td>
                            <td>{data.description}</td> 
                        </tr>)}
            </div>
        );
    }
}

export default Api;