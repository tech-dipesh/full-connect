import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type Listing = { id: string; title: string; price: number; };
export default function Home() {
  const [data, setData] = useState<Listing[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/listings')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Listings</h1>
      <ul className="space-y-4">
        {data.map(item => (
          <li key={item.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p>${item.price}</p>
            <Link to={`/listing/${item.id}`} className="text-blue-600 underline">View →</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
