"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListingById = exports.getAllListings = void 0;
const listings_1 = require("../data/listings");
const getAllListings = (_req, res) => {
    res.json(listings_1.listings);
};
exports.getAllListings = getAllListings;
const getListingById = (req, res) => {
    const id = parseInt(req.params.id);
    const listing = listings_1.listings.find((item) => item.id === id);
    if (!listing)
        return res.status(404).json({ error: 'Listing not found' });
    res.json(listing);
};
exports.getListingById = getListingById;
