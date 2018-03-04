<?php

function connectDatabase() {
    $con = mysqli_connect("46.229.230.119","rs017100","mvabived","rs017101db");
    if (mysqli_connect_errno()) {echo "Failed to connect to MySQL: " . mysqli_connect_error();}
    return $con;
}

function getData() {
    $con = connectDatabase();
    $sql = "SELECT * FROM crypto";
    $result = $con->query($sql);
    $res = array();
    while ($row = $result->fetch_assoc()) {array_push($res, $row);}
    header('Content-Type: application/json');
    echo json_encode($res);
}

function setData($key, $val) {

}
if (isset($_POST['KEY'])) setData($_POST['KEY'], $_POST['VALUE']);
else getData();
