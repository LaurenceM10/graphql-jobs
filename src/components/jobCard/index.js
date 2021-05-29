import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Styles
import { colors } from 'core/presentation/styles/theme';
import { POPPINS } from 'core/presentation/styles/fonts';

const defaultCompanyLogo =
  'https://pics.freeicons.io/uploads/icons/png/2799012341582884271-512.png';

const ShimmerText = ({ width = 30, height = 16 }) => (
  <View
    style={{
      width,
      height,
      marginBottom: 4,
      borderRadius: 12,
      backgroundColor: '#ddd',
    }}
  />
);

function JobLoadingCard() {
  return (
    <View style={styles.card}>
      <View style={styles.logoContainer}>
        <View style={styles.logo} />
      </View>
      <View style={styles.content}>
        <View>
          <ShimmerText width="80%" height={13} />
          <ShimmerText width="40%" height={12.5} />
        </View>
        <View style={styles.footer}>
          <ShimmerText width={65} height={12.5} />
          <ShimmerText width={65} height={12.5} />
        </View>
      </View>
    </View>
  );
}

function JobCard({ job, onPress }) {
  const { title, company, commitment, locationNames } = job;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={{ uri: company?.logoUrl ?? defaultCompanyLogo }}
          />
        </View>
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.companyName}>{company?.name}</Text>
          </View>
          <View style={styles.footer}>
            <View style={{ flexDirection: 'row' }}>
              <Icon
                size={14}
                name={locationNames ? 'location' : 'home'}
                style={{ marginRight: 4 }}
                color={colors.primaryText}
              />
              <Text style={styles.location}>{locationNames ?? 'Remote'}</Text>
            </View>
            <Text style={styles.commitment}>{commitment?.title}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 345,
    height: 150,
    borderRadius: 15,
    paddingTop: 16,
    paddingBottom: 6,
    paddingHorizontal: 6,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: colors.accentCard,
  },
  logoContainer: {
    flex: 0.2,
    alignItems: 'center',
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#f0f0f0',
  },
  content: {
    flex: 0.8,
    height: '100%',
    paddingHorizontal: 12,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 13,
    fontFamily: POPPINS.medium,
    color: colors.primaryColor,
  },
  companyName: {
    fontSize: 12.5,
    fontFamily: POPPINS.regular,
  },
  location: {
    fontSize: 13,
    fontFamily: POPPINS.light,
  },
  commitment: {
    fontSize: 13,
    fontFamily: POPPINS.light,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default JobCard;
export { JobLoadingCard };
