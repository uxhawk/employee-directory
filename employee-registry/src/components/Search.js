import React, { Component } from 'react';
import employees from '../employees.json';

class Search extends Component {
    state = {
        employees    
    };
    searchEmployees = () => {
        const filteredEmployees = document.getElementById('employee-search').value;
        this.setState({filteredEmployees})
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-2 offset-md-5"> 
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search Employees" id="employee-search" aria-label="Search employees" aria-describedby="button-addon2" onChange={this.searchEmployees} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-primary" type="button" id="button-addon2">Search</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;