import React from 'react';
import { View } from 'react-native';

// Components
import JobsCarousel from 'components/jobsCarousel';
import { JobLoadingCard } from 'components/jobCard';

import { useLatestJobs } from 'repositories/jobs';

function LatestJobs() {
  const { jobs, loading } = useLatestJobs();

  if (loading) {
    return (
      <View style={{ marginBottom: 32 }}>
        <JobLoadingCard />
      </View>
    );
  }

  return <JobsCarousel jobs={jobs} />;
}

export default LatestJobs;
