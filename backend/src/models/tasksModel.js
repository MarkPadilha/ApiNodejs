
const connection = require("./connection");


const getAll = async ()=>{
	const [pedido] = await connection.execute("SELECT * FROM pedido");
	return pedido;
};

const findOne = async () =>{
	const [pedido] = await connection.execute("SELECT numero_mesa, status_pedido FROM pedido");
	return pedido;
};

const createTask = async (task) => {
	const { nome_cliente, numero_mesa } = task;
	const dataUTC = new Date(Date.now()).toUTCString();
	const query = "INSERT INTO pedido(nome_cliente, numero_mesa, status_pedido, data_hora_pedido, em_atendimento) VALUES (?, ?, ?, ?, ?)";
	const [createdTask] = await connection.execute(query, [ nome_cliente, numero_mesa,  "pendente", dataUTC ]);
	return {insertId: createdTask.insertId};
};

const deleteTask = async (id) => {
	const removePedido = await connection.execute("DELETE FROM pedido WHERE id = ?", [id]); 
	return removePedido;
};

const updateTask = async (id, task) => {
	const { status_pedido } = task;
	const updateTask = await connection.execute("UPDATE pedido SET status_pedido = ? WHERE id = ?", [ status_pedido, id]); 
	return updateTask;
};



module.exports = {
	getAll,
	createTask,
	deleteTask,
	updateTask,
	findOne
};
