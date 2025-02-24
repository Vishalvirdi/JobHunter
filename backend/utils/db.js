import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;

// mongodb+srv://vishalvirdi337:4Wb39L2sZH7d7v3m@jobhunter.pnu3c.mongodb.net/