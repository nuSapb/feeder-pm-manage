const data = [
  {
    id: "1001",
    firstname: "Luke",
    lastname: "Skywalker",
    company: "Walt Disney",
    salary: "40000"
  },
  {
    id: "1002",
    firstname: "Tony",
    lastname: "Stark",
    company: "Marvel",
    salary: "1000000"
  },
  {
    id: "1003",
    firstname: "Somchai",
    lastname: "Jaidee",
    company: "Love2work",
    salary: "20000"
  },
  {
    id: "1004",
    firstname: "Monkey D",
    lastname: "Luffee",
    company: "One Piece",
    salary: "9000000"
  }
]

let thName = ""
let tableHeader = ""
let tableRow = ""

for (let i = 0; i < data.length; i++) {
  let counter = 0
  thName = ""
  let tdValue = ""
  for (let key in data[i]) {
    counter++
    let value

    if (counter != 4) {
      thName += "<th>" + key + "</th>"
    }
  }
}
tableHeader = "<tr>" + thName + "</tr>"
$("#myTable").append($(tableHeader))

for (let i = 0; i < data.length; i++) {
  const keyChecker = "company"
  let tdValue = ""
  for (let key in data[i]) {
    value = data[i][key]
    if (key != keyChecker) {
      tdValue += "<td>" + value + "</td>"
    }
  }
  tableRow = "<tr>" + tdValue + "</tr>"
  $("#myTable").append($(tableRow))
}

// for (let x in data) {
//     let element = "";
//     let id = data[x].id;
//     let firstName = data[x].firstname;
//     let lastName = data[x].lastname;
//     let salary = data[x].salary;
//     element += '<tr><td>' + id +'</td><td>' + firstName +'</td><td>' + lastName +'</td><td>' + salary +'</td></tr>'
//     //document.getElementById("demo").innerHTML = text;
//     $('#myTable').append($(element));
// }
