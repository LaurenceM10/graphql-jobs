import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

function CardLoading() {
  return (
    <View style={{ flexDirection: 'row' }}>
      {Array.from({ length: 3 }, (_, index) => (
        <View style={[styles.card, styles.placeholderCard]} key={index}>
          <View
            style={[
              styles.imageContainer,
              styles.image,
              { backgroundColor: '#eaeaea' },
            ]}
          />
          <View style={styles.placeholderText} />
        </View>
      ))}
    </View>
  );
}
function CompanyCard({ company }) {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: company?.logoUrl }} style={styles.image} />
      </View>
      <Text style={styles.title}>{company?.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 140,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: 16,
    marginRight: 4,
    paddingVertical: 16,
    backgroundColor: 'rgba(200, 200, 200, .2)',
    borderRadius: 14,
  },
  imageContainer: {
    backgroundColor: '#EEE',
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: { width: 55, height: 55 },
  placeholderCard: {
    backgroundColor: 'rgba(225, 225, 225, .2)',
  },
  title: { fontSize: 16, color: '#555' },
  placeholderText: {
    width: 100,
    height: 18,
    backgroundColor: '#eaeaea',
    borderRadius: 12,
  },
});

export { CompanyCard, CardLoading };
