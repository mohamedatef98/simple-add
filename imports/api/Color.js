import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";

export const Colors = new Mongo.Collection("colors");
const ColorSchema = new SimpleSchema({
  color: {
    type: String,
    label: "Color",
    allowedValues: ["red", "green", "blue"],
  },
})
Colors.attachSchema(ColorSchema);
