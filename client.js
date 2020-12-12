
console.log('js loaded!');

//Global employee array
let employees = [];

$(document).ready(readyHandle);

function readyHandle(){

  console.log('jQuery is ready!');

//Click listener!
$('#submitButton').on('click', addEmployee);

};// end readyHandle




function addEmployee() {
  let newEmployee = {
    first: $('#firstIn').val(),
    last: $('#lastIn').val(),
    id: $('#idIn').val(),
    title: $('#titleIn').val(),
    salary: $('#salaryIn').val()
};
  console.log(newEmployee);
};