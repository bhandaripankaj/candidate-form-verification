var express = require('express')
const multer =  require('multer')


 const imageUpload = async (req,res)=>{
    var storage = multer.diskStorage({
        destination:function(req,files,cb){
            cb(null,"public/images")
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname + Date.now()+file.originalname)
        }
    })
    const upload = multer({storage:storage}).single("file")
    upload(req,res, function(err){
        if(err){
            res.send(err)
        }
        return res.json({
            message:"Upload file successfully.",
            data:req.file
        })
    })
}

module.exports =  imageUpload