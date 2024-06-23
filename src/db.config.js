import pkg from "pg";
const {Pool} = pkg;
import { config } from "dotenv";
config();
 const pool = new Pool({
user: process.env.USER_PGS,
password: process.env.PASSWORD_PGS,
host: process.env.HOST_PGS,
port: process.env.PORT_PGS,
database: process.env.DB_PGS


 })

 export default pool;