import React from 'react';
import './SkeletonCard.css';

const SkeletonCard: React.FC = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-circle"></div>
      <div className="skeleton-line skeleton-line--short"></div>
      <div className="skeleton-line skeleton-line--long"></div>
    </div>
  );
};

export default SkeletonCard;
