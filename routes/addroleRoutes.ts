import express, { type Request, type Response } from 'express';
import addRole from '../../service/addRole.js';
const router = express.Router();
// This API route is a GET Route for retrieving all the feedback
router.get('/', (req: Request, res: Response) => {
  console.info(`${req.method} request received for role`);
  addRole.getRole().then((data: any) => res.json(data));
});

// This API route is a POST Route for a new piece of feedback
router.post('/', async (req: Request, res: Response) => {
  const { role_id, title, salary, department_id } = req.body;
  if (req.body) {
    await addRole.addErole(role_id, title, salary, department_id);
    res.json(`role added successfully`);
  } else {
    res.send('Error in adding role');
  }
});

export default router;