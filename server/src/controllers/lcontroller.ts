import { Request, Response } from 'express'
import { listings } from '../data/listings'

export const getAllListings = (_req: Request, res: Response) => {
  res.json(listings)
}

export const getListingById = (req: Request, res: Response) => {
  // const id = parseInt(req.params.id)
  const id = parseInt(req.params.id)
  // const listing = listings.find((item) => item.id === id)
  const listing = listings.find((item) => item.id === id)

  if (!listing) return res.status(404).json({ error: 'Listing not found' })

  res.json(listing)
}
