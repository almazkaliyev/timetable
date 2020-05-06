import React from 'react';
import Skeleton  from 'react-loading-skeleton';
import Card from '../Card';
import CardTitle from '../Card/CardTitle';
import CardInfo from '../Card/CardInfo';
import CardInfoText from '../Card/CardInfoText';

const SkeletonEventListItem = () => {
  return (
    <li>
      <span className="time"><Skeleton width={30} /></span>
      <Card>
        <CardTitle><Skeleton /></CardTitle>
        <CardInfo>
          <CardInfoText><Skeleton width={80} /></CardInfoText>
          <CardInfoText><Skeleton width={30} /></CardInfoText>
        </CardInfo>
      </Card>
    </li>
  );
};

export default SkeletonEventListItem;
