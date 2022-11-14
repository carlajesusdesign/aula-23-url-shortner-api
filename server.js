import express from "express";

// import swaggerJsDoc from "swagger-jsdoc";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import { router } from "./Routes/index.js";
import swaggerDocument from "./swagger_output.json" assert { type: 'json' };
const PORT = 3000
const app = express()
const corsOptions = {
    origin : '*'
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(router)
app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.listen(PORT, ()=> console.log(`Running on: http://localhost:${PORT}`))