import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "../routes/router";
import { dbConnect } from "../db/config";

dotenv.config();

const PORT = process.env.PORT || 3000;

export class Server {

  app: Express;
  port: string | number | undefined;

  constructor() {
    this.app = express();
    // this.port = process.env.PORT || '3000';
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection(): Promise<void> {
    await dbConnect()
  }

  middlewares(): void {
    this.app.use(cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: [
        "Content-Type", 
        "Authorization", 
        "Origin", 
        "X-Requested-With", 
        "Accept", 
        "Access-Control-Allow-Origin", 
        "Access-Control-Allow-Headers", 
        "Access-Control-Allow-Methods", 
        "token"
      ],
    }));
    this.app.use(express.json());
  }

  routes(): void {
    this.app.use("/", router);
  }

  listen(): void {
    this.app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
}