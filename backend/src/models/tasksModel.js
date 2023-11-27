const connection = require("./connection");


const getAll = async ()=>{
	const [tasks] = await connection.execute("SELECT * FROM tasks");
	return tasks;
};

const createTask = async (task) => {
	const { nome } = task;
	const dataUTC = new Date(Date.now()).toUTCString();
	const query = "INSERT INTO tasks(nome, status, created_at) VALUES (?, ?, ?)";
	const [createdTask] = await connection.execute(query, [ nome, "pendente", dataUTC ]);
	return {insertId: createdTask.insertId};
};

const deleteTask = async (id) => {
	const removeTask = await connection.execute("DELETE FROM tasks WHERE id = ?", [id]); 
	return removeTask;
};

const updateTask = async (id, task) => {
	const { status } = task;
	const updateTask = await connection.execute("UPDATE tasks SET status = ? WHERE id = ?", [ status, id]); 
	return updateTask;
};



module.exports = {
	getAll,
	createTask,
	deleteTask,
	updateTask,
};
