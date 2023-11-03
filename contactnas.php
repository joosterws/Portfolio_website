<?php
// Database connection settings
$host = '192.168.1.199:3307';
$username = 'contact';
$password = 'r}L4]4o[TwNNVx%)M?K;';
$dbname = 'db_contact';

// Create a database connection
$conn = mysqli_connect($host, $username, $password, $dbname);

// Check connection
if (!$conn) {
    // die("Connection failed: " . mysqli_connect_error());
    // echo "test0";
}
// echo "test1";

// Process form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = $_POST["contactFirstName"];
    $last_name = $_POST["contactLastName"];
    $email = $_POST["contactEmail"];
    $message = $_POST["contactMessage"];
    // echo "test2";

    // Insert data into the database
    $sql = "INSERT INTO contactform (first_name, last_name, email, message) VALUES ('$first_name', '$last_name', '$email', '$message')";

    if (mysqli_query($conn, $sql)) {
        echo "Form submitted successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    // echo "test3";

    // Close the database connection
    mysqli_close($conn);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>