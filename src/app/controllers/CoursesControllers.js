import Course from '../models/Course.js';
import { mongooseToObject } from '../../util/mongoose.js';

class CoursesControllers {
    // [GET] /courses/:slug
    show(req, res) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(() => {
                console.log('hehe');
            });
    }

    // [GET] /courses/create
    create(req, res) {
        res.render('courses/create');
    }

    // [POST] /courses/store
    store(req, res) {
        // res.json(req.body);
        const formData = req.body;
        formData.image = 'https://files.fullstack.edu.vn/f8-prod/courses/1.png';
        const course = new Course(formData);

        course
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }
}

export default new CoursesControllers();
