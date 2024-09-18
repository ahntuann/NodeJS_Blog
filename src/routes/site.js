import express from 'express';
import siteController from '../app/controllers/SiteControllers.js'

const router = express.Router();

router.use('/search', siteController.search);
router.use('/', siteController.index);

export default router;