import React from "react";
import employees from '../employees.json';


const EmployeeContext = React.createContext({
  employees: employees,
  sortColumn: '',
  sortColumnId: '',
});

export default EmployeeContext;
