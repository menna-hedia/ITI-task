let getUsers = document.getElementById("btn");
let tbody = document.getElementById("users").getElementsByTagName("tbody")[0];
let usersTable = document.getElementById("users");

usersTable.classList.add("hidden");
getUsers.addEventListener('click', () => {
    tbody.innerHTML = "";
    usersTable.classList.remove("hidden");
    
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => users.forEach(createRow))
        .catch(error => console.error('Error!!!', error));
});
function createRow(user) {
    const row = document.createElement("tr");
    const cells = [
        user.id,
        user.name,
        user.username,
        user.email,
        user.phone,
        user.website
    ];

    cells.forEach(text => {
        const cell = document.createElement("td");
        cell.textContent = text;
        row.appendChild(cell);
    });

    const deleteButton = createDeleteButton(user.id, row);
    const extraCell = document.createElement("td");
    extraCell.appendChild(deleteButton);
    row.appendChild(extraCell);

    tbody.appendChild(row);
}
function createDeleteButton(userId, row) {
    const button = document.createElement("button");
    button.textContent = "Delete";
    button.setAttribute("id", userId);
    button.addEventListener('click', () => row.remove());
    return button;
}
