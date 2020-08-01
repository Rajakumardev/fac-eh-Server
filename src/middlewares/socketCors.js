//middlware to check the trusted clients for socket connection

module.exports = {
    config: (io) =>{
        var whiteList = [process.env.CLIENT_URL];
        console.log("config sock cors");
        io.origins((origin, callback) => {
            console.log(origin);
            if(whiteList.indexOf(origin) !== -1){
                callback(null,true);
            }else{
                callback(new Error('origin not trusted!'));
            }
        });
    }
}