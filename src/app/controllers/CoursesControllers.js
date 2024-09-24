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
}

export default new CoursesControllers();
