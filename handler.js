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
    Key : `${companyId}/${userId}/1.pdf`.normalize('NFD'),
    Expires : 60 //unit:sec
  }

  const url = await s3.getSignedUrl("getObject", params);
  console.log("url: ", url);
  
  callback(null, url);
};
