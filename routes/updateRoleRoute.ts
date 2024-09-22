import express, { type Request, type Response } from 'express';
import updateRole from '../../service/updateRole.js';
const router = express.Router();
// This API route is a GET Route for retrieving all the feedback
router.get('/', (req: Request, res: Response) => {
  console.info(`${req.method} request received for role update`);
  updateRole.getUpdateRole().then((data: any) => res.json(data));
});

// This API route is a POST Route for a new piece of feedback
router.post('/', async (req: Request, res: Response) => {
  const { role_id, title, salary, department_id } = req.body;
  if (req.body) {
    await updateRole.addUpdateRole(role_id, title, salary, department_id);
    res.json(`Feedback role updated successfully`);
  } else {
    res.send('Error in updating role');
  }
});

export default router;