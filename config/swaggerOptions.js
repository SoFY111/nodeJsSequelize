module.exports = {
	swaggerOptions: {
		swaggerDefinition: {
			info: {
				description: 'SqAPI',
				title: 'SqAPI',
				version: '1.0.0'
			},
			host: 'localhost:5000',
			basePath: '',
			produces: [
				'application/json',
				'application/xml'
			],
			schemes: [ 'http', 'https' ]
		},
		basedir: __dirname, // app absolute path
		files: [
			'../utils/*.js'
		]
	}
};