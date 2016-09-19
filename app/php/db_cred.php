<?php
error_reporting(E_ALL ^ E_DEPRECATED);

$host_name = "smartfinance.cm";
$db_username = "smartFinance";
$db_password = "smartFinance@123";
$db_name = "smartFinance";

$con = mysqli_connect($host_name,$db_username,$db_password,$db_name);

// Check connection
if (mysqli_connect_errno())
  {
  	echo "Could not connect to server: " . mysqli_connect_error();
  }
 ?>