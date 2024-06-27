Quick Bite !

Quick Bite is a comprehensive food ordering application designed to provide a seamless experience for
both users and administrators. The app includes features for order tracking, user management, and 
integration with external services like Cloudinary and Mailgun.

Table of Contents !
  -Features
  -Technologies Used
  -Usage
  -Seeding Data
  -API Endpoints
  -Contributing

Features !
  -User Authentication and Management
  -Admin Dashboard for managing food items, orders, and users
  -Cloudinary integration for image uploads
  -Mailgun integration for email notifications
  -Order tracking for users
  -Automatic food seeding when inventory reaches zero

Technologies Used !
  -Backend: Node.js, Express
  -Database: MongoDB
  -Authentication: JWT
  -Image Uploads: Cloudinary
  -Email Notifications: Mailgun
  -Frontend: React, Ant Design

Usage !
  -Seeding Data
    -The application includes automatic food seeding functionality. When the food inventory reaches zero,
    it will be automatically replenished. You can manually seed the initial data using the following command:
    npm run seed

API Endpoints !
  Here are some of the main API endpoints available in Quick Bite:

  User Endpoints
    -POST /api/users/login: Authenticate a user
    -POST /api/users/register: Register a new user
    -GET /api/users/profile: Get user profile (requires authentication)
    -PUT /api/users/profile: Update user profile (requires authentication)

  Admin Endpoints  -(email: steven@gmail.com, password: 12345)
    -GET /api/admin/users: Get all users (requires admin authentication)
    -GET /api/admin/orders: Get all orders (requires admin authentication)
    -POST /api/admin/food: Add new food item (requires admin authentication)
    -PUT /api/admin/food/:id: Update food item (requires admin authentication)
    -DELETE /api/admin/food/:id: Delete food item (requires admin authentication)

  Order Endpoints
    -POST /api/orders: Place a new order
    -GET /api/orders/:id: Get order details
    -GET /api/orders/user/:userId: Get all orders for a user

Contributing
We welcome contributions to Quick Bite! To contribute, follow these steps:

  -Fork the repository
  -Create a new branch (git checkout -b feature-branch)
  -Make your changes
  -Commit your changes (git commit -m 'Add some feature')
  -Push to the branch (git push origin feature-branch)
  -Open a Pull Request
  
