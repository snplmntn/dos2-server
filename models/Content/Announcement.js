const mongoose = require("mongoose");

const AnnouncementSchema = new mongoose.Schema({
  userId: String,
  username: {
    type: String,
    required: true,
    index: "text",
  },
  fullname: {
    type: String,
    required: true,
    index: "text",
  },
  content: {
    type: String,
    required: true,
    index: "text",
  },
  category: {
    type: Number,
    enum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    default: 0,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Announcement", AnnouncementSchema);
