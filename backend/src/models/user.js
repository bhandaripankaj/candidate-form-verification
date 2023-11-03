const mongoose = require('mongoose');
const Users = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    dob: { type: String, required: true },
    residentialAddress:{ type: Object, required: true },
    permanentAddress:{ type: Object, required: false },
    documents: [
        {
          fileName: { type: String, required: true },
          fileType: { type: String, required: true },
          file: { type: String, required: true },
        },
      ],
},
    { timestamps: true, versionKey: false }
);

module.exports = mongoose.model('Users', Users);