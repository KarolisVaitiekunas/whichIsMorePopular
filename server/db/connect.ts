import mongoose from "mongoose";
import log from "../logger";
const URI = String(process.env.DB_URI);

const connect = () => {
  return mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      log.info("Database connected");
    })
    .catch((error) => {
      log.error(error);
      process.exit(1);
    });
};

export default connect;
