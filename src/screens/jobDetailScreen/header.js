import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

import SizedBox from 'components/shared/sizedBox';
import Icon from 'react-native-vector-icons/Ionicons';
import TextGradient from 'components/shared/textGradient';

import { colors } from 'core/presentation/styles/theme';
import { POPPINS } from 'core/presentation/styles/fonts';

function Header(props) {
  const { logoUrl, title, location, commitment } = props;

  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={{
          uri: logoUrl,
        }}
      />
      <SizedBox height={18} />
      <TextGradient
        style={styles.jobTitle}
        containerStyles={styles.textGradientContainer}>
        {title}
      </TextGradient>
      <SizedBox height={20} />
      <View style={styles.labelContainer}>
        <View
          style={{
            borderRadius: 12,
            paddingVertical: 8,
            paddingHorizontal: 18,
            backgroundColor: colors.primaryColor,
          }}>
          <Text
            style={{
              fontFamily: POPPINS.light,
              fontSize: 14,
              color: '#FFF',
            }}>
            <Icon size={14} name={'time'} color="#FFF" />
            <SizedBox width={6} />
            {commitment}
          </Text>
        </View>
        <View
          style={{
            borderRadius: 12,
            paddingVertical: 8,
            paddingHorizontal: 18,
            backgroundColor: 'rgba(0, 123,255, .06)',
          }}>
          <Text
            style={{
              fontFamily: POPPINS.light,
              fontSize: 14,
              color: colors.primaryColor,
            }}>
            <Icon size={14} name={'location'} color={colors.primaryColor} />
            <SizedBox width={6} />
            {location ?? 'Remote'}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
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
