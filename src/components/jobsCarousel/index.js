import React, { useState } from 'react';
import { View, useWindowDimensions, StyleSheet, Text, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

// Styles
import { colors } from 'core/presentation/styles/colors';
import { POPPINS } from '../../core/presentation/styles/fonts';
import SizedBox from '../shared/sizedBox';

function CarouselPagination({ activeSlide, dotsLength }) {
  return (
    <View style={styles.paginationContainer}>
      <Pagination
        dotsLength={dotsLength}
        activeDotIndex={activeSlide}
        containerStyle={styles.pagination}
        dotStyle={styles.dot}
        inactiveDotStyle={styles.inactiveDot}
        inactiveDotOpacity={0.2}
        inactiveDotScale={0.6}
      />
    </View>
  );
}

function JobCard({ job }) {
  const { title, company, postedAt, locationNames } = job;

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
      }}>
      <View style={{ flex: 0.8 }}>
        <Text style={{ fontSize: 15, fontFamily: POPPINS.regular }}>
          {title}
        </Text>
      </View>
      <View
        style={{
          flex: 0.5,
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          flexDirection: 'row',
        }}>
        <Image
          style={{
            width: 48,
            height: 48,
            backgroundColor: '#eee',
            borderRadius: 14,
          }}
          source={{ uri: company?.logoUrl }}
        />
        <SizedBox width={12} />
        <View>
          <Text style={{ fontSize: 15, fontFamily: POPPINS.regular }}>
            {company?.name}
          </Text>
          <Text style={{ fontSize: 13, fontFamily: POPPINS.light }}>
            {locationNames ?? 'Remote'}
          </Text>
        </View>
      </View>
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
        layout="default"
        data={jobs}
        renderItem={renderItem}
        onSnapToItem={setActiveSlide}
        sliderWidth={width}
        itemWidth={width - 55}
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
