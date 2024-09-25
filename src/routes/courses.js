import express from 'express';
import coursesController from '../app/controllers/CoursesControllers.js';

const router = express.Router();
router.get('/create', coursesController.create);
router.post('/store', coursesController.store);
router.get('/:slug', coursesController.show);

export default router;
