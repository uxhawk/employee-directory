import React, { Component } from 'react';
import employees from '../employees.json';

class Table extends Component {
    state = {
        employees    
    };

    sortName = (event) => {
        if (event.target.getAttribute('sort') === 'asc') {
            const sortedArr = employees.sort(function(a, b){
                var x = a.dob;
                var y = b.dob;
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
              });
          this.setState({sortedArr});
          event.target.setAttribute('sort', 'desc');
        } else {
            const sortedArr = employees.sort(function(a, b){
                var y = a.dob;
                var x = b.dob;
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
                        <th onClick={this.sortName} sort="asc">
                            Employee Name
                        </th>
                        <th>
                            Occupation
                        </th>
                        <th>
                            Phone
                        </th>
                        <th>
                            Email
                        </th>
                        <th onClick={this.sortName} sort="asc">
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