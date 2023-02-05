CREATE TABLE `employees` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `picture` varchar(255) NOT NULL DEFAULT 'https://picsum.photos/200',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

INSERT INTO `employees` (`id`, `name`, `picture`) VALUES
(1, 'Mfundo', 'https://picsum.photos/200'),
(2, 'Soso', 'https://picsum.photos/200'),
(3, 'Richard', 'https://picsum.photos/200');

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `due_date` varchar(255) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` ENUM('Open', 'In Progress', 'Complete') DEFAULT 'Open',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `assigned_to` TEXT NOT NULL DEFAULT 'a:0:{}',
  PRIMARY KEY (`id`)
);

INSERT INTO `tasks` (`id`, `name`, `description`, `due_date`, `status`) VALUES
(1, 'Make UI Design', 'Make a UI design for the task manager app', '2020-10-10', 'Complete'),
(2, 'Learn PHP Rest Api', 'Learn php, then learn how to make a Rest API with it', '2023-10-10', 'In Progress'),
(3, 'Make React front end', 'Turn UI design into front end with mock data', '2023-10-10', 'Open'),
(4, 'Connect React to API', 'Connect the front end to the API', '2023-10-10', 'Open'),
(5, 'Make a login page', 'Make a login page for the app', '2023-10-10', 'Open'),
(6, 'Make a register page', 'Make a register page for the app', '2023-10-10', 'Open'),
(7, 'Make a dashboard page', 'Make a dashboard page for the app', '2023-10-10', 'Open'),
(8, 'Make a task page', 'Make a task page for the app', '2023-10-10', 'Open'),
(9, 'Make a profile page', 'Make a profile page for the app', '2023-10-10', 'Open'),
(10, 'Make a settings page', 'Make a settings page for the app', '2023-10-10', 'Open'),
(11, 'Make a logout page', 'Make a logout page for the app', '2023-10-10', 'Open'),
(12, 'Make a 404 page', 'Make a 404 page for the app', '2023-10-10', 'Open');


CREATE TABLE `task_assignees` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `task_id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

INSERT INTO `task_assignees` (`id`, `task_id`, `employee_id`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 1),
(5, 5, 2),
(6, 6, 3),
(7, 7, 1),
(8, 8, 2),
(9, 9, 3),
(10, 10, 1),
(11, 11, 2),
(12, 12, 3);