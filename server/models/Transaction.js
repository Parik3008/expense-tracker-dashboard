const mongoose = require("mongoose")

const transactionSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  type: String,
  category: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("Transaction", transactionSchema)
