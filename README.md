# SyncPad

A real-time collaborative notes platform that allows multiple users to create shared workspaces, collaborate on notes, and receive live updates through WebSocket-based communication.

## Overview

SyncPad is designed to explore the architecture behind modern collaborative applications. Users can create rooms, join shared workspaces, and collaborate on notes in real time. The project focuses on event-driven communication, room-based collaboration, and scalable backend design.

## Features

* Create and join collaborative rooms
* Real-time note synchronization
* Multiple notes per room
* Shared workspaces
* WebSocket-based communication using Socket.IO
* Persistent data storage with MongoDB
* Room-based collaboration architecture

## Tech Stack

### Backend

* Node.js
* Express.js
* Socket.IO
* MongoDB
* Mongoose

### Frontend

* React.js
* Vite
* Socket.IO Client

## Project Structure

```text
backend/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── sockets/
├── server.js
└── package.json
```

## Architecture

```text
Room
 ├── Note 1
 ├── Note 2
 ├── Note 3
 └── Note N
```

A room acts as a collaborative workspace where multiple notes can be created and edited. Real-time updates are delivered through Socket.IO, allowing connected users to stay synchronized.

## Learning Objectives

This project is being built to gain practical experience with:

* WebSocket communication
* Socket.IO rooms and events
* Real-time state synchronization
* Event-driven architecture
* MongoDB data modeling
* One-to-many relationships
* Collaborative application design
* Full-stack system architecture

## Future Improvements

* Authentication and authorization
* Rich text editing
* User presence indicators
* Cursor synchronization
* Version history
* File and image attachments
* Redis Pub/Sub
* Distributed WebSocket scaling

## Getting Started

```bash
git clone <repository-url>

cd backend

npm install

npm run dev
```

## License

This project is open source and available under the MIT License.
