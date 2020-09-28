'use strict';

const AWS = require('aws-sdk');
var s3 = new AWS.S3;

const bucket = process.env.bucket;

module.exports.downloadFromS3 = async (event, context, callback) => {
  console.log("input: ", event);
  console.log("userId: ", event.userId);
  console.log("companyId: ", event.companyId);
  console.log("context: ", context);

  const companyId = event.companyId;
  const userId = event.userId;

  let params = {
    Bucket : bucket,
    Key : `${companyId}/${userId}/123.gif`
  }

try{
  const imageFIle = await s3.getObject(params).promise();
  console.log("imageFile: ", imageFIle.Body.toString('base64'));
  callback(null, imageFIle.Body);
}catch(err){
  callback(null, "The file doesn't exist!");
}
};
