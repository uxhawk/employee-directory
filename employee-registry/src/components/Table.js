import React from 'react';

function Table(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                <th>
                    </th>
                    <th>
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
                    <th>
                        DOB
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((row) => (
                    <tr>
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

export default Table;