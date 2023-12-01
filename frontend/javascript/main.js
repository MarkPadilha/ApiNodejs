const fetchTasks = async () => {
    const response = await fetch('http://localhost:3333/tasks');
    console.log(fetch)
}

fetchTasks();

const form = document.querySelector('.contain_form');


const createPedido = async () => {
    alerta('teste')
}


form.addEventListener('submit', createPedido)