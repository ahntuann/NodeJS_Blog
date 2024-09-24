import express from 'express';
import coursesController from '../app/controllers/CoursesControllers.js';

const router = express.Router();
router.get('/:slug', coursesController.show);

export default router;
