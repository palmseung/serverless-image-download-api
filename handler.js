'use strict';

const FILE_PATH_HANDLER = require('./filePathHandler');
const IMAGE_HANDLER = require('./imageHandler');

module.exports.downloadFromS3 = (event, context) => {
  console.log("userId :", event.userId);
  console.log("companyId : ", event.comapnyId);

  const params = {
    file_id: 1,
    comapnyId: 1234
  }

  return Promise.resolve(params)
        .then(FILE_PATH_HANDLER.getFilePath)
        .then(IMAGE_HANDLER.getImage);
}
