console.log("js loaded!");

// global employee object
let allEmployees = {};
// global variables
let count = 1;
let monthlyCost = 0;

$(document).ready(readyHandle);

function readyHandle() {
  console.log("jQuery is ready!");

  renderToDom();

  //Click listener!

  // click listener for submit button
  $("#submitButton").on("click", valueWork);

  // click listener for delete buttons
  $("#employeeList").on("click", ".delete", removeEmployee);
  // takes in values from inputs and creates an obj
  function createEmployee() {
    let employee = {};
    employee.index = count;
    employee.first = $("#firstIn").val();
    employee.last = $("#lastIn").val();
    employee.id = $("#idIn").val();
    employee.title = $("#titleIn").val();
    employee.salary = $("#salaryIn").val();
    // assigns the new employee obj a unique number or identifier and adds it to the global obj
    allEmployees[count] = employee;
    // makes sure count is equal to itself + 1 so every new obj has a different number identifier
    count += 1;
    // monthly cost is equal to itself + salary from input to the global variable
    monthlyCost += Number($("#salaryIn").val());
  }

  function valueWork() {
    // runs create employee
    createEmployee();
    console.log(allEmployees);
    // adds monthly cost to span with id totalCost.  Using .html() makes sure to wipe all contents before adding new
    $("#totalCost").html(monthlyCost);
    // highlight total cost red if its above 20000
    if (monthlyCost >= 20000) {
      $("#total").addClass("highlightRed");
    }
    // updates the DOM
    renderToDom();
    // clears all values in input boxes
    clearInputs();
  } // end addEmployee

  function renderToDom() {
    // clear all data at id employeeList
    $("#employeeList").html("");

    for (let key in allEmployees) {
      // set value to allEmployees key, which is the unique identifier number for worked above
      let value = allEmployees[key];
      // appends our employee row with input values from obj
      let employeeRow = $(`
        <tr class="employee">
            <td>${value.first}</td>
            <td>${value.last}</td>
            <td>${value.id}</td>
            <td>${value.title}</td>
            <td>${value.salary}</td>
            <td>
              <button type="button" data-index=${value.index} class="btn btn-outline-danger btn-sm delete">Delete</button>
            </td>
        </tr>`);

      //put on DOM
      $("#employeeList").append(employeeRow);
    } // end for
  } // end renderToDom

  // remove employee row/data via delete button and its unique identifer
  function removeEmployee() {
    let inVal = $(this).data("index");
    delete allEmployees[inVal];
    renderToDom();
  }

  // clear inputs function
  function clearInputs() {
    $("#firstIn").val("");
    $("#lastIn").val("");
    $("#idIn").val("");
    $("#titleIn").val("");
    $("#salaryIn").val("");
  } // end clearInputs
}


