<?php
    // Data pengguna
    $users = array(
        array("username" => "developer", "password" => "developer300606"),
        array("username" => "user1", "password" => "password1"),
        array("username" => "user2", "password" => "password2"),
        // Tambahkan pengguna lain di sini
    );

    // Mendapatkan data dari permintaan POST
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Cek apakah pengguna ada di dalam array
    foreach ($users as $user) {
        if ($username === $user["username"] && $password === $user["password"]) {
            echo "success";
            exit;
        }
    }

    echo "error";
?>
