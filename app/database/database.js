import sqlite3  from "sqlite3";
import md5 from "md5";

const DBSOURCE = "db.sqlite"
const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            gold number,
            message number)`,
       
        (err) => {
            if (err) {
                // Table already created
                console.log('BD created');
            }
        });  
    }
});

export default db;
