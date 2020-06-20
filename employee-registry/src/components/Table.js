import React, { Component } from 'react';
import employees from '../employees.json';

class Table extends Component {
    // state = {
    //     employees: employees,
    //     sortColumn: '',
    //     sortColumnId: '',
    // };

    sortEmployees = (event) => {
        const dataType = event.target.getAttribute('data-type');
        const sortType = event.target.getAttribute('sort');


        if (this.state.sortColumnId !== '') {
            document.getElementById('sort-id').remove();
        }


        if (sortType === 'asc') {
            const icon = document.createElement("i");
            document.getElementById(event.target.id).appendChild(icon);
            icon.classList.add("fas", "fa-long-arrow-alt-up", "pl-2");
            icon.setAttribute('id', 'sort-id');

            const sortedArr = employees.sort(function(a, b){
                var x = a[dataType];
                var y = b[dataType];
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
              });
              this.setState({
                  employees: sortedArr,
                  sortColumn: dataType,
                  sortColumnId: event.target.id
                });
          event.target.setAttribute('sort', 'desc');
        } else {
            const icon = document.createElement("i");
            document.getElementById(event.target.id).appendChild(icon);
            icon.classList.add("fas", "fa-long-arrow-alt-down", "pl-2");
            icon.setAttribute('id', 'sort-id');

            const sortedArr = employees.sort(function(a, b){
                var y = a[dataType];
                var x = b[dataType];
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
              });
              this.setState({
                employees: sortedArr,
                sortColumn: dataType,
                sortColumnId: event.target.id
              });
          event.target.setAttribute('sort', 'asc');
        }
 
    }

    render() {
        return (
            <table className="table">
                <thead id="tableHeader">
                    <tr>
                    <th>
                        </th>
                        <th id="name" onClick={this.sortEmployees} sort="asc" data-type="name">
                            Employee Name
                        </th>
                        <th id="occupation" onClick={this.sortEmployees} sort="asc" data-type="occupation">
                            Occupation
                        </th>
                        <th id="email" onClick={this.sortEmployees} sort="asc" data-type="email">
                            Email
                        </th>
                        <th >
                            Phone
                        </th>
                        <th id="dob" onClick={this.sortEmployees} sort="asc" data-type="dob">
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