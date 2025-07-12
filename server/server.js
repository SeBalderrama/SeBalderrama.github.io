const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

// Load environment variables
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Set MongoDB URI directly for now
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://sebastianbalderr:3FQTV0w0dsuFxozf@contactme.hvrc5ug.mongodb.net/esl-portfolio?retryWrites=true&w=majority&appName=contactme';

console.log('Server starting...');
console.log('MONGODB_URI:', MONGODB_URI ? 'Set' : 'Not set');
console.log('PORT:', PORT);

// Middleware
app.use(helmet());
app.use(cors({
  origin: true, // Allow all origins for development
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

// MongoDB Connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('MongoDB connection error:', err));

// Contact Message Schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  service: {
    type: String,
    required: [true, 'Service selection is required'],
    enum: ['conversational', 'business', 'exam', 'kids']
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [1000, 'Message cannot exceed 1000 characters']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  ipAddress: String,
  userAgent: String
});

const Contact = mongoose.model('Contact', contactSchema);

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'ESL Portfolio API is running' });
});

// Contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, service, message } = req.body;

    // Basic validation
    if (!name || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Create new contact message
    const newContact = new Contact({
      name,
      email,
      service,
      message,
      ipAddress: req.ip,
      userAgent: req.get('User-Agent')
    });

    await newContact.save();

    res.status(201).json({
      success: true,
      message: 'Thank you for your message! I will get back to you soon.',
      data: {
        id: newContact._id,
        name: newContact.name,
        email: newContact.email,
        service: newContact.service,
        createdAt: newContact.createdAt
      }
    });

  } catch (error) {
    console.error('Contact submission error:', error);
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: messages
      });
    }

    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.'
    });
  }
});

// Get all contact messages (for admin purposes)
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: contacts
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching contacts'
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
}); 