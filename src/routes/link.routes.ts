import { Router } from 'express';

import { linkController } from '../controllers';

const router = Router();

//Create
router.post('/', linkController.create);

//Get all
router.get('/', linkController.getAll);

//Set Scanned
router.post('/:id/scan', linkController.setScanned);

export const linkRouter = router;
