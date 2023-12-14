# Getting Started with Project

This project is built with help of the follwoing:

**Langauage** : *Javascript*

**Framework** : *NodeJS & Express*

**Database** : *MongoDB(Atlas)*

**Developer** : *Shashank Tyagi*

### Steps To Be Followed

##### Step 1 - ***Clone the project using following command :***
    git clone <repo_url>

##### Step 2 - ***Setup your .env file by adding two keys in it :***

    MONGO_CONNECTION_URL =

    SECRET_KEY =

    PORT_NUMBER = 

    LOGIN_SOURCE = 

##### ***Step 3 - In the project directory, run:***
    1. npm install (this install all the required node pacakages)
    2. npm run start (this runs your server locally on port 8800)



## API Reference

#### 1. Register New User

```http
POST /api/v1/register
```

| Parameter | Type     | 
| :-------- | :------- |
| `body` | `JSON` |
    "userName" : "Sample User",
    "password" : "Sample Password",
    "email" : "sample123@gmail.com",
    "isAdmin" : false

#### 2. Login User

```http
POST /api/v1/login
```

| Parameter | Type     | 
| :-------- | :------- |
| `body` | `JSON` |
    "email" : "sample123@gmail.com",
    "password" : "Sample Password",

**Headers** 

*login-source* : LOGIN_SOURCE_KEY

#### 3. Add An Article

```http
POST /api/v1/article
```

| Parameter | Type     | 
| :-------- | :------- |
| `body` | `JSON` |

    "title": "Sample Article 1",
    "publisher": "Sample Author",
    "publishedYear": "2023",
    "content": "Sample Summary"



**Headers** 

*token* : Bearer <auth_token>

#### 4. Get User Profile

```http
GET /api/v1/get-profile/:user_id
```

| Parameter | Type     | 
| :-------- | :------- |
| `user_id` | `STRING` |


**Headers** 

*token* : Bearer <auth_token>

#### 5. Get An Article(single book) 

```http
GET /api/v1/article/:article_id
```

| Parameter | Type     | 
| :-------- | :------- |
| `article_id` | `STRING` |


**Headers** 

*token* : Bearer <auth_token>

#### 6. Get All Article (Article List) 

```http
GET /api/v1/articles?page=1&per_page=10
```

| Parameter | Type     | 
| :-------- | :------- |
| `page` | `STRING` |
| `per_page` | `STRING` |

**Headers** 

*token* : Bearer <auth_token>

#### 7. Update An Article
```http
PUT /api/v1/article/:article_id
```

| Parameter | Type     | 
| :-------- | :------- |
| `article_id` | `STRING` |
| `body` | `JSON` |

    "title": "Sample Article Updated",
    "pulisher": "Sample Author Updated",
    "publishedYear": "2023",
    "content": "Sample Updated"

#### 8. Delete An Article
```http
DELETE /api/v1/article/:article_id
```

| Parameter | Type     | 
| :-------- | :------- |
| `article_id` | `STRING` |


**Headers** 

*token* : Bearer <auth_token>


