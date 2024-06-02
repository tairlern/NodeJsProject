import mongoose from "mongoose";

const LinksSchema = mongoose.Schema({
    originalUrl: {
        type: String,
        required: true,
        default: "url def"
    },
});

export default mongoose.model("links", LinksSchema);
