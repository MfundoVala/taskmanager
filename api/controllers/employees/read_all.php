<?php

    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../../config/Database.php';
    include_once '../../models/Employee.php';

    // Instantiate DB & connect

    $database = new Database();
    $db = $database->connect();

    // Instantiate employee object
    $employee = new Employee($db);

    // Employee query
    $result = $employee->read_all();
    // Get row count
    $num = $result->rowCount();

    // Check if any employees
    if($num > 0) {
        // Employee array
        $employees_arr = array();
        $employees_arr['data'] = array();

        while($row = $result->fetch(PDO::FETCH_ASSOC)) {
            extract($row);

            $employee_item = array(
                'id' => $id,
                'name' => $name,
                'picture' => $picture
            );

            // Push to "data"
            array_push($employees_arr['data'], $employee_item);
        }

        // Turn to JSON & output
        echo json_encode($employees_arr);

    } else {
        // No Employees
        echo json_encode(
            array('message' => 'No Employees Found')
        );
    }