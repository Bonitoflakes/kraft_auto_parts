import express from "express";

import { Router as customerRouter } from "./routes/customer.route";
import CustomError, { globalErrorHandler } from "./utils/GlobalErrorHandler";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/health", (req, res) => res.send("Hello World!"));
app.get("/error", (req, res, next) => {
  try {
    throw new CustomError("Test Error Check", 424);
  } catch (error) {
    next(error);
  }
});

app.use("/api/v1/customers", customerRouter);

app.all("*", (req, res, next) => {
  const error = new CustomError(`Can't find ${req.originalUrl} on the server!`, 404);
  next(error);
});

app.use(globalErrorHandler);

const server = app.listen(port, () => {
  try {
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.error(error);
  }
});

// TODO: Graceful Shutdown
// process.on("unhandledRejection", (err: Error) => {
//   console.error(err);
//   server.close(() => {
//     process.exit(1);
//   });
// });
