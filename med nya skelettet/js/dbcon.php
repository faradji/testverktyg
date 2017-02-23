<?php
$connection = mysql_connect("127.0.0.1", "root", "root"); // Establishing Connection with Server..
$db = mysql_select_db("db", $connection); // Selecting Database
//Fetching Values from URL
$questionNumber=$_POST['questionNumber'];
$answer=$_POST['answer'];
$email=$_POST['email'];
//Insert query
$query = mysql_query("INSERT INTO answers (questionNumber,studentAnswer,studentEmail) VALUES ($questionNumber,$answer,$email)");
$arr = array('success' => true, 'answer' => "succesfully posted");

echo json_encode($arr);
mysql_close($connection); // Connection Closed
?>