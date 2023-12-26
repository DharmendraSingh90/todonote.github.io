// Exercise 6 -  Todo List

/*

Create a TODO  List app capable of storing your TODOs in localStorage . Add an open to create  ,
delete and access all the TODOs ?

Try to make UI as good as posible 

*/

// localStorage.clear();




const input = document.getElementById("input");
const insertDataBtn = document.getElementById("insertDataBtn");
const btnText = insertDataBtn.innerText;
const displayUserData = document.getElementById("displayUserData");

let userArr = [];
let edit_id = null;

let objStr = localStorage.getItem("List");
if (objStr != null) {

    userArr = JSON.parse(objStr);
}
console.log(userArr);


const displayData = () => {

    let statement = '';
    userArr.forEach((user, i) => {
        statement += `
        <tr>
            <th scope="row">${i}</th>
            <td>${user.data}</td>
            <td><i class="btn text-white fa fa-edit btn-info mx-3" onclick="editData(${i})"></i> <i
            class="btn btn-danger text-white fa fa-trash" onclick="deleteData(${i})"></i></td>

        </tr>

        `;
    });

    displayUserData.innerHTML = statement;

}


displayData();
insertDataBtn.onclick = () => {
    const userData = input.value;
    if (edit_id != null) {
        // edit
        userArr.splice(edit_id, 1, { 'data': userData }) // insert one item
        edit_id = null;
    }
    else {
        // insert

        userArr.push({ 'data': userData });
    }
    console.log(userArr);
    saveData(userArr);
    input.value = '';
    insertDataBtn.innerText = btnText;

}


const saveData = (userArr) => {
    let stringData = JSON.stringify(userArr);
    localStorage.setItem("List", stringData);
    displayData();

}





const editData = (id) => {
    edit_id = id;
    input.value = userArr[id].data;
    insertDataBtn.innerText = "save changes"
}


const deleteData = (id) => {
    userArr.splice(id, 1); // delete one item
    saveData(userArr);

}