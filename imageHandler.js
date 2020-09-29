const AWS = require('aws-sdk');
const s3 = new AWS.S3;

const BUCKET = process.env.s3_bucket;
const ENCODE_BASE64 = 'base64';

async function getImageFromBucket(params){
    const param = {
        Bucket: BUCKET,
        Key: `${params.path}/${params.file_name}`
    }
    console.log("param for s3.getObject :", param);

    const object = await s3.getObject(param).promise();
    console.log("object from s3 : ", object);

    const imageFile = object.Body;
    console.log("imageFileFromS3 : ", imageFile);
    console.log('base64encoded imageFileFroms3 : ', imageFile.toString(ENCODE_BASE64));
    return imageFile.toString(ENCODE_BASE64);
}

module.exports = { 
	getImageFromBucket: getImageFromBucket
};
