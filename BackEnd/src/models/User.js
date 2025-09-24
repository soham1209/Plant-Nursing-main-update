import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  staffId: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'staff'],
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

export default User;
