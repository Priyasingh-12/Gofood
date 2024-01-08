const mongoose = require('mongoose');
const URI = 'mongodb+srv://piyasngh12:Priyasingh@cluster0.fyfuupo.mongodb.net/Gofoodmern';

const mongoDB = async () => { 

    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`connection successful`);

        const fetched_data = mongoose.connection.db.collection("food_items");
        const data =  await fetched_data.find({}).toArray() 
            console.log();

    } catch (err) {
        console.log(`no connection`, err);
    }
}

module.exports = mongoDB;


