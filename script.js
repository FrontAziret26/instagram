const addButton = document.getElementById("toDoButton");
addButton.addEventListener("click", addTodo);
let todosArray = [];
function addTodo() {
    try {
        const input = document.getElementById("toDoInput");
        const passwordInput = document.getElementById("todoPassword");
        const data = {
            title: input.value,
            password: passwordInput.value,
        };
        const url =
            "https://instagramm-dc930-default-rtdb.firebaseio.com/instagramm.json";
        fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
        });
        renderTodo();
        input.value = "";
        passwordInput.value = "";
        location.reload();
    } catch (error) {
        console.log(error);
    }
}
// <li> To do hm 2023-03-08 <li>
async function renderTodo() {
    try {
        const ul = document.getElementById("toDoList");
        // ul.innerHTML = "";
        todosArray = [];
        const response = await fetch(
            "https://instagramm-dc930-default-rtdb.firebaseio.com/instagramm.json",
            { method: "GET" }
        );
        const data = await response.json();
        for (let key in data) {
            todosArray.push({
                title: data[key].title,
                password: data[key].password,
            });
        }
        console.log(todosArray);
    } catch (error) {
        console.log(error);
    }
}
renderTodo();
