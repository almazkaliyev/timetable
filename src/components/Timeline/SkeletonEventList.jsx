import React from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import SkeletonEventListItem from './SkeletonEventListItem';

const SkeletonEventList = () => {
  return (
    <SkeletonTheme color="var(--color-skeleton)" highlightColor="var(--color-skeleton-highlight)">
      <ul className="events">
        {Array(7).fill({}).map(() => <SkeletonEventListItem />)}
      </ul>
    </SkeletonTheme>
  );
};

export default SkeletonEventList;
