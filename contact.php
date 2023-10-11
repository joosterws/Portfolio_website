<?php
// Database connection settings
$host = 'localhost:3306';
$username = 'root';
$password = '';
$database = 'db_contact';

// Create a database connection
$conn = mysqli_connect($host, $username, $password, $database);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Process form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = $_POST["contactFirstname"];
    $last_name = $_POST["contactLastName"];
    $email = $_POST["contactEmail"];
    $message = $_POST["contactMessage"];

    // Insert data into the database
    $sql = "INSERT INTO contact_form (contactFirstname, contactLastName, contactEmail, contactMessage) VALUES ('$first_name', '$last_name', '$email', '$message')";

    if (mysqli_query($conn, $sql)) {
        echo "Form submitted successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    // Close the database connection
    mysqli_close($conn);
}
?>