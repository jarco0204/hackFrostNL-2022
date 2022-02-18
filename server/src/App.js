import express from "express";

//Instantiation of main app
const app = express();
let server;

app.use(express.json()); // support json encoded bodies

// Start of the Express Server
export const start = async () => {
  const port = 8000;
  server = app.listen(port, () => {
    console.log("Express API server is listening on port 8000");
  });
};
