const router = require('express').Router();
const {v4: uuidV4} = require('uuid');

/*
@@ route    : /apiv1/createroom
@@ method   : POST
@@ access   : public
*/
router.get("/createroom",(req,res)=>{
    //generate a UUID (roomid) and send as response
    const roomid = uuidV4();
    res.json({
        msg:"Room Created Successfully.",
        roomid:roomid
    });
});

/*
@@ route    : /apiv1/join
@@ method   : POST
@@ access   : public
@@ param    : roomid
*/
router.get("/join/:roomid",(req,res)=>{
    //i have no idea as of now LOL :P
    res.json({
        msg:"Room Created Successfully.",
        roomid:req.params.roomid
    });
});

module.exports = {roomRoutes:router}