import * as React from 'react';
import { render } from '@testing-library/react-native';
import Header from '../../../src/screens/homeScreen/header';

describe('<Header />', () => {
  test('should render header correctly', () => {
    const { toJSON } = render(<Header />);

    expect(toJSON()).toMatchInlineSnapshot(`
      <View
        style={
          Object {
            "flexDirection": "row",
            "justifyContent": "space-between",
          }
        }
      >
        <View
          style={
            Object {
              "flexDirection": "column",
              "width": "70%",
            }
          }
        >
          <Text
            style={
              Object {
                "color": "#333",
                "fontFamily": "PoppinsLight-l4Zw",
                "fontSize": 28,
                "letterSpacing": 1,
              }
            }
          >
            Find Your
          </Text>
          <RNLinearTextGradient
            accessible={true}
            allowFontScaling={true}
            colors={
              Array [
                4278221823,
                4278242559,
              ]
            }
            ellipsizeMode="tail"
            forwardedRef={null}
            gradientEnd={
              Object {
                "x": 1,
                "y": 0,
              }
            }
            gradientStart={
              Object {
                "x": 0,
                "y": 0,
              }
            }
            locations={
              Array [
                0,
                1,
              ]
            }
            style={
              Array [
                Object {
                  "color": "gray",
                },
                Object {},
              ]
            }
          >
            <Text
              style={
                Object {
                  "fontFamily": "PoppinsSemibold-8l8n",
                  "fontSize": 34,
                  "letterSpacing": 1.5,
                }
              }
            >
              Perfect Job
            </Text>
          </RNLinearTextGradient>
        </View>
      </View>
    `);
  });
});
