import { Sequelize } from "sequelize";

// este archibo hace la coneccion a la db

// hay muchas formas de hacer la coneccion a la db en este caso se define una bariable db en la cual se instancia sequelize y se le da los distintos datos
// los datos son el nombre de la db, el nombre de usuario, la contraseña y los datos del host y db
const db = new Sequelize('database_app','root','alanalan',{
  host:'localhost',
  dialect:'mysql'
})

export default db