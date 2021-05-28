import React, { useState } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';

// Components
import JobCard from 'components/jobCard';
import Carousel, { Pagination } from 'react-native-snap-carousel';

// Styles
import { colors } from 'core/presentation/styles/theme';

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
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({ item, index }) => <JobCard key={index} job={item} />;

  const { width } = useWindowDimensions();
  return (
    <View>
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
