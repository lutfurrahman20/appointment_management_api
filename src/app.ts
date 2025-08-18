
import express, { Request, Response } from "express"
import cors from "cors"
import router from "./app/routes/routes";
const app = express()

// 🔹 Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Welcome to Appointment Management System Backend"
    })
})


app.use("/api/v1", router);


export default app;