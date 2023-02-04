<?php

    // read single employee

    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../config/Database.php';
    include_once '../models/Employee.php';

    // Instantiate DB & connect
    $database = new Database();
    $db = $database->connect();

    // Instantiate employee object
    $employee = new Employee($db);

    // Get ID
    $employee->id = isset($_GET['id']) ? $_GET['id'] : die();

    // Get employee
    $employee->read_single();

    // Create array
    $employee_arr = array(
        'id' => $employee->id,
        'name' => $employee->name,
        'picture' => $employee->picture
    );

    // Make JSON
    echo json_encode($employee_arr);

?>