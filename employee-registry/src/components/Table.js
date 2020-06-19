import React, { Component } from 'react';
import employees from '../employees.json';

class Table extends Component {
    state = {
        employees    
    };

    sortEmployees = (event) => {
        const dataType = event.target.getAttribute('data-type');
        const sortType = event.target.getAttribute('sort');

        if (sortType === 'asc') {
            const sortedArr = employees.sort(function(a, b){
                var x = a[dataType];
                var y = b[dataType];
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
              });
          this.setState({sortedArr});
          event.target.setAttribute('sort', 'desc');
        } else {
            const sortedArr = employees.sort(function(a, b){
                var y = a[dataType];
                var x = b[dataType];
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
              });
          this.setState({sortedArr});
          event.target.setAttribute('sort', 'asc');
        }
 
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                    <th>
                        </th>
                        <th onClick={this.sortEmployees} sort="asc" data-type="name">
                            Employee Name
                        </th>
                        <th onClick={this.sortEmployees} sort="asc" data-type="occupation">
                            Occupation
                        </th>
                        <th onClick={this.sortEmployees} sort="asc" data-type="email">
                            Email
                        </th>
                        <th onClick={this.sortEmployees} sort="asc" data-type="phone">
                            Phone
                        </th>
                        <th onClick={this.sortEmployees} sort="asc" data-type="dob">
                            DOB
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((row) => (
                        <tr key={row.id}>
                            <td><img src={row.image} alt={row.name}></img></td>
                            <td>{row.name}</td>
                            <td>{row.occupation}</td>
                            <td>{row.email}</td>
                            <td>{row.phone}</td>
                            <td>{row.dob}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default Table;