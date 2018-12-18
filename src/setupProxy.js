var proxy = require('http-proxy-middleware');
module.exports =(app)=>{
	app.use('/index/hotsShowList', proxy({target:'https://m.juooo.com/', changeOrigin: true}));
}

