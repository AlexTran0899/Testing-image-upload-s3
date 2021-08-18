const router = require('express').Router()
const upload = require('../fileupload')
const singleUpload = upload.single('image')

router.post('/image-upload', (req,res)=>{ 
    singleUpload(req,res, ()=>{
        console.log(req.file)
        return res.json({'imageURL':req.file.location})
    })
})
module.exports = router;