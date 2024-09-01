const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please enter your Firstname"],
      trim: true,
      lowercase: true,
    },
    lastname: {
      type: String,
      required: [true, "Please enter your lastname"],
      trim: true,
      lowercase: true,
    },
    username: {
      type: String,
      required: [true, "Please enter your username"],
      match: [/^\b[a-zA-Z0-9_]+\b$/, "Please enter a valid username"],
      trim: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email address"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid Email",
      ],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minlength: 8,
      select: false,
    },
    country: {
      type: String,
      required: [true, "Please select your country of recidence"],
    },
    region: {
      type: String,
      required: [true, "Please select your region"],
    },
    phone: {
      type: String,
      required: [true, "Please enter your phone number"],
    },
    occupation: {
      type: String,
      required: [true, "Please enter your occupation"],
    },
    referral: {
      type: String,
      default: "",
    },
    referralEarnings: {
      type: Number,
      default: 0,
    },
    withdrawnbalance: {
      type: Number,
      default: 0,
    },
    transferredbalance: {
      type: Number,
      default: 0,
    },
    withdrawalactive: {
      type: Boolean,
      default: false,
    },
    currency: {
      type: String,
      default: "USD",
    },
    BTC: {
      name: {
        type: String,
        default: "Bitcoin",
      },
      logo: {
        type: String,
        default: "https://i.imgur.com/Lh9hdU2.png",
      },
      walletImg: {
        type: String,
        default: "https://i.imgur.com/0wCiv9o.jpeg",
      },
      walletAddress: {
        type: String,
        default: "bc1qla98j8n9a8xp3ert82xcp505aeplaxwuanj98p",
      },
      deposit: {
        type: Number,
        default: 0,
      },
      pending: {
        type: Number,
        default: 0,
      },
      profit: {
        type: Number,
        default: 0,
      },
      bonus: {
        type: Number,
        default: 0,
      },
    },
    ETH: {
      name: {
        type: String,
        default: "Etheruem",
      },
      logo: {
        type: String,
        default: "https://i.imgur.com/VSGKPLd.png",
      },
      walletImg: {
        type: String,
        default: "https://i.imgur.com/2GJDzpf.jpeg",
      },
      walletAddress: {
        type: String,
        default: "0x2f601a2E4893B26186b25F0af2a78Dc9836Ff315",
      },
      deposit: {
        type: Number,
        default: 0,
      },
      pending: {
        type: Number,
        default: 0,
      },
      profit: {
        type: Number,
        default: 0,
      },

      bonus: {
        type: Number,
        default: 0,
      },
    },
    BNB: {
      name: {
        type: String,
        default: "Binance coin",
      },
      logo: {
        type: String,
        default: "https://i.imgur.com/OyKFAvw.png",
      },
      walletImg: {
        type: String,
        default: "https://i.imgur.com/BRTytvu.jpeg",
      },
      walletAddress: {
        type: String,
        default: "0x2f601a2E4893B26186b25F0af2a78Dc9836Ff315",
      },
      deposit: {
        type: Number,
        default: 0,
      },
      pending: {
        type: Number,
        default: 0,
      },
      profit: {
        type: Number,
        default: 0,
      },

      bonus: {
        type: Number,
        default: 0,
      },
    },
    USDT: {
      name: {
        type: String,
        default: "Tether",
      },
      logo: {
        type: String,
        default: "https://i.imgur.com/Sjieype.png",
      },
      walletImg: {
        type: String,
        default: "https://i.imgur.com/iEV2IC3.jpeg",
      },
      walletAddress: {
        type: String,
        default: "0x2f601a2E4893B26186b25F0af2a78Dc9836Ff315",
      },
      deposit: {
        type: Number,
        default: 0,
      },
      pending: {
        type: Number,
        default: 0,
      },
      profit: {
        type: Number,
        default: 0,
      },

      bonus: {
        type: Number,
        default: 0,
      },
    },
    LTC: {
      name: {
        type: String,
        default: "Litecoin",
      },
      logo: {
        type: String,
        default: "https://i.imgur.com/ZGG3Uzl.png",
      },
      walletImg: {
        type: String,
        default: "https://i.imgur.com/lRtkyq3.jpeg",
      },
      walletAddress: {
        type: String,
        default: "MNjb2VoAbirYLbtedDYK4pjcvhgN8Au2HF",
      },
      deposit: {
        type: Number,
        default: 0,
      },
      pending: {
        type: Number,
        default: 0,
      },
      profit: {
        type: Number,
        default: 0,
      },
      bonus: {
        type: Number,
        default: 0,
      },
    },
    BCH: {
      name: {
        type: String,
        default: "Bitcoin Cash",
      },
      logo: {
        type: String,
        default: "https://i.imgur.com/hFf36e7.png",
      },
      walletImg: {
        type: String,
        default: "https://i.imgur.com/vdPYRBx.jpeg",
      },
      walletAddress: {
        type: String,
        default: "qzcmmf8ftvexg5r2nplct4xzht73mwgkkysq9xhlsp",
      },
      deposit: {
        type: Number,
        default: 0,
      },
      pending: {
        type: Number,
        default: 0,
      },
      profit: {
        type: Number,
        default: 0,
      },

      bonus: {
        type: Number,
        default: 0,
      },
    },
    active: {
      type: Boolean,
      default: false,
    },
    verificationinitiated: {
      type: Boolean,
      default: false,
    },
    verified: {
      type: String,
      default: "Not Verified",
    },
    status: {
      type: String,
      default: "Active",
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.createJWT = function () {
  return jwt.sign(
    {
      userID: this._id,
      firstname: this.firstname,
      lastname: this.lastname,
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  );
};

UserSchema.methods.comparePassword = async function (userPassword) {
  const isMatch = await bcrypt.compare(userPassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("User", UserSchema);
