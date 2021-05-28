import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import Padding from 'components/shared/padding';
import Section from 'components/shared/section';
import SizedBox from 'components/shared/sizedBox';
import TextGradient from 'components/shared/textGradient';
import Icon from 'react-native-vector-icons/Ionicons';

import { POPPINS } from 'core/presentation/styles/fonts';
import { colors } from 'core/presentation/styles/theme';

function JobDetailScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <ScrollView>
          <View
            style={{
              height: 250,
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: '#eee',
            }}>
            <Image
              style={{
                width: 65,
                height: 65,
                backgroundColor: '#fff',
                borderRadius: 14,
              }}
              source={{
                uri: 'https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png',
              }}
            />
            <SizedBox height={18} />
            <TextGradient
              containerStyles={{ textAlign: 'center', maxWidth: '80%' }}
              style={{
                fontFamily: POPPINS.semibold,
                fontSize: 18,
                marginVertical: 4,
              }}>
              Senior Software Ingineer
            </TextGradient>

            <SizedBox height={20} />
            <View
              style={{
                width: '75%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
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
                  Full Time
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
                  <Icon
                    size={14}
                    name={'location'}
                    color={colors.primaryColor}
                  />
                  <SizedBox width={6} />
                  San Francisco
                </Text>
              </View>
            </View>
          </View>
          <Padding paddingHorizontal={16} paddingVertical={10}>
            <Section title="Overview" />
          </Padding>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: '#FAFAFA', flex: 1 },
  container: { flex: 1, backgroundColor: '#f4f4f8' },
});

export default JobDetailScreen;
