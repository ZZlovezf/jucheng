var proxy = require('http-proxy-middleware');
<<<<<<< HEAD
module.exports =(app)=>{
	app.use('/index/hotsShowList', proxy({target:'https://m.juooo.com/', changeOrigin: true}));
	app.use('/Show/getShowList', proxy({target:'https://m.juooo.com/', changeOrigin: true}));
=======
module.exports = (app) => {
	app.use('/index/hotsShowList', proxy({
		target: 'https://m.juooo.com/',
		changeOrigin: true
	}));
	app.use(proxy(
		'/Show', {
			target: 'https://m.juooo.com',
			changeOrigin: true
		}
	));
>>>>>>> gg
}

