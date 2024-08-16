import { endpoint } from '../config';

export const handleGetProducts = async (query: Query) =>
  await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(query)
  })
    .then(res => res.json())
    .catch(err => console.error('Error getting products - ', err));
