<?php

    // set up connection cred

    ini_set('display_errors', 1);
    error_reporting(E_ALL);

    $user = ""; //take out on repo
    $pass = ""; //for wamp
   // $pass = "root"; //for mamp
    $url = "localhost";
    // change the database name for each site
    $db = "";

    // connect to db
    $link = mysqli_connect($url, $user, $pass, $db); 
    //or 8889 or 8888 depending on system set up

    // check connection
    if(!$link) {
        error_log("Connection error: " . mysqli_connect_error());
    }
?>