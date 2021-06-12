import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

import SizedBox from 'components/shared/sizedBox';
import Icon from 'react-native-vector-icons/Ionicons';
import TextGradient from 'components/shared/textGradient';

import { colors } from 'core/presentation/styles/theme';
import { POPPINS } from 'core/presentation/styles/fonts';
import { SharedElement } from 'react-navigation-shared-element';

const defaultCompanyLogo =
  'https://pics.freeicons.io/uploads/icons/png/2799012341582884271-512.png';

function Feature(props: { location: any }) {
  return (
    <View
      style={{
        borderRadius: 12,
        paddingVertical: 8,
        paddingHorizontal: 18,
        backgroundColor: 'rgba(0, 123,255, .06)',
        flexDirection: 'row',
      }}>
      <Icon size={14} name={'location'} color={colors.primaryColor} />
      <SizedBox width={6} />
      <Text
        style={{
          fontFamily: POPPINS.light,
          fontSize: 14,
          color: colors.primaryColor,
        }}>
        {props.location ?? 'Remote'}
      </Text>
    </View>
  );
}

function Header(props) {
  const { id, logoUrl, title, location, commitment } = props;

  return (
    <View style={styles.header}>
      <SharedElement id={`${id}${logoUrl}`}>
        <Image
          style={styles.logo}
          source={{
            uri: logoUrl ?? defaultCompanyLogo,
          }}
        />
      </SharedElement>
      <SizedBox height={18} />
      <SharedElement id={`${id}${title}`}>
        <TextGradient
          style={styles.jobTitle}
          containerStyles={styles.textGradientContainer}>
          {title}
        </TextGradient>
      </SharedElement>
      <SizedBox height={20} />
      <View style={styles.labelContainer}>
        <Feature location={location} />
        <View
          style={{
            borderRadius: 12,
            paddingVertical: 8,
            paddingHorizontal: 18,
            backgroundColor: colors.primaryColor,
            flexDirection: 'row',
          }}>
          <Icon size={14} name={'time'} color="#FFF" />
          <SizedBox width={6} />
          <Text
            style={{
              fontFamily: POPPINS.light,
              fontSize: 14,
              color: '#FFF',
            }}>
            {commitment}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 65,
    height: 65,
    backgroundColor: '#fff',
    borderRadius: 14,
  },
  jobTitle: {
    fontFamily: POPPINS.semibold,
    fontSize: 18,
    marginVertical: 4,
  },
  textGradientContainer: { textAlign: 'center', maxWidth: '80%' },
  labelContainer: {
    width: '75%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Header;
