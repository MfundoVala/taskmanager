<?php

    // read single task

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

    // Get ID
    $task->id = isset($_GET['id']) ? $_GET['id'] : die();

    // Get task
    $task->read_single();

    // Create array
    $task_arr = array(
        'id' => $task->id,
        'name' => $task->name,
        'description' => $task->description,
        'status' => $task->status,
        'due_date' => $task->due_date,
        'assigned_to' => json_encode(unserialize($task->assigned_to))
    );

    // Make JSON
    echo json_encode($task_arr);

?>