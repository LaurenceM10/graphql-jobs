import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import Padding from 'components/shared/padding';
import SizedBox from 'components/shared/sizedBox';
import JobCard, { JobLoadingCard } from 'components/jobCard';

import { useNavigation } from '@react-navigation/native';

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
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    const goToDetail = () => navigation.navigate('JobDetail', { job: item });

    return (
      <>
        <JobCard job={item} onPress={goToDetail} />
        <SizedBox height={6} />
      </>
    );
  };

  return (
    <FlatList
      data={jobs}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}
    />
  );
}

JobList.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      company: PropTypes.object,
      commitment: PropTypes.object,
      locationNames: PropTypes.string,
    }),
  ).isRequired,
};

export default JobList;
export { JobListLoading };
