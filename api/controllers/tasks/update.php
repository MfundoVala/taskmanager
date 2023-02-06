<?php

    // create task

    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: PUT');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

    include_once '../../config/Database.php';
    include_once '../../models/Task.php';

    // Instantiate DB & connect
    $database = new Database();
    $db = $database->connect();

    // Instantiate task object
    $task = new Task($db);

    // GET ID
    $task->id = isset($_GET['id']) ? $_GET['id'] : die();

    // Get raw posted data
    $data = json_decode(file_get_contents("php://input"));

    $task->name = $data->name;
    $task->description = $data->description;
    $task->due_date = $data->due_date;
    $task->assigned_to = serialize($data->assigned_to);
    $task->status = $data->status;
    

    // Create task
    if($task->update()) {
        echo json_encode(
            array('message' => 'Task Updated')
        );
    } else {
        echo json_encode(
            array('message' => 'Task Not Updated')
        );
    }

    