<?php 
    $message_sent = false;
    if(isset($_POST['email']) && $_POST['email'] != '') {

        if(filter_var($_POST['name'], FILTER_VALIDATE_EMAIL)) {

            $userName = $_POST['name'];
            $userEmail = $_POST['email'];
            $message = $_POST['message'];

            $to = "piotr.zalom@gmail.com";
            $body = "";

            $body .= "From: ".$userName. "\r\n";
            $body .= "Email: ".$userEmail. "\r\n";
            $body .= "Message: ".$message. "\r\n";

            mail($to, $message, $body);

            $message_sent = true;
        }
    }
?>