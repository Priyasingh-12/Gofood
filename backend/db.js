const mongoose = require('mongoose');
const URI = 'mongodb+srv://piyasngh12:Priyasingh@cluster0.fyfuupo.mongodb.net/Gofoodmern';

const mongoDB = async () => { 

    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`connection successful`);
             
         // Fetch data from "food_items" collection
         const foodItemsCollection = await mongoose.connection.db.collection("food_items");
         const foodItemsData = await foodItemsCollection.find({}).toArray();
 
         // Fetch data from "foodCategory" collection
         const foodCategoryCollection = await mongoose.connection.db.collection("foodCategory");
         const foodCategoryData = await foodCategoryCollection.find({}).toArray();
 
               // Set global variables with fetched data
        global.food_items = foodItemsData;
        global.foodCategory = foodCategoryData;

        console.log(global.food_items);
        console.log(global.foodCategory);
      

    } catch (err) {
        console.log(`no connection`, err);
    }
}

module.exports = mongoDB;


