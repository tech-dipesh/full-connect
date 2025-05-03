import express from 'express';
import { listings } from '../data/listings';
const router = express.Router();

router.get('/', (_, res) => res.json(listings));
router.get('/:id', (req, res) => {
  const item = listings.find(l => l.id === req.params.id);
  item ? res.json(item) : res.status(404).send('Not found');
});

export default router;
