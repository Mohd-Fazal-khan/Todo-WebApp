# Task Manager

A simple task management application built with React and Express.

## Installation

1. Clone the repository:
```
git clone https://github.com/Mohd-Fazal-khan/Todo-WebApp.git
```

2. Install the dependencies:
```
cd backend
npm install

cd frontend
npm install
```

3. Start the server:
```
npm start

```
4. Start the frontend:
```
npm run dev

```

The application will be available at `http://localhost:5173`.

## Usage

The Task Manager application allows you to create, update, and delete tasks. You can add a task by entering a title and description in the form at the top of the page. The task will be displayed in the list below.

To edit a task, click the "Edit" button on the task card. This will populate the form with the task's information, allowing you to update the title and description. Click the "Update" button to save the changes.

To delete a task, click the "Delete" button on the task card. The task will be removed from the list.

## API

The application uses the following API endpoints:

- `POST /tasks`: Create a new task
- `GET /tasks`: Retrieve all tasks
- `PUT /tasks/:id`: Update a task
- `DELETE /tasks/:id`: Delete a task

## Contributing

If you would like to contribute to the project, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and commit them
4. Push your changes to your fork
5. Submit a pull request

## License

This project is licensed under the [MIT License](LICENSE).

## Testing

To run the tests, use the following command:

```
npm test
```

This will run the test suite and display the results.
