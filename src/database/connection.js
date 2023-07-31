//se importa el modulo de sql
import sql from 'mssql'
//configuracion de los parametros de la BD
const dbSettings = {
    user: "menher4",
    password: "123456",
    server: "localhost",
    database: "webstore",
    options: {
        encrypt: true, //for azure
        trustServerCertificate: true, //change to true for local dev / self-signed certs
    },
};
//funcion para conectarse a la bd con los parametros anteriores(dbSettings)
async function getConnection() {
    const pool = await sql.connect(dbSettings);
    return pool;
}
//Se ejecuta la funcion
getConnection()
