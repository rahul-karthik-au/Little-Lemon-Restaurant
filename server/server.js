import express from "express";
import cors from "cors";
import router from "./routes/routes.js";

const PORT=process.env.PORT || 5050;
const app=express();

app.use(cors());
app.use(express.json());
app.use("/api",router);

app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));
