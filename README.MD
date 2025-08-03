Book Review Application
A Node.js/Express application for managing book ratings and reviews.
Setup

Install MongoDB: Ensure MongoDB is installed and running locally.
Install Node.js: Ensure Node.js is installed.
Clone the repository:
```
git clone <repository-url>
cd book-review-app
```

Install dependencies:
```
npm install
```

Create .env file, update with your MongoDB URI and JWT secret.

Run the application:
```
npm start
```

Or for development with auto-restart:
```
npm run dev
```


API Endpoints
General Users
```
GET /api/books: Get all books (Task 10)
GET /api/books/isbn/:isbn: Get book by ISBN (Task 11)
GET /api/books/author/:author: Get books by author (Task 12)
GET /api/books/title/:title: Get books by title (Task 13)
GET /api/reviews/:isbn: Get reviews for a book (Task 5)
POST /api/users/register: Register a new user (Task 6)
POST /api/users/login: Login as a registered user (Task 7)
```

Registered Users
```
POST /api/reviews: Add or modify a book review (Task 8, requires JWT)
DELETE /api/reviews/:reviewId: Delete a review (Task 9, requires JWT)
```

Notes

Use MongoDB for data storage.
Authentication is handled via JWT.
Concurrent access is supported via Express and MongoDB.
Axios is used for Promise-based HTTP requests in the bookController.

Testing
Use tools like Postman or cURL to test the API endpoints. Ensure to include the Authorization: Bearer <token> header for authenticated routes.