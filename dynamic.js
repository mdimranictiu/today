const express =require('express');
const multer = require("multer");
const app = express();
const upload_folder ="./uploads/";
const upload=multer({
    dest: upload_folder,
    limits:{
        fileSize:1000000,
    },
    fileFilter: (req,file,cb)=>{
        if(
            file.mimetype==="image/png" || file.mimetype==="image/jpg" || file.mimetype==="image/jpeg"
        ){
            cb(null,true)
        }
        else{
            cb(new Error ("Only jpg png or jpeg format allowed"));
        }
    }
});
app.post("/", upload.single('avatar'),(req,res)=>{
    res.send("file uploaded successfully");
});
app.listen(5000,()=>{
    console.log("App listening at port 5000");
});