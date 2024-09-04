const mongoose = require ('mongoose');

const DatabaseConnection = async()=>{
 await mongoose.connect('mongodb+srv://ujjawasthi:NPGqjlu67gQt3EDV@signup.wirvg.mongodb.net/?retryWrites=true&w=majority&appName=signup')
 .then (()=>console.log ('successfully connected to mongodb'))
 .catch(()=>console.log('cannot connect to database'))
}
module .exports = DatabaseConnection;