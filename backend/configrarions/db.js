const mongoose  = require('mongoose');
let MONGO_URL = 'mongodb://127.0.0.1:27017/dbLawyer'
mongoose.connect(MONGO_URL)
.then(()=>{
    console.log("Database Connected");
})
.catch((err)=>{
    console.log("Database not connected".err);
});
