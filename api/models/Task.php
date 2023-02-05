<?php

    class Task {

        // DB stuff
        private $connection;
        private $table = 'tasks';

        // Task Properties
        public $id;
        public $name;
        public $description;
        public $created_at;
        public $due_date;
        public $status;

        public $assign_to;

        public $assigned_to = array();

        // Constructor with DB
        public function __construct($db) {
            $this->connection = $db;
        }

        // Get Tasks
        public function read_all() {
            // Create query
            $query = 'SELECT
                e.name as assigned_to,
                t.id,
                t.name,
                t.description,
                t.due_date,
                t.status,
                t.created_at
            FROM
                ' . $this->table . ' t
            LEFT JOIN
                task_assignees ta ON t.id = ta.task_id
            LEFT JOIN
                employees e ON ta.employee_id = e.id
            ORDER BY
                created_at DESC';

            // Prepare statement
            $stmt = $this->connection->prepare($query);

            // Execute query
            $stmt->execute();

            return $stmt;
        }

        // Get Single Task
        public function read_single() {
            // Create query
            $query = 'SELECT
                e.name as assigned_to,
                t.id,
                t.name,
                t.description,
                t.due_date,
                t.status,
                t.created_at
            FROM
                ' . $this->table . ' t
            LEFT JOIN
                task_assignees ta ON t.id = ta.task_id
            LEFT JOIN
                employees e ON ta.employee_id = e.id
            WHERE
                t.id = ?
            LIMIT 0,1';

            // Prepare statement
            $stmt = $this->connection->prepare($query);

            // Bind ID
            $stmt->bindParam(1, $this->id);

            // Execute query
            $stmt->execute();

            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            // Set properties
            $this->name = $row['name'];
            $this->description = $row['description'];
            $this->due_date = $row['due_date'];
            $this->created_at = $row['created_at'];
            $this->status = $row['status'];
            $this->assigned_to = $row['assigned_to'];
        }

        // Create Task
        public function create() {
            // Create query
            $query = 'INSERT INTO ' . $this->table . '
                SET
                    name = :name,
                    description = :description,
                    due_date = :due_date';

            // Prepare statement
            $stmt = $this->connection->prepare($query);

            // Clean data
            $this->name = htmlspecialchars(strip_tags($this->name));
            $this->description = htmlspecialchars(strip_tags($this->description));
            $this->due_date = htmlspecialchars(strip_tags($this->due_date));

            // Bind data
            $stmt->bindParam(':name', $this->name);
            $stmt->bindParam(':description', $this->description);
            $stmt->bindParam(':due_date', $this->due_date);

            // Execute query
            if($stmt->execute()) {
                return true;
            }

            // Print error if something goes wrong
            printf("Error: %s.\n", $stmt->error);

            return false;
        }

        // Update Task
        public function update() {
            // Create query
            $query = 'UPDATE ' . $this->table . '
            SET
                name = :name,
                description = :description,
                due_date = :due_date
            WHERE
                id = :id';

            // Prepare statement
            $stmt = $this->connection->prepare($query);

            // Clean data
            $this->name = htmlspecialchars(strip_tags($this->name));
            $this->description = htmlspecialchars(strip_tags($this->description));
            $this->id = htmlspecialchars(strip_tags($this->id));

            // Bind data
            $stmt->bindParam(':name', $this->name);
            $stmt->bindParam(':description', $this->description);
            $stmt->bindParam(':due_date', $this->due_date);
            $stmt->bindParam(':id', $this->id);

            // Execute query
            if($stmt->execute()) {
                return true;
            }

            // Print error if something goes wrong
            printf("Error: %s.\n", $stmt->error);

            return false;
        }

        // Delete Task
        public function delete() {
            // Create query
            $query = 'DELETE FROM ' . $this->table . ' WHERE id = :id';

            // Prepare statement
            $stmt = $this->connection->prepare($query);

            // Clean data
            $this->id = htmlspecialchars(strip_tags($this->id));

            // Bind data
            $stmt->bindParam(':id', $this->id);

            // Execute query
            if($stmt->execute()) {
                return true;
            }

            // Print error if something goes wrong
            printf("Error: %s.\n", $stmt->error);

            return false;
        }
    }