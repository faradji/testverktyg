<?php
$mysqli = new mysqli("localhost", "root", "root", "db");

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
// Escape user inputs for security

    $questionNumber = mysqli_real_escape_string($link, $_REQUEST['questionNumber']);

    $answer = mysqli_real_escape_string($link, $_REQUEST['answer']);

    $email = mysqli_real_escape_string($link, $_REQUEST['email']);


    // attempt insert query execution

    $query = "INSERT INTO answers (questionNumber,studentAnswer,studentEmail)
 VALUES ($questionNumber,$answer,$email)";
$mysqli->query($query);

printf ("New Record has id %d.\n", $mysqli->insert_id);

/* drop table */
$mysqli->query("DROP TABLE myCity");

/* close connection */
$mysqli->close();
?>


