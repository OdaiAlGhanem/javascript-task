let obj = {firstName: "Othman", lastName: "Khasawneh", age: 31, salary: 550}

function employeesInfo(obj)
{
 Name = obj.firstName;
 age = obj.age;
 salary = obj.salary;

 document.write(`The first name is: ${Name} <br>   The age is: ${age} <br>  	The salary is:  ${salary}<br>`);
}


employeesInfo(obj);