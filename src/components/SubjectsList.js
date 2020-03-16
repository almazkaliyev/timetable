import React from 'react';
import { inTimeRange, isToday } from '../utils/Time';
import Subject from './Subject';

const SubjectsSkeleton = () => {
  const result = [];
  for (let i = 0; i < 8; i++) {
    result.push(<Subject key={i} />);
  }
  return result;
};

const SubjectList = props => {
  const { subjects, index } = props;

  return subjects.length === 0 ? (
    <SubjectsSkeleton />
  ) : (
    <>
      {subjects.map(subject =>
        <Subject
          key={subject.id}
          subject={subject}
          isCurrent={inTimeRange(subject.start, subject.end) && isToday(index + 1)} />)}
    </>
  );
};

export default SubjectList;
