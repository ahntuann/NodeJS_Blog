// Using ES6 imports
import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose
            .connect('mongodb://127.0.0.1:27017/f8_education_dev')
            .then(() => console.log('Connect successfully!'));
    } catch (error) {
        console.log('Connect fail!');
    }
}

export { connect };
