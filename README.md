# DeceitCode

## About this project
LeetCode-like coding challenge platform built to experiment with anti-cheat techniques intended to combat emerging tools powered by LLMs. The frontend (React + Monaco) provides a workspace and submit/run flows. The backend (Node + Express + TypeScript + MongoDB) serves problems, auth, and judges submissions via a remote sandbox service (Go, Docker, gVisor). 

This project uses a service from my separate repo for the RemoteCodeSandbox. See: https://github.com/joshL1215/RemoteCodeSandbox  

### System Design
![System Design](./docs/codejudge-sys-design.svg)

### Problem Database
![screenshot1](./docs/deceitcode1.png)

### Interactive frontend with Monaco code editor
![screenshot2](./docs/deceitcode2.png)

### Code judging with custom code execution sandbox
![screenshot1](./docs/deceitcode3.png)

## Local setup 
### Prerequisites
- Node.js 22.x (or compatible) and npm  
- Docker & docker-compose (recommended for Mongo)  
- Git

### How to run
1. Clone repository
   ```
   git clone <this-repo-url>
   cd DeceitCode
   ```

2. Start MongoDB 
   - With Docker Compose (my recommendation):
     ```
     docker compose up -d
     ```

3. Run RemoteCodeSandbox
   ```
   git clone https://github.com/joshL1215/RemoteCodeSandbox
   cd RemoteCodeSandbox
   go run cmd/api/main.go
   ```

4. Configure server environment
   - Create server/.env with at minimum:
     - MONGO_URI (e.g. mongodb://localhost:27017/deceitcode)
     - SANDBOX_URL (pointing to RemoteCodeSandbox instance that you ran)
     - APP_ORIGIN (frontend origin)
     - JWT_SECRET
     - JWT_REFRESH_SECRET
   - Example:
     ```
     MONGO_URI=mongodb://localhost:27017/deceitcode
     SANDBOX_URL=http://localhost:3000/sandbox
     APP_ORIGIN=http://localhost:5173
     JWT_SECRET=your_jwt_secret
     JWT_REFRESH_SECRET=your_refresh_secret
     ```

5. Install & run backend
   ```
   cd server
   npm ci
   npm run dev
   ```
   - Server defaults to http://localhost:5000 (see server/src/server.ts)

6. Seed problems (optional)
   ```
   cd server
   npm run seed
   ```

7. Install & run frontend
   ```
   cd client
   npm ci
   npm run dev
   ```
   - Open the Vite URL printed in terminal (default: http://localhost:5173). The frontend will call the backend at the server origin configured (APP_ORIGIN/CORS).
