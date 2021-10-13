import mongoose from "mongoose";

// mongoose.Document has all the properties like _id and the custom properties we defined in schema
export interface IgamesDocument extends mongoose.Document {
  name: string;
  image: string;
  reviews: string;
  reviewCount: string;
  link: string;
}

const gamesSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true, unique: true },
  reviews: { type: String, required: true, unique: true },
  reviewCount: { type: String, required: true, unique: true },
  link: { type: String, required: true, unique: true },
});

const gamesModel = mongoose.model<IgamesDocument>("games", gamesSchema);

export default gamesModel;
