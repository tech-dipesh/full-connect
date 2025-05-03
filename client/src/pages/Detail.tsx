import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ListingDetail() {
  const { id } = useParams();
  const [listing, setListing] = useState<any>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/listings/${id}`)
      .then(res => res.json())
      .then(setListing);
  }, [id]);

  if (!listing) return <div>Loading...</div>;
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{listing.title}</h1>
      <p className="text-green-600">${listing.price}</p>
      <p>{listing.description}</p>
      <Link to="/" className="text-blue-500">← Back</Link>
    </div>
  );
}
