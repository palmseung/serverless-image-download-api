const MYSQL = require('mysql');

const connection = MYSQL.createConnection({
    host: process.env.dbhost,
    user: process.env.dbuser,
    password: process.env.dbpassword,
    database: process.env.db,
    port: process.env.dbport
});

function getFilePath(params){
    connection.connect();

    return new Promise((resolve, reject) => {
    const sql = `SELECT s3_path, original_file_name FROM files WHERE file_id=${params.file_id}`;
    connection.query(sql, (err, results) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log("results: ", results);
        console.log("s3_path : ", results[0].s3_path);
        console.log("original_file_name: ", results[0].original_file_name);

        resolve({
            id: params.file_id,
            path: `${results[0].s3_path}`,
            file_name: `${results[0].original_file_name}`
        });
      }
    });
    connection.end();
  });
}

module.exports = { 
	getFilePath : getFilePath
};
