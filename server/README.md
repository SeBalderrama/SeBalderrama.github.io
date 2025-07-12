# ESL Portfolio Backend

Backend API server for the ESL Teacher Portfolio with MongoDB Atlas integration.

## Setup Instructions

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. MongoDB Atlas Setup

You'll need to provide the following information from your MongoDB Atlas dashboard:

#### Required Information:
1. **MongoDB Connection String** - You'll find this in your Atlas cluster
2. **Database Name** - We'll use `esl-portfolio`
3. **Network Access** - Add your IP address or `0.0.0.0/0` for all IPs

#### Steps to get MongoDB Atlas connection string:

1. **Log into MongoDB Atlas** (https://cloud.mongodb.com)
2. **Create a new cluster** (if you don't have one)
3. **Set up database access**:
   - Go to "Database Access" in the left sidebar
   - Click "Add New Database User"
   - Create a username and password (save these!)
   - Select "Read and write to any database"
   - Click "Add User"

4. **Set up network access**:
   - Go to "Network Access" in the left sidebar
   - Click "Add IP Address"
   - Add your current IP or `0.0.0.0/0` for all IPs
   - Click "Confirm"

5. **Get your connection string**:
   - Go to "Database" in the left sidebar
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string

### 3. Environment Configuration

Create a `.env` file in the server directory:

```bash
cp env.example .env
```

Edit the `.env` file with your MongoDB connection string:

```env
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/esl-portfolio?retryWrites=true&w=majority
PORT=5000
FRONTEND_URL=http://localhost:5174
```

### 4. Start the Server

```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:5000`

### 5. Test the API

```bash
# Health check
curl http://localhost:5000/api/health

# Test contact form (replace with your actual data)
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "service": "conversational",
    "message": "Hello, I would like to learn English!"
  }'
```

## API Endpoints

- `GET /api/health` - Health check
- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Get all contact messages (for admin)

## Features

- ✅ MongoDB Atlas integration
- ✅ Form validation
- ✅ Rate limiting
- ✅ CORS support
- ✅ Security headers
- ✅ Error handling
- ✅ Input sanitization

## Database Schema

The contact messages are stored with the following structure:
- `name` (required)
- `email` (required, validated)
- `service` (required, enum: conversational, business, exam, kids)
- `message` (required, max 1000 chars)
- `createdAt` (auto-generated timestamp)
- `ipAddress` (for spam protection)
- `userAgent` (browser info) 