var existingUsers = JSON.parse(localStorage.getItem("users")) || [];

existingUsers.push({
    fullname: "Developer",
    email: "developer@example.com",
    username: "developer",
    password: "developer300606"
});

localStorage.setItem("users", JSON.stringify(existingUsers));

