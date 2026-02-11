import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  //check db connection
  if (connection.isConnected) {
    console.log("already connected to db");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.DB_URL!);

      connection.isConnected = db.connections[0].readyState;
      
      console.log("DB CONNECTED")
  } catch (error) {
      console.log("DB CONNECTION FAILED !!", error)
      process.exit(1)
  }
}

export default dbConnect
