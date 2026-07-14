import mongoose from "mongoose";


// here, userSchema is a schema which is a blueprint of the data that we want to store in the database

// isme user ke rules honge basically,
/*
isme hum define karte hai like
fields
data types
required or not 
default values
validation
unique
min/max length
*/ 
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    mobile:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    },
    empId:{
        type:Number,
        required:true,
        unique: true
    },
    designation:{
        type:String,
        required:true
    }
}, {timestamps: true})

// here we are creating a model of the user schema, which will be used to interact with the database
// ( User is a model name and userSchema is the schema name)

/*
is model ki help se hum database se interact karte hai for example

await User.create()
await User.find()
await User.findOne()
await User.findById()
await User.findOneAndUpdate()
await User.findOneAndDelete()


note: 
Hum kabhi,
userSchema.create() nahi likhte.

Hum likhte hain User.create()
Kyuki database operations Model karta hai.

*/
const User = mongoose.model('User', userSchema)

export default User