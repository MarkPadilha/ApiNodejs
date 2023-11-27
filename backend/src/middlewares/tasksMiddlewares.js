const validateBody = (request, response, next) => {
	const { body } = request;

	if( body.status == ""){
		return response.status(400).json({message: "O campo status está vazio"});
	}

	next();
};



module.exports = {
	validateBody,
};