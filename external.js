var data = [];

document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault()
    let username = document.getElementById("Username").value;
    let firstname = document.getElementById("Firstname").value;
    let lastname = document.getElementById("Lastname").value;
    let email = document.getElementById("Email").value;
    let branch = document.getElementById("Branch").value;

    submitData(username, firstname, lastname, email, branch)
})

function submitData(username, firstname, lastname, email, branch) {
    data.push({ username, firstname, lastname, email, branch })
    console.log("data ", data);
}
// function submit1() {

//     data.push({
//         Username: username,
//         Firstname: firstname,
//         lastname: lastname,
//         email: email,
//         branch: branch
//     });
//     // data.push(username);
//     //data.push(firstname);
//     //data.push(lastname);
//     //data.push(email);
//     //data.push(branch);

// }

function read (){

    let table = document.getElementById("table");

    let row=data.map(userName1);

    function userName1(data) {

        `<tr>
            <td>return ${[data.username]} </td>
            <td>${[data.firstname]}</td>
            <td>${[data.lastname]}</td>
            <td>${[data.email]}</td>
            <td>${[data.branch]}</td>
            </tr>`           
    }
    table.innerHTML=row;
}

/*
const readData = (data) => {
    const table = document.getElementById("table")
    const row=data.map((data) => (
        `<tr>
        <td>return ${data.username} </td>
        <td>${data.firstname}</td>
        <td>${data.lastname}</td>
        <td>${data.email}</td>
        <td>${data.branch}</td>
    </tr>`
    ))    
    table.innerHTML=row;
}*/

function update() {

}
function delet() {
    for (let i = 0; i < data.length; i++) {
        data.pop();
    }


}