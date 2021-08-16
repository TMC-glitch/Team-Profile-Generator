function generateManager(manager){
    return `
    <div class="team-card" style="width: 30rem;">
    <div class="card-header">
      Team Member
    </div>
          <li class="list-group-item">Name: ${manager.name}</li>
          <li class="list-group-item">Id: ${manager.id}</li>
          <li class="list-group-item">Email: ${manager.email}</li>
          <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
      </div>`
};
function generateEmployees(employees){
    const html =[];

  const manager = employees.filter(employee => employee.getRole() === "Manager").map(manager => generateManager(manager));
  html.push(manager);
  const intern = employees.filter(employee => employee.getRole() === "Intern").map(intern => generateIntern(intern));
  html.push(intern);
  const engineer = employees.filter(employee => employee.getRole() === "Engineer").map(engineer => generateEngineer(engineer));
  html.push(engineer);
  return html.join("");

};
function generateHtml(employees){
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
<div class="container-fluid">
<div class="row">
    <div class="col-12 jumbotron mb-3 team-heading">
        <h1 class="text-center">My Team</h1>
    </div>
</div>
<div class="container">
  <div class="row">
      <div class="team-space col-12 d-flex justify-content-center">
</div>
</div>
</div>
    ${generateEmployees(employees)}
</body>
</html>`
};

function generateIntern(intern){
    return `
    <div class="team-card" style="width: 30rem;">
    <div class="card-header">
      Team Member
    </div>
          <li class="list-group-item">Name: ${intern.name}</li>
          <li class="list-group-item">Id: ${intern.id}</li>
          <li class="list-group-item">Email: ${intern.email}</li>
          <li class="list-group-item">School: ${intern.school}</li>
        </ul>
      </div>`
};

function generateEngineer(engineer){
    return `
    <div class="team-card" style="width: 30rem;">
    <div class="card-header">
      Team Member
    </div>
          <li class="list-group-item">Name: ${engineer.name}</li>
          <li class="list-group-item">Id: ${engineer.id}</li>
          <li class="list-group-item">Email: ${engineer.email}</li>
          <li class="list-group-item">Github: ${engineer.github}</li>
        </ul>
      </div>`
};

module.exports = generateHtml;
