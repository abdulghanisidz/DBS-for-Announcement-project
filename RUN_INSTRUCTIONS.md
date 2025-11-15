# Program Execution Instructions

## Status: ✅ Program Successfully Running

The DBS Announcement Project server has been successfully started.

### Server Information
- **Port**: 3000
- **Main File**: server.js
- **Status**: Running
- **Database**: MongoDB Atlas

### MongoDB Connection Setup

Based on your MongoDB Atlas connection string, you need to set up authentication:

1. **Create a `.env` file** in the project root (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

2. **Edit `.env` file** and add your MongoDB password:
   ```
   MONGO_USERNAME=abdulghanisidz
   MONGO_PASSWORD=your_actual_password_here
   ```

3. **Install dotenv package** (if not already installed):
   ```bash
   npm install dotenv
   ```

The connection string format from your MongoDB Atlas:
```
mongodb+srv://abdulghanisidz:<password>@mongodbase.grsajl8.mongodb.net/schoolApp
```

### How to Run the Program

1. **Install Dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Set up environment variables** (see MongoDB Connection Setup above)

3. **Start the Server**:
   ```bash
   npm start
   ```
   Or directly:
   ```bash
   node server.js
   ```

### Server Output
```
✅ Server running on port 3000
✅ Connected to MongoDB Atlas
```

### Available Endpoints

1. **GET /announcements** - Fetch all announcements
   - Returns: JSON array of announcements sorted by date (newest first)

2. **POST /announcements** - Create a new announcement
   - Body: `{ "message": "Your announcement text" }`
   - Returns: Confirmation message

### Testing the Server

You can test the endpoints using curl or any HTTP client:

```bash
# Get announcements
curl http://localhost:3000/announcements

# Create an announcement
curl -X POST http://localhost:3000/announcements \
  -H "Content-Type: application/json" \
  -d '{"message": "Test announcement"}'
```

### Notes

- The server uses MongoDB Atlas for data storage
- CORS is configured to allow requests from: https://siteforschool2.wuaze.com
- MongoDB credentials are managed via environment variables for security
- Make sure your MongoDB Atlas IP whitelist includes your server's IP address
