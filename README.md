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

* **URL**: `https://dummyjson.com/users`
* **Type**: GET
* **Data Type**: JSON
* **Query Parameters**:
  - `limit`: Number of records to fetch.
  - `skip`: Offset to fetch records from / Number of records to skip.

## Example API Request

```http
GET https://dummyjson.com/users?limit=10&skip=0 ```
