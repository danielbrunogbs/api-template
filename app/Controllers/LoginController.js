function login(req, res, next)
{
	try
	{
		let email = req.body.email;
		let password = req.body.password;

		if(email != 'admin@admin.com')
			throw new Error('E-mail inválido!');

		if(password != 'admin')
			throw new Error('Senha inválida!');

		res.status(200).send({
			token: Math.random(100000000,999999999)
		});
	}
	catch(e)
	{
		next(e);
	}
}

export default { login };