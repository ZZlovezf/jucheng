var proxy = require('http-proxy-middleware');




module.exports =(app)=>{
	app.use('/index', proxy({target:'https://m.juooo.com/', changeOrigin: true}));
	app.use(proxy('/Show', {target: 'https://m.juooo.com',changeOrigin: true}));
}

