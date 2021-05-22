import React from 'react';
import { View } from 'react-native';
import JobsCarousel from 'components/jobsCarousel';
import { useLatestJobs } from 'repositories/jobs';
import { colors } from '../../core/presentation/styles/colors';

function JobsLoading() {
  return (
    <View
      style={{
        height: 190,
        width: 345,
        marginVertical: 0,
        marginHorizontal: 7,
        borderRadius: 15,
        backgroundColor: colors.accentCard,
        alignSelf: 'center',
        margin: 'auto',
        flexDirection: 'column',
        padding: 16,
      }}
    />
  );
}

function LatestJobs() {
  const { jobs, loading } = useLatestJobs();

  if (loading) {
    return <JobsLoading />;
  }

  return <JobsCarousel jobs={jobs} />;
}

export default LatestJobs;
