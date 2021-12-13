const mongoose = require('mongoose');
const uri = `mongodb+srv://joz:${process.env.DB_PASS}@butik.qrb2j.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
// database connection
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

module.exports = db;