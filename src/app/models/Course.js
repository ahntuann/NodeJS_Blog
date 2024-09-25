import mongoose from 'mongoose';
import slug from 'mongoose-slug-updater';

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, require: true },
        description: { type: String },
        videoID: { type: String, require: true },
        level: { type: String },
        image: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

export default mongoose.model('Course', Course);
