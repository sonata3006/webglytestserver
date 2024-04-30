var existingUsers = JSON.parse(localStorage.getItem("users")) || [];

// Tambahkan akun developer ke local storage
var developer = {
    username: "developer",
    password: "developer300606",
    fullname: "SONIWINATA",
    email: "zefransetiawan29@gmail.com",
    registeredAt: new Date().toLocaleString()
};

// Cek apakah akun developer sudah ada, jika belum tambahkan
var isDeveloperExists = existingUsers.some(function(user) {
    return user.username === developer.username;
});

if (!isDeveloperExists) {
    existingUsers.push(developer);
    localStorage.setItem("users", JSON.stringify(existingUsers));
}
