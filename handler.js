'use strict';

const AWS = require('aws-sdk');
const filePathHandler = require('./filePathHandler');
const s3 = AWS.S3;

module.exports.downloadFromS3 = (event, context) => {
  const params = {
    file_id: 1,
    comapnyId: 1234,
    
  }

  return Promise.resolve(params)
        .then(filePathHandler.getFilePath);
}
