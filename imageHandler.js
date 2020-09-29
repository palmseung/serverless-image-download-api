const AWS = require('aws-sdk');
const s3 = new AWS.S3;

const THUMBNAIL_BUCKET = process.env.s3_bucket; //I will update it later.
const ORIGINAL_BUCKET = process.env.s3_bucket; //I will update it later.
const ENCODE_BASE64 = 'base64';

async function getImage(params){
    let imageFile;
    try{
        imageFile = await getImageFromBucket(params, THUMBNAIL_BUCKET);
    }catch{
        console.log("The thumbnail image doesn't exist and it is getting from the original bucket...")
        imageFile = await getImageFromBucket(params, ORIGINAL_BUCKET);
    }finally{
        return imageFile.toString(ENCODE_BASE64);
    }
}

async function getImageFromBucket(params, bucketName){
    const param = createParamForBucket(params, bucketName);
    const object = await s3.getObject(param).promise();
    
    return object.Body;
}

function createParamForBucket(params, bucketName){
    const paramsForBucket = {
        Bucket: bucketName,
        Key: `${params.path}/${params.file_name}`
    }
    console.log(`params for ${bucketName} :`, paramsForBucket);

    return paramsForBucket;
}

module.exports = { 
    getImage: getImage,
    getImageFromBucket: getImageFromBucket
};
