# Pixcel6 Assignment

## Introduction

This assignment involves creating a single-page application that interacts with a user list API using React.

## Technology Stack

- **Front-End**: React

## Functionalities

The application must support the following functionalities:

1. **Fetch Users**:

   - Fetch user data from the provided API.
   - Display the user list with detailed information.

2. **Pagination with Infinite Scroll**:

   - Implement pagination with infinite scrolling.
   - Display 10 records per page.

3. **Sorting Functionality**:

   - Add sorting functionality for sortable columns such as ID, Name, and Age.

4. **Filtering Functionality**:
   - Implement filtering on fields such as Gender and Country.

## API Details

- **URL**: `https://dummyjson.com/users`
- **Type**: GET
- **Data Type**: JSON
- **Query Parameters**:
  - `limit`: Number of records to fetch.
  - `skip`: Offset to fetch records from / Number of records to skip.

## Example API Request

`http
GET https://dummyjson.com/users?limit=30&skip=0

## How to Clone and Run

1. **Clone the repository:**
   `https://github.com/poojagithub2407/React-Pixel6-Web-Studio-Assignment.git`

2. **Navigate into the project directory:**
   ```cd your-repo-name```

## How to Run

1. **Install dependencies:**
     `npm install`

2. **Start the development server:**
    `npm run dev`

3. **Open your browser and go to:**   
   `http://localhost:5173/` 