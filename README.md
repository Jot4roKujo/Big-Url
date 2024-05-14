# Big Url: A FullStack URL Shortener

This is a FullStack URL shortener service like bit.ly. The API service can take a long URL and convert it to a shorter URL. MongoDB is used as the database. The long URL, short URL, and number of clicks on short URL are stored in the database. When a long URL that is already stored in the database is passed again, it returns the older shortened URL.

## Screenshots

<p align="center">
  <img src="/views/assets/img/20240514_18330129.png"/>
</p>

<p align="center">
  <img src="/views/assets/img/screenshot2.jpg"/>
</p>

## Run Locally

Clone the project

```bash
  git clone https://github.com/Jot4roKujo/big-url
```

Go to the project directory

```bash
  cd big-url
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file

| Variable    | Description             |
| :---------- | :---------------------- |
| `MONGO_URI` | MongoDB URI             |
| `BASE`      | Base URL for Shortening |
