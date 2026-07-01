import mongoose from 'mongoose';

const EnquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
  },
  phone: {
    type: String,
  },
  message: {
    type: String,
    required: [true, 'Please provide a message'],
  },
  carId: {
    type: String,
  },
  status: {
    type: String,
    enum: ['pending', 'responded', 'closed'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Enquiry || mongoose.model('Enquiry', EnquirySchema);