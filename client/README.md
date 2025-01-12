# Installation Process

To install the client application, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/yourrepository.git
    ```
2. Navigate to the client directory:
    ```sh
    cd yourrepository/client
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Start the application:
    ```sh
    npm start
    ```

# API Documentation

## Authentication API

### `POST /api/auth/login`
- **Description**: Authenticates a user and returns a token.
- **Request Body**:
    ```json
    {
        "username": "user@example.com",
        "password": "password123"
    }
    ```
- **Response**:
    ```json
    {
        "token": "your_jwt_token"
    }
    ```

### `POST /api/auth/register`
- **Description**: Registers a new user.
- **Request Body**:
    ```json
    {
        "username": "user@example.com",
        "password": "password123",
        "name": "John Doe"
    }
    ```
- **Response**:
    ```json
    {
        "message": "User registered successfully"
    }
    ```

## User API

### `GET /api/user/profile`
- **Description**: Retrieves the profile of the authenticated user.
- **Headers**:
    ```json
    {
        "Authorization": "Bearer your_jwt_token"
    }
    ```
- **Response**:
    ```json
    {
        "username": "user@example.com",
        "name": "John Doe",
        "email": "user@example.com"
    }
    ```

### `PUT /api/user/profile`
- **Description**: Updates the profile of the authenticated user.
- **Headers**:
    ```json
    {
        "Authorization": "Bearer your_jwt_token"
    }
    ```
- **Request Body**:
    ```json
    {
        "name": "John Doe",
        "email": "user@example.com"
    }
    ```
- **Response**:
    ```json
    {
        "message": "Profile updated successfully"
    }
    ```

## Data API

### `GET /api/data`
- **Description**: Retrieves data for the authenticated user.
- **Headers**:
    ```json
    {
        "Authorization": "Bearer your_jwt_token"
    }
    ```
- **Response**:
    ```json
    {
        "data": [...]
    }
    ```

### `POST /api/data`
- **Description**: Submits new data for the authenticated user.
- **Headers**:
    ```json
    {
        "Authorization": "Bearer your_jwt_token"
    }
    ```
- **Request Body**:
    ```json
    {
        "data": {...}
    }
    ```
- **Response**:
    ```json
    {
        "message": "Data submitted successfully"
    }
    ```
