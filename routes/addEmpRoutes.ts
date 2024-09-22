import express, { type Request, type Response } from 'express';
import addEmployee from '../../service/addEmployee.js';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  console.info(`${req.method} request received for employee`);
  addEmployee.getEmp().then((data: any) => res.json(data));
});


router.post('/', async (req: Request, res: Response) => {
  const { id, first_name, last_name, role, manager_id } = req.body;
  if (req.body) {
    await addEmployee.addEmp(id, first_name, last_name, role, manager_id);
    res.json(`Feedback added successfully`);
  } else {
    res.send('Error in adding feedback');
  }
});

export default router;