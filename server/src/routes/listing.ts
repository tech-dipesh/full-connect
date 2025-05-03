import express from 'express';
import { listings } from '../data/listings';
import { Request, Response } from 'express';
const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
  res.json(listings);
});

router.get('/:id', (req: Request<{ id: string }>, res: Response) => {
  const id = parseInt(req.params.id);
  const item = listings.find(l => l.id === id);
  item ? res.json(item) : res.status(404).send('Not found');
});
export default router;