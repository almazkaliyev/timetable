import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const SubjectContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin: 8px;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),
              0px 1px 1px 0px rgba(0,0,0,0.14),
              0px 1px 3px 0px rgba(0,0,0,0.12);
  background-color: #424242;
  ${props => props.current ? `
    &::before {
    content: '';
    position: absolute;
    display: block;
    height: 100%;
    width: 4px;
    top: 0;
    left: 0;
    background-color: #aa00ff;
  }` : ''}
`;

const SubjectTime = styled.div``;

const SubjectInfo = styled.div`
  margin-left: 16px;
`;

const Subject = props => {
  const { subject, isCurrent } = props;

  return subject ? (
    <SubjectContainer current={isCurrent}>
      <SubjectTime>
        <Typography variant="subtitle2">{subject.start}</Typography>
        <Typography variant="subtitle2">{subject.end}</Typography>
      </SubjectTime>
      <SubjectInfo>
        <Typography variant="h6">
          {subject.title}
        </Typography>
        <Typography variant="subtitle2">{subject.cabinet}</Typography>
        <Typography variant="subtitle2">{subject.teachers}</Typography>
      </SubjectInfo>
    </SubjectContainer>
  ) : (
    <SubjectContainer>
      <SubjectTime>
        <Skeleton width={36} />
        <Skeleton width={36} />
      </SubjectTime>
      <SubjectInfo>
        <Skeleton width={190} />
        <Skeleton width={40} />
        <Skeleton width={160} />
      </SubjectInfo>
    </SubjectContainer>
  );
};

export default Subject;
