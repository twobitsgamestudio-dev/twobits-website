import { useState } from 'react';
import { useOutlet } from 'react-router-dom';

/** Keeps the outgoing route rendered while its exit transition plays. */
export function FrozenOutlet() {
  const outlet = useOutlet();
  const [frozen] = useState(outlet);
  return frozen;
}