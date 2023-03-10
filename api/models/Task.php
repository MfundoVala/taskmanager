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

        public $assigned_to;

        // Constructor with DB
        public function __construct($db) {
            $this->connection = $db;
        }

        // Get Tasks
        public function read_all() {
            // Create query
            $query = 'SELECT
                id,
                name,
                description,
                due_date,
                status,
                assigned_to
            FROM
                ' . $this->table . '
            ORDER BY
                due_date DESC';

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
                id,
                name,
                description,
                due_date,
                status,
                assigned_to
            FROM
                ' . $this->table . '
            WHERE
                id = ?
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
                due_date = :due_date,
                assigned_to = :assigned_to,
                status = :status
            WHERE
                id = :id';

            // Prepare statement
            $stmt = $this->connection->prepare($query);

            // Clean data
            $this->name = htmlspecialchars(strip_tags($this->name));
            $this->description = htmlspecialchars(strip_tags($this->description));
            $this->id = htmlspecialchars(strip_tags($this->id));
            $this->due_date = htmlspecialchars(strip_tags($this->due_date));
            // $this->status = htmlspecialchars(strip_tags($this->status));

            // Bind data
            $stmt->bindParam(':name', $this->name);
            $stmt->bindParam(':description', $this->description);
            $stmt->bindParam(':due_date', $this->due_date);
            $stmt->bindParam(':id', $this->id);
            $stmt->bindParam(':assigned_to', $this->assigned_to);
            $stmt->bindParam(':status', $this->status);

            // Execute query
            if($stmt->execute()) {
                return true;
            }

            // Print error if something goes wrong
            echo json_encode("Error: %s.\n", $stmt->error);

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