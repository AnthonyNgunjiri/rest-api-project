import pkg from "pg";
const {Pool} = pkg;

 const pool = new Pool({
user:"postgres",
password: "tonie",
host: "localhost",
port:5432,
database: "client_db"


 })

 export default pool;