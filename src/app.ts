// application.ts
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const application = express();
const port = process.env.PORT || 3000;

application.use(bodyParser.json());

// Create a new weather data entry
application.get("/", (request: Request, response: Response) => {
  return response.status(200).json({ weather: "Its sunny outside"})
});

application.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
