import React from 'react';

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(167,139,250,0.1),transparent_50%)]" />
    </div>
  );
};