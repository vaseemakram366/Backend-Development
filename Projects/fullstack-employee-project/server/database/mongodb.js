import mongoose from "mongoose";

async function connectDb(){
    try {
        await mongoose.connect('mongodb://fullstackDatabase:Vaseem1234@ac-jqoqthg-shard-00-00.ltgn4oq.mongodb.net:27017,ac-jqoqthg-shard-00-01.ltgn4oq.mongodb.net:27017,ac-jqoqthg-shard-00-02.ltgn4oq.mongodb.net:27017/?ssl=true&replicaSet=atlas-9lxald-shard-0&authSource=admin&appName=Cluster0')
        console.log('database connected successfully...');
        
    } catch (error){
        console.log('failed to connect Database', error);
        process.exit(1)
        

    }
}
export default connectDb 