const mysql2 = require('mysql');

const connection = mysql2.createConnection({
    host: process.env.dbhost,
    user: process.env.dbuser,
    password: process.env.dbpassword,
    database: process.env.db,
    port: process.env.dbport
});

function getFilePath(params){
    connection.connect();

    return new Promise((resolve, reject) => {
    const sql = `SELECT s3_path FROM files WHERE file_id=${params.file_id}`;
    connection.query(sql, (err, results, fields) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log("fileds: ", fields);
        resolve(results);
      }
    });
    connection.end();
  });
}

module.exports = { 
	getFilePath : getFilePath
};