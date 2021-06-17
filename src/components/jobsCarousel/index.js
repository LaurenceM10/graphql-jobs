import React, { useState } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import PropTypes from 'prop-types';

// Components
import JobCard from 'components/jobCard';
import Carousel, { Pagination } from 'react-native-snap-carousel';

// Styles
import { colors } from 'core/presentation/styles/theme';
import { useNavigation } from '@react-navigation/native';

function CarouselPagination({ activeSlide, dotsLength }) {
  return (
    <View style={styles.paginationContainer}>
      <Pagination
        dotsLength={dotsLength}
        dotStyle={styles.dot}
        inactiveDotScale={0.6}
        inactiveDotOpacity={0.2}
        activeDotIndex={activeSlide}
        containerStyle={styles.pagination}
        inactiveDotStyle={styles.inactiveDot}
      />
    </View>
  );
}

function JobsCarousel({ jobs }) {
  const navigation = useNavigation();
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({ item, index }) => {
    const goToDetail = () => navigation.navigate('JobDetail', { job: item });

    return <JobCard key={index} job={item} onPress={goToDetail} />;
  };

  const { width } = useWindowDimensions();
  return (
    <View testID="JobsCarousel">
      <Carousel
        data={jobs}
        layout="default"
        sliderWidth={width}
        itemWidth={width - 55}
        renderItem={renderItem}
        onSnapToItem={setActiveSlide}
      />
      <CarouselPagination activeSlide={activeSlide} dotsLength={jobs.length} />
    </View>
  );
}

JobsCarousel.propTypes = {
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

const styles = StyleSheet.create({
  paginationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagination: {
    flex: 1,
    margin: 0,
    width: 100,
    position: 'relative',
  },
  dot: {
    width: 20,
    height: 7,
    margin: 0,
    borderRadius: 5,
    backgroundColor: colors.primaryColor,
  },
  inactiveDot: {
    width: 10,
    height: 10,
    margin: 0,
    borderRadius: 5,
    backgroundColor: colors.primaryText,
  },
});

export default JobsCarousel;
