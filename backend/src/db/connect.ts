import { connect, disconnect } from "mongoose";

async function connectMongo() {
    try {
        await connect(process.env.MONGODB_URL);
    } catch (error) {
        console.log(error);
        throw new Error("Error connecting with MongoDB");
    }
}

async function disconnectMongo() {
    try {
        await disconnect();
    } catch (error) {
        console.log(error);
        throw new Error("Error disconnecting with MongoDB");
    }
}

export { connectMongo, disconnectMongo };
