"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const listings_1 = require("../data/listings");
const router = express_1.default.Router();
router.get('/', (_, res) => res.json(listings_1.listings));
router.get('/:id', (req, res) => {
    const item = listings_1.listings.find(l => l.id === req.params.id);
    item ? res.json(item) : res.status(404).send('Not found');
});
exports.default = router;
