'use strict';

const AWS = require('aws-sdk');
const mysql2 = require('mysql');
const s3 = AWS.S3;

const connection = mysql2.createConnection({
  host: process.env.dbhost,
  user: process.env.dbuser,
  password: process.env.dbpassword,
  database: process.env.db,
  port: process.env.dbport
});

module.exports.downloadFromS3 = (event, context) => {
  connection.connect();
  console.log("userId : ", event.userId);
  console.log("companyId : ", event.companyId);

  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM test_files`;
    connection.query(sql, (err, results, fields) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log("fileds: ", fields);
        resolve({statusCode: 200, body: {results}});
      }
    });
    connection.end();
  });
}
