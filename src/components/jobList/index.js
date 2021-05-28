import React from 'react';
import { FlatList } from 'react-native';

import Padding from 'components/shared/padding';
import JobCard, { JobLoadingCard } from 'components/jobCard';
import SizedBox from '../shared/sizedBox';

function JobListLoading({ length = 7 }) {
  return Array.from({ length }, (_, i) => {
    return (
      <Padding paddingVertical={3} paddingHorizontal={0} key={i}>
        <JobLoadingCard />
      </Padding>
    );
  });
}

function JobList({ jobs }) {
  const renderItem = ({ item }) => (
    <>
      <JobCard job={item} />
      <SizedBox height={6} />
    </>
  );

  return (
    <FlatList
      data={jobs}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default JobList;
export { JobListLoading };
