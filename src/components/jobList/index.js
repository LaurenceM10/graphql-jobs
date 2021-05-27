import React, { useState } from 'react';
import { FlatList } from 'react-native';

import Padding from 'components/shared/padding';
import JobCard, { JobLoadingCard } from 'components/jobCard';

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
  const renderItem = ({ item }) => <JobCard job={item} />;

  return (
    <FlatList
      data={jobs}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
    />
  );
}

export default JobList;
export { JobListLoading };
