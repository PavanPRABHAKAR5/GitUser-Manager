# AutonomizeAI Server

## Installation Process

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/AutonomizeAI.git
    cd AutonomizeAI/server
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory and add the necessary environment variables.

4. **Start the server:**
    ```sh
    npm start
    ```

## API Endpoints

### 1. `GET /api/v1/resource`
- **Description:** Fetches a list of resources.
- **Response:**
  ```json
  [
     {
        "id": "1",
        "name": "Resource 1",
        "description": "Description of Resource 1"
     },
     ...
  ]
  ```

### 2. `POST /api/v1/resource`
- **Description:** Creates a new resource.
- **Request Body:**
  ```json
  {
     "name": "New Resource",
     "description": "Description of the new resource"
  }
  ```
- **Response:**
  ```json
  {
     "id": "2",
     "name": "New Resource",
     "description": "Description of the new resource"
  }
  ```

### 3. `GET /api/v1/resource/:id`
- **Description:** Fetches a single resource by ID.
- **Response:**
  ```json
  {
     "id": "1",
     "name": "Resource 1",
     "description": "Description of Resource 1"
  }
  ```

### 4. `PUT /api/v1/resource/:id`
- **Description:** Updates an existing resource by ID.
- **Request Body:**
  ```json
  {
     "name": "Updated Resource",
     "description": "Updated description of the resource"
  }
  ```
- **Response:**
  ```json
  {
     "id": "1",
     "name": "Updated Resource",
     "description": "Updated description of the resource"
  }
  ```

### 5. `DELETE /api/v1/resource/:id`
- **Description:** Deletes a resource by ID.
- **Response:**
  ```json
  {
     "message": "Resource deleted successfully"
  }
  ```
