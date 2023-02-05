<?php

    //headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: DELETE');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

    include_once '../../config/Database.php';
    include_once '../../models/Task.php';

    // Instantiate DB & connect
    $database = new Database();
    $db = $database->connect();

    // Instantiate blog post object
    $task = new Task($db);

    //Get and set ID of task to delete
    $task->id = isset($_GET['id']) ? $_GET['id'] : die();


    // Delete TASK
    if ($task->delete()) {
        echo json_encode(
            array('message' => 'Task deleted')
        );
    } else {
        echo json_encode(
            array('message' => 'Task Not deleted')
        );
    }