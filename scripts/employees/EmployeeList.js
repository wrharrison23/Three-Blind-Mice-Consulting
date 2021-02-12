import { getEmployees, useEmployees } from "./EmployeeProvider.js";
import { getComputers, useComputers } from "../computers/ComputerProvider.js";

const contentTarget = document.querySelector("main")

const render = (employeeCollection, computerCollection) => {
  contentTarget.innerHTML = employeeCollection.map((employee) => {
    // Find the related computer
    let relatedComputer = computerCollection.find(
      (computer) => computer.id === employee.computerId
    );

    return `
            
              <div class="card col-sm-3">
                <h5>${employee.firstName} ${employee.lastName}</h5>
                <p class="card-text">${relatedComputer.model}, ${relatedComputer.year}</p>
              </div>
            
        `;
  }
  ).join("");
};

export const EmployeeList = () => {
  getEmployees()
    .then(getComputers)
    .then(() => {
      const employees = useEmployees();
      const computers = useComputers();
      render(employees, computers);
    });
};

