<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "tomapp3@gmail.com";
    $subject = "Contact Form Submission";
    $message = "Name: " . $_POST["name"] . "\n";
    $message .= "Email: " . $_POST["email"] . "\n";
    $message .= "Message: " . $_POST["message"] . "\n";
    $headers = "From: sender@example.com";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200); // Success
    } else {
        http_response_code(500); // Server error
    }
}
?>
