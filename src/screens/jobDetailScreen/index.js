import React, { useCallback } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  LayoutAnimation,
} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';

import Markdown from 'components/markdown';
import Padding from 'components/shared/padding';
import TopBar from 'screens/jobDetailScreen/topBar';
import JobHeader from 'screens/jobDetailScreen/jobHeader';
import JobActions from 'screens/jobDetailScreen/jobActions';

import { useApplyToJob, useJobDetail, useSaveJob } from 'logic/jobs';

const SafeAreaViewAnimated = Animated.createAnimatedComponent(SafeAreaView);

function JobDetailScreen({ route, navigation }) {
  const { job } = route.params;
  const { id, title, slug, company, commitment, locationNames } = job;
  const {
    state: { detail },
  } = useJobDetail({
    jobSlug: slug,
    companySlug: company?.slug,
  });
  const [apply] = useApplyToJob(detail?.applyUrl);
  const [save] = useSaveJob(job);
  const translateY = useSharedValue(0);

  const handleScroll = useAnimatedScrollHandler(event => {
    translateY.value = event.contentOffset.y;
  });

  const headerAnimatedStyles = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateY.value,
      [0, 100],
      [1, 0],
      Extrapolate.CLAMP,
    );

    return {
      opacity,
    };
  });

  const goBack = useCallback(() => navigation.goBack(), [navigation]);

  const renderContent = () => {
    if (detail) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

      return <Markdown>{detail?.description}</Markdown>;
    }
  };

  return (
    <SafeAreaViewAnimated style={styles.screen}>
      <Animated.ScrollView
        onScroll={handleScroll}
        stickyHeaderIndices={[0]}
        style={styles.container}
        showsVerticalScrollIndicator={false}>
        <TopBar onSave={save} goBack={goBack} animatedStyle={headerAnimatedStyles} />
        <JobHeader
          id={id}
          title={title}
          location={locationNames}
          logoUrl={company?.logoUrl}
          commitment={commitment.title}
        />
        <View style={styles.content}>
          <Padding paddingVertical={18} paddingHorizontal={32}>
            {renderContent()}
          </Padding>
        </View>
      </Animated.ScrollView>
      <JobActions onApply={apply} />
    </SafeAreaViewAnimated>
  );
}

const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  screen: { backgroundColor: '#FAFAFA', flex: 1 },
  container: { flex: 1, backgroundColor: '#f4f4f8' },
  content: {
    minHeight: screenHeight - 250,
    backgroundColor: '#fff',
    borderTopEndRadius: 45,
    borderTopStartRadius: 45,
  },
});

export default JobDetailScreen;
