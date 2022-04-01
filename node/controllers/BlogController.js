import BlogModel from "../models/BlogModel.js";
// se importa el modelo de la db por que es ahi donde se le haran las consultas

export const getAllBlogs = async (req,res) => {

// mostrar todos los resgistros
  try {
    const blogs = await BlogModel.findAll()
    res.json(blogs)
  } catch (err){
    res.json( { message: err.message })
  }
} 

// mostrar un solo registro
export const getBlog = async (req, res)=>{
  try {
    const blog = await BlogModel.findAll({
      where: { id:req.params.id }
    })
    res.json(blog[0])
  } catch (err) {
    res.json( { message: err.message } )
  }
}

// crear un registro
export const createBlog = async (req, res) => {
  try {
    await BlogModel.create(req.body)
    res.json({
      "message":"!Registro creado!"
    })
  } catch (err) {
    res.json( { message: err.message } )
  }
}

// actualizar un registro
export const updateBlog = async (req, res) => {
  try {
      await BlogModel.update(req.body, {
        where: { id: req.params.id }
      })
      res.json({
        "message":"!Registro actualizado con exito!"
      })
  } catch (err) {
    res.json( { message: err.message } )
  }
}

// eliminar un registro 
export const deleteBlog = async (req, res) => {
  try {
    await BlogModel.destroy({
      where: { id: req.params.id }
    })
    res.json({
      "message":"Registro borrado exitosamente!"
    })
  } catch(err){
    res.json( { message: err.message } )
  }
}


