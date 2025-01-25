const dataTbl = document.querySelector('#operation-table')
let items = []


const userName = document.querySelector('#name-input')
const userLastname = document.querySelector('#lastname-input')
const userAge = document.querySelector('#age-input')
const userEmail = document.querySelector('#email-input')
const userPhonenumber = document.querySelector('#phonenumber-input')
const text = document.querySelector(".text")

const btnAdd = document.querySelector('#add-btn')
const btnUpdate = document.querySelector('#update-btn')

let updateIndex;

function addItem(event) {
    event.preventDefault()
    const newItem = {
        name: userName.value.trim(),
        lastname: userLastname.value.trim(),
        age: userAge.value.trim(),
        email: userEmail.value.trim(),
        phonenumber: userPhonenumber.value.trim(),
    };

    if (newItem.name === "" || newItem.lastname === "" || newItem.age === "" || newItem.email === "" || newItem.phonenumber === "") {
        return;
    }
    items.push(newItem);
    userName.value = "";
    userLastname.value = "";
    userAge.value = "";
    userEmail.value = "";
    userPhonenumber.value = ""

    displayItems();


   localStorage.setItem("text", JSON.stringify(items)) 
   
}


function displayItems() {
    const itemList = document.querySelector('#table-body')
    itemList.innerHTML = "";
    if (items.length > 0) {
        dataTbl.style.display = "table"
    }
    
    items.forEach((item, index) => {
        const row = itemList.insertRow()
        const cell1 = row.insertCell(0)
        const cell2 = row.insertCell(1)
        const cell3 = row.insertCell(2)
        const cell4 = row.insertCell(3)
        const cell5 = row.insertCell(4)
        const cell6 = row.insertCell(5)

        cell1.innerHTML = item.name
        cell2.innerHTML = item.lastname
        cell3.innerHTML = item.age
        cell4.innerHTML = item.email
        cell5.innerHTML = item.phonenumber
        cell6.innerHTML = `<div class = "action-buttons">
        <button onclick = "editItem(${index})"><i class="fa-solid fa-pen"></i></button>
        <button onclick="deleteItem(${index})"><i class="fa-solid fa-trash-can"></i></button>


  </div>`


    })

  
}

function deleteItem(index) {
    const confirmDelete = confirm("Are you sure you want to delete?")

    if (confirmDelete) {
        items.splice(index, 1)
        displayItems()
    }
    localStorage.setItem("text", JSON.stringify(items)) 
}

function editItem(index) {
    updateIndex = index
    userName.value = items[index].name
    userLastname.value = items[index].lastname
    userAge.value = items[index].age
    userEmail.value = items[index].email
    userPhonenumber.value = items[index].phonenumber

    btnAdd.style.display = "none"
    btnUpdate.style.display = "block"
}

function updateData() {
    items[updateIndex].name = userName.value
    items[updateIndex].lastname = userLastname.value
    items[updateIndex].age = userAge.value
    items[updateIndex].email = userEmail.value
    items[updateIndex].phonenumber = userPhonenumber.value
    displayItems()

    userName.value = "";
    userLastname.value = ""
    userAge.value = ""
    userEmail.value = ""
    userPhonenumber.value = ""


    btnAdd.style.display = "block"
    btnUpdate.style.display = "none"

    localStorage.setItem("text", JSON.stringify(items)) 
}

