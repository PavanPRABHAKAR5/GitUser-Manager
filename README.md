# Github User Management

## Backend

### Overview
This project involves building a backend application that interacts with the GitHub API to fetch and manage user data. The backend should be built using Node.js, Express.js, and a relational database.

### API Endpoints
1. **Save GitHub User Data**: Accepts a GitHub username, fetches user details from the GitHub API, and saves them to the database. If the user already exists in the database, it does not call the GitHub API again.
2. **Mutual Followers**: For a given user, finds all users who mutually follow each other and saves them as friends.
3. **Search User Data**: Searches the saved data in the database based on criteria like username, location, etc.
4. **Soft Delete User**: Soft deletes a user record based on the given username.
5. **Update User Data**: Updates fields like "location", "blog", "bio", etc., for a given user in the database.
6. **List Users**: Returns a list of all users from the database, sorted by fields like "public_repos", "public_gists", "followers", "following", "created_at", etc.



### Important Notes
- Submit the code by pushing the repository to GitHub or any hosting platform of your choice. Maintaining a reasonable commit history is recommended.
- Use only Node.js, Express.js, and any relational database.

## Frontend

### Requirements
1. **Initial Page**: Contains an input box to accept a GitHub username and a submit/search button.
2. **Repository List Page**: On submit, displays the list of repositories for the entered username along with some useful user info.
3. **Repository Details Page**: Clicking on any repository shows a page with a description of that repository.
4. **Followers Page**: Near the user info on the repository list page, add a button/link to navigate to a page displaying the followers of the current user.
5. **Follower's Repository List**: Clicking on any follower displays their repository list page.
6. **Navigation**: Provide a way to navigate back to the repository list page with the input box.

### Design
- The design for the repository list and follower pages is flexible and can be kept simple.
### Deployment



