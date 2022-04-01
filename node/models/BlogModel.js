import db from "../database/db.js";
// se importa la db
import { DataTypes } from "sequelize";
// se importa lo que se va a usar de sequelize

// en esta constante se esta guardando el modelo de la tabla blogs
const BlogModel = db.define('blogs',{
  title: { type: DataTypes.STRING },
  content: { type: DataTypes.STRING },
})
// hay dos maneras de declarar los modelos, define e init, en este caso se usa la primer opcion

export default BlogModel