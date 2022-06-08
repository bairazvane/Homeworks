const createList = function(data){
    data.forEach(function(data) {
        const list = document.createElement('li')
        list.innerHTML = data.title
       
        const editButtons = document.createElement('img')
        editButtons.src="https://img.icons8.com/ios-glyphs/20/000000/edit--v1.png"
       
        const deleteButtons = document.createElement('img')
        deleteButtons.src="https://img.icons8.com/ios-glyphs/20/000000/filled-trash.png"
        document.querySelector('.list').appendChild(list)
        document.querySelector('.list').appendChild(editButtons)
        document.querySelector('.list').appendChild(deleteButtons)
        editButtons.addEventListener('click',function(){
            list.contentEditable = true;
        })
        deleteButtons.addEventListener('click', function(){
            list.parentElement.removeChild(list)
            editButtons.parentElement.removeChild(editButtons)
            deleteButtons.parentElement.removeChild(deleteButtons)
        })
    });

}

// FUNCTII PENTRU EDIT SI DELETE IN TODOURILE NOU CREATE
// const editTodo = function(){
//     list.contentEditable = true;
// }
// const delTodo = function(){
//     list.parentElement.removeChild(list)
//     editButtons.parentElement.removeChild(editButtons)
//     deleteButtons.parentElement.removeChild(deleteButtons)
// }


const createTodo = function(){
    const ulList = document.querySelector('.list')
    const todoLi = document.createElement('li')

    const editButtons = document.createElement('img')
    editButtons.src="https://img.icons8.com/ios-glyphs/20/000000/edit--v1.png"
    const deleteButtons = document.createElement('img')
    deleteButtons.src="https://img.icons8.com/ios-glyphs/20/000000/filled-trash.png"
    ulList.insertBefore(deleteButtons, ulList.firstChild)
    ulList.insertBefore(editButtons, ulList.firstChild)
    ulList.insertBefore(todoLi, ulList.firstChild)
    editButtons.addEventListener('click',function(){
        todoLi.contentEditable = true;
    })
    deleteButtons.addEventListener('click', function(){
        todoLi.parentElement.removeChild(todoLi)
        editButtons.parentElement.removeChild(editButtons)
        deleteButtons.parentElement.removeChild(deleteButtons)
    })
}

const getTodos = function(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function (response){
        console.log(response)
        return response.json()
    })
    .then(function(data){
        console.log(data)
        createList(data)
    })
}

const showList = document.querySelector('.btn')
showList.addEventListener('click',getTodos)
const addToDo = document.querySelector('.addBtn')
addToDo.addEventListener('click',createTodo)

