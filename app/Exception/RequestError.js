export default class RequestError
{
	constructor(message, code)
	{
		this.message = message;
		this.http_code = code;
	}
}