import express from "express";
import cors from 'cors'
import db from "./database/db.js";
import blogRoutes from "./routes/routes.js"



const app = express()



app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)



try {
  await db.authenticate()
  console.log("CONECCION EXITOSA");
} catch (err){
  console.log( "ERROR! " + err );
}



app.get('/', (req,res) => {
  res.send('ESTA VIVOOO')
})



app.listen(8000, ()=> {
  console.log("server on http:localhost:8000/")
})
