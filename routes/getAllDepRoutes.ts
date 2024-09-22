import express, { type Request, type Response } from 'express';
import getAllDep from '../../service/getAllDepartments.js';
const router = express.Router();
// This API route is a GET Route for retrieving all the feedback
router.get('/', (req: Request, res: Response) => {
  console.info(`${req.method} request received for department`);
  getAllDep.getAllDep().then((data: any) => res.json(data));
});

// This API route is a POST Route for a new piece of feedback
router.post('/', async (req: Request, res: Response) => {
  const { department_id, name } = req.body;
  if (req.body) {
    await getAllDep.addAllDep(department_id, name);
    res.json(`department added successfully`);
  } else {
    res.send('Error in getting department');
  }
});

export default router;