# Program Execution Instructions

## Status: ✅ Program Successfully Running

The DBS Announcement Project server has been successfully started.

### Server Information
- **Port**: 3000
- **Main File**: server.js
- **Status**: Running (PID: 3416)

### How to Run the Program

1. **Install Dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Start the Server**:
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
- The server will attempt to connect to MongoDB on startup
- If MongoDB connection fails, the server will continue running but database operations may fail

### Current Execution

The program is currently running in the background with the following output:

```
> dbs-for-announcement-project@1.0.0 start
> node server.js

✅ Server running on port 3000
```

The server is actively listening for HTTP requests on port 3000.
