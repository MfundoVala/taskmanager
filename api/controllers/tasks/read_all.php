<?php

    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../../config/Database.php';
    include_once '../../models/Task.php';

    // Instantiate DB & connect
    $database = new Database();
    $db = $database->connect();

    // Instantiate task object
    $task = new Task($db);

    // Task query
    $result = $task->read_all();
    // Get row count
    $num = $result->rowCount();

    // Check if any tasks
    if($num > 0) {
        // Task array
        $tasks_arr = array();
        $tasks_arr['data'] = array();

        while($row = $result->fetch(PDO::FETCH_ASSOC)) {
            extract($row);

            if (isset($tasks_arr['data'][$id])) {
            $tasks_arr['data'][$id]["assigned_to"][] = $assigned_to;
        } else {
            $task_item = array(
                'id' => $id,
                'name' => $name,
                'description' => $description,
                'due_date' => $due_date,
                'created_at' => $created_at,
                'status' => $status,
                'assigned_to' => [$assigned_to]
            );
            // Push to "data"
            $tasks_arr['data'][$id] = $task_item;
            }
        }

        // Turn to JSON & output
        echo json_encode($tasks_arr);

    } else {
        // No Tasks
        echo json_encode(
            array('message' => 'No Tasks Found')
        );
    }