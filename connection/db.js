const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connectDb = await mongoose.connect(process.env.DATABASE, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // useCreateIndex: true,
      // useFindAndModify: false
    });
    
    console.log("connected");
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDb;
