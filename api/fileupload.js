const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
 
aws.config.update({
    secretAccessKey:'/ftUJHuvjt+KqmmpFUz4gPAn6YFBgGMtjugFWI3A',
    accessKeyId:'AKIAV2Q3S2MQV3PUTFXX',
    region: 'us-east-1',
})

const s3 = new aws.S3({ })
 

const upload = multer({
    storage: multerS3({
        s3,
        bucket: 'lawstufflab37',
        metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
        },
        key: function (req, file, cb) {
        cb(null, Date.now().toString())
        }
    })
  })

module.exports = upload;