
const getInputValue = (id) => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;

    inputField.value = "";
    return inputValue;
}

let userInfo = [];

const submitBtn = () => {
    const name = getInputValue("name");
    const email = getInputValue("email");
    const password = getInputValue("password");
    userInfo.push({ name , email, password});
    localStorage.setItem("users", JSON.stringify(userInfo))
};

const getSaveUsers = () => {
    let users = localStorage.getItem("users");
    if (users) {
        users = JSON.parse(users);
        userInfo = [...users]
    }
    return users;
};

getSaveUsers();