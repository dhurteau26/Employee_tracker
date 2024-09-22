import express, { type Request, type Response } from 'express';
import addDepRoutes from '../../service/addDepartment.js';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  console.info(`${req.method} request received for department`);
  addDepRoutes.getDepartment().then((data: any) => res.json(data));
});


router.post('/', async (req: Request, res: Response) => {
  const { id, name } = req.body;
  if (req.body) {
    await addDepRoutes.addDepartment(id, name);
    res.json(`Department added successfully`);
  } else {
    res.send('Error in adding department');
  }
});

export default router;