//middlware to check the trusted clients
const cors = require('cors');

module.exports = {
    config: (app) =>{
        var whiteList = [process.env.CLIENT_URL];
        var corsOption ={
            origin: (origin,callback) => {
                if(whiteList.indexOf(origin) !== -1){
                    callback(null,true);
                }else{
                    callback(new Error('origin not trusted!'));
                }
            }
        }
        app.use(cors(corsOption));
    }
}