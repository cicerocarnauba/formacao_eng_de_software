import express from "express";
// import authRoutes from "./routes/authRoutes.js";
import notaRoutes from "./routes/notaRoutes.js";

const app = express();

app.use(express.json());
// app.use("/auth", authRoutes);
app.use("/notas", notaRoutes);

app.listen(3000, () => {
  console.log("API em http://localhost:3000");
});