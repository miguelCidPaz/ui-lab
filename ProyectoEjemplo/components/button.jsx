import React from 'react';

export default function Button({ children }) {
  return (
    <button style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}>
      {children}
    </button>
  );
}
