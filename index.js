// Write your solution in this file!
const employee = {
    name: "Sarah",
    streetAddress: "24 Greene Street"
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    return {
        ...employee,
        [key]: value,
    }; 
}

  const employeeUpdate = updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Michelle"
  );

  function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
        obj[key] = value; 
        return obj; 
}
  
  const employeeUpdateDestructive = destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Steven"
  );

function deleteFromEmployeeByKey(object, key, value){
    const employeeNoName = {...employee}
    delete employeeNoName[key]
    return employeeNoName
}

function destructivelyDeleteFromEmployeeByKey(obj, key, value){
    delete employee[key];
    return employee;
  }