const mongoose = require("mongoose");
const shortid = require("shortid");

const WithdrawalSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    email: {
      type: String,
    },
    type: {
      type: String,
    },
    coin: {
      type: String,
    },
    amount: {
      type: String,
      required: [true, "Enter withdrawal amount"],
    },
    country: { type: String },
    address: { type: String },
    rounting: { type: String },
    bankAddress: { type: String },
    bankName: { type: String },
    accountType: { type: String },
    accountNumber: { type: String },
    accountName: { type: String },
    mobileNetwork: { type: String },
    mobileNumber: { type: String },
    walletAddress: {
      type: String,
    },
    comment: {
      type: String,
    },
    reference: {
      type: String,
      default: shortid.generate,
    },
    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Withdrawal", WithdrawalSchema);
