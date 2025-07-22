import cors from "cors";
import express from "express";
import tasksRoutes from "./routes/tasksRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", tasksRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

export default app;
