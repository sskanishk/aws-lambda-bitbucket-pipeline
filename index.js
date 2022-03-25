const axios = require('axios');
exports.handler = async (event, context) => {
  try {
		let axios_resp = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

		let response = {
			'statusCode': 200,
			'body': JSON.stringify(event.body),
			'api_call_data': JSON.stringify(axios_resp.data)
		}

		return response
  }
  catch(error) {
  	console.log(error)
  }
}