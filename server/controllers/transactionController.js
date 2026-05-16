const Transaction = require("../models/Transaction")

exports.addTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.create(req.body)
    res.status(201).json(transaction)
  } catch (error) {
    res.status(500).json(error)
  }
}

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find()
    res.json(transactions)
  } catch (error) {
    res.status(500).json(error)
  }
}

exports.deleteTransaction = async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id)
    res.json("Deleted Successfully")
  } catch (error) {
    res.status(500).json(error)
  }
}
