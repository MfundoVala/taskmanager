<?php

    class Employee {
        // DB stuff
        private $connection;
        private $table = 'employees';

        // Employee Properties
        public $id;
        public $name;
        public $picture;
        public $created_at;

        // Constructor with DB
        public function __construct($db) {
            $this->connection = $db;
        }

        // Get Employees
        public function read_all() {
            // Create query
            $query = 'SELECT
                id,
                name,
                picture,
                created_at
            FROM
                ' . $this->table . '
            ORDER BY
                created_at DESC';

            // Prepare statement
            $stmt = $this->connection->prepare($query);

            // Execute query
            $stmt->execute();

            return $stmt;
        }

        // Get Single Employee
        public function read_single() {
            // Create query
            $query = 'SELECT
                id,
                name,
                picture,
                created_at
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
            $this->picture = $row['picture'];
            $this->created_at = $row['created_at'];
        }

        // Create Employee
        public function create() {
            // Create query
            $query = 'INSERT INTO ' . $this->table . '
            SET
                name = :name,
                email = :email,
                picture = :picture';

            // Prepare statement
            $stmt = $this->connection->prepare($query);

            // Clean data
            $this->name = htmlspecialchars(strip_tags($this->name));
            $this->picture = htmlspecialchars(strip_tags($this->picture));

            // Bind data
            $stmt->bindParam(':name', $this->name);
            $stmt->bindParam(':picture', $this->picture);

            // Execute query
            if($stmt->execute()) {
                return true;
            }

            // Print error if something goes wrong
            printf("Error: %s.\n", $stmt->error);

            return false;
    }

}