import express, { type Request, type Response } from 'express';
import getAllEmp from '../../service/getAllEmployees.js';
const router = express.Router();
// This API route is a GET Route for retrieving all the feedback
router.get('/', (req: Request, res: Response) => {
  console.info(`${req.method} request received for employee`);
  getAllEmp.getAllEmp().then((data: any) => res.json(data));
});

// This API route is a POST Route for a new piece of feedback
router.post('/', async (req: Request, res: Response) => {
  const { id, first_name, last_name, role_id, manager_id } = req.body;
  if (req.body) {
    await getAllEmp.addAllEmp( id, first_name, last_name, role_id, manager_id);
    res.json(`employee found successfully`);
  } else {
    res.send('Error in getting employee');
  }
});

export default router;