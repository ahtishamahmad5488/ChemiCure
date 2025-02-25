import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import {ICONS} from '../../Constants/icons';

const HomeScreen = () => {
  const data = [
    {id: 1, name: 'Fusarium', image: require('../../Assets/Icons/data.png')},
    {id: 2, name: 'Fusarium', image: require('../../Assets/Icons/data.png')},
    {id: 3, name: 'Fusarium', image: require('../../Assets/Icons/data.png')},
    {id: 4, name: 'Fusarium', image: require('../../Assets/Icons/data.png')},
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.mainContainer}>
        <Header />

        {/* Greeting Section */}
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Good Morning!</Text>
          <Text style={styles.cropName}>Wheat</Text>
        </View>

        {/* Card Section */}
        <View style={styles.cardContainer}>
          <Image
            source={require('../../Assets/Icons/img.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>
            Revolutionizing in {'\n'} Agriculture with AI {'\n'} Integration
          </Text>
        </View>

        {/* Icons Section */}
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <ICONS.TemperatureIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <ICONS.HumidityIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <ICONS.waterIcon />
          </TouchableOpacity>
        </View>

        {/* Recently Viewed Section */}
        <View style={styles.recentHeader}>
          <Text style={styles.sectionTitle}>Recently</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        {/* Horizontal Scroll List */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.recentList}>
          {data.map(item => (
            <View key={item.id} style={styles.recentItem}>
              <Image source={item.image} style={styles.recentImage} />
              <Text style={styles.recentName}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
    backgroundColor: 'white',
  },
  mainContainer: {
    flex: 1,
    paddingTop: 20,
  },
  greetingContainer: {
    paddingHorizontal: 16,
  },
  greeting: {
    fontSize: 18,
    color: 'black',
  },
  cropName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  cardContainer: {
    overflow: 'hidden',
    marginTop: 20,
    paddingRight: 4,
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 30,
  },
  cardText: {
    position: 'absolute',
    top: '30%',
    textAlign: 'center',
    lineHeight: 28,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  recentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  seeAll: {
    fontSize: 14,
    color: 'gray',
  },
  recentList: {
    paddingHorizontal: 16,
    paddingBottom: 10,
    marginTop: 20,
  },
  recentItem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  recentImage: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  recentName: {
    marginTop: 5,
    fontSize: 14,
    color: 'black',
  },
});
