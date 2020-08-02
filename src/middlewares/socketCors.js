//middlware to check the trusted clients for socket connection

module.exports = {
    config: (io) =>{
        var whiteList = [process.env.CLIENT_URL];
        io.origins((origin, callback) => {
            if(whiteList.indexOf(origin) !== -1){
                callback(null,true);
            }else{
                callback(new Error('origin not trusted!'));
            }
        });
    }
}