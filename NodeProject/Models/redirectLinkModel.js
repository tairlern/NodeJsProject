import mongoose from "mongoose";

const redirectLinkSchema = mongoose.Schema({
    urlShort: {
        type: String,
        required: true,
        default: "url def"
    },
    LongLinkId:{
        type: Number,
        required: true,
    }
});

export default mongoose.model("redirectLink", redirectLinkSchema);
