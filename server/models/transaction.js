const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
  
    id: Number,
    reference: String,
    time: Date,
    amount: Number,
    ccy: String,
    purpose: String,
    fromMember: String,
    fromUser: String,
    fromAccount: String,
    toType: String,
    toAccount: String,
    toMember: String
});

module.exports = mongoose.model('transaction', transactionSchema);
