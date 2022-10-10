# Biome optimus
<p align="center">
  <img  width=300px src="https://user-images.githubusercontent.com/80592317/194906067-b2c1f216-2736-4937-a110-9ebb6a7fa9fd.png"

</p>
<h1 align="center">
  Biome optimus
</h1>
<div align="center">

  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white" height="30px"/>
  <img src="https://i.ibb.co/WHZ1BCR/cypress.png" height="30px"/>

  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<br/>

# Description
<p align="justify">
<b>Biome Optimus </b> is an application for the control of preventive and corrective maintenance of medical equipment in companies that provide this service.

</p>

</br>

## Features


-   Create new maintenance
-   Get all maintenance
-   Create new client
-   Create new observations 
-   Get observations
-   Edit maintenance                                                                               

</br>

## API Reference

### RECOMMENDATIONS

### Create a recommendation

```http
POST /recommendation
```

#### Request:

####

| Body   | Type       | Description             |
| :----- | :--------- | :---------------------- |
| `name`           | `string` | **Required**. recommendation name      |
| `youtubeLink`         | `string` | **Required**. recommendation url          |

`youtubeLinkRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;`

#


### Get recommendations

```http
GET /recommendations
```
#### Response:

```json
[
  {
    "id": 3,
    "name": "Numb",
    "youtubeLink": "https://www.youtube.com/watch?v=mRXKnG2eugU",
    "score": 0
  },
  {
    "id": 2,
    "name": "Feels Like Home (Radio Edit)",
    "youtubeLink": "https://www.youtube.com/watch?v=5CY1vbxP4Jo",
    "score": 0
  },
  {
    "id": 1,
    "name": "All That Really Matters",
    "youtubeLink": "https://www.youtube.com/watch?v=3gxxW5NqICc",
    "score": 0
  }
]
```

#

### Get a recommendation by id

```http
GET /recommendations/:id
```
#### Request:

| Params      | Type      | Description           |
| :---------- | :-------- | :-------------------- |
| `id` | `number` | **Required**.|

####

#### Response:

```json
{
  "id": 1,
  "name": "All That Really Matters",
  "youtubeLink": "https://www.youtube.com/watch?v=3gxxW5NqICc",
  "score": 0
}
```

#

### Post a upvote for a recommendation

```http
POST /recommendations/:id/upvote
```
#### Request:

| Params      | Type      | Description           |
| :---------- | :-------- | :-------------------- |
| `id` | `number` | **Required**.|

####

#

### Post a downvote for a recommendation

```http
POST /recommendations/:id/downvote
```
#### Request:

| Params      | Type      | Description           |
| :---------- | :-------- | :-------------------- |
| `id` | `number` | **Required**.|

####

#

### Get a top musics recommendations - based in amount params - with decreasing score

```http
GET /recommendations/top/:amount
```
#### Request:

| Params      | Type      | Description           |
| :---------- | :-------- | :-------------------- |
| `amount` | `number` | **Required**.|

####

`example = /recommendations/top/2`

#### Response:

```json
[
  {
    "id": 1,
    "name": "All That Really Matters",
    "youtubeLink": "https://www.youtube.com/watch?v=3gxxW5NqICc",
    "score": 1
  },
  {
    "id": 2,
    "name": "Feels Like Home (Radio Edit)",
    "youtubeLink": "https://www.youtube.com/watch?v=5CY1vbxP4Jo",
    "score": 0
  }
]
```

#

### Get a random recommendation music

```http
POST /recommendations/random
```

#### Response:

```json
{
  "id": 1,
  "name": "All That Really Matters",
  "youtubeLink": "https://www.youtube.com/watch?v=3gxxW5NqICc",
  "score": 1
}
```

#


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

<b>Back-end .env file</b>

`DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName?schema=public`

`PORT = number #recommended:5000`

`MODE=test`

<b>Back-end .env.test file</b>

`DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName-tests?schema=public`

`PORT = number #recommended:5000`

`MODE=test`

<b>Front-end .env file</b>

`REACT_APP_API_BASE_URL=http://`


</br>

## Run Locally

Clone the project

```bash
  git clone https://github.com/jogoce18/-sing-me-a-song-testes.git
```

Go to the project directory

```bash
  cd sing-me-a-song-main  /
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

</br>


## Tests Back-end

### Integration and unitary tests

Go to the back-end project directory

```bash
  cd sing-me-a-song-main/back-end
```
Install dependencies

```bash
  npm install
```

Install prisma database

```bash
  npx prisma migrate dev
```

For run only integration tests

```bash
  npm run test:tests
```

For run only unitary tests

```bash
  npm run test:unit
```

For run both tests: unitary and integration

```bash
  npm run test
```

## Tests Front-end

### E2E tests with cypress

Go to the back-end project directory and up the server

```bash
  cd sing-me-a-song-main/back-end
```
```bash
  npm run dev
```

Go to the front-end project directory

```bash
  cd sing-me-a-song-main/front-end
```
Install dependencies

```bash
  npm install
```

Up the front-end application 

```bash
  npm start
```

Open cypress graphic interface

```bash
  npx cypress open
```

## Lessons Learned

In this project I learned a lot about unitary, integration and E2E tests

</br>

