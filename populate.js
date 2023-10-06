require('dotenv').config()

const connectDB = require('./db/connect')
const Product = require('./models/product')

const jsonProducts = require('./products.json')

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log("Connected to DB, removing all the products...");
        await Product.deleteMany(); // Remove all the products
        console.log("All products removed, adding new ones...")
        await Product.create((jsonProducts)); // Add products
        console.log('Products are created, all done.');
        process.exit(0)
    }
    catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()