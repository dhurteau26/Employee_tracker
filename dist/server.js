// add routes
// add services; get employee, get all employees, add department, get all departments
import express from 'express';
import { connectToDb } from './connections.js';
await connectToDb();
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
