import express, { request, response } from "express";

const app = express();

app.get("/", (request, response) => {

    return response.json({message: "Hello World"})
});

app.post("/", (request, response) => {

    return response.json({message: "Sucess Data Storage"})
});

app.listen(3333, () => console.log("Server Runnin"));