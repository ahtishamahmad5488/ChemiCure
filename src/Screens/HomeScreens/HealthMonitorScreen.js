// import React from 'react';
// import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

// import Header from '../../Components/Header';
// import {ICONS} from '../../Constants/icons';

// const HealthMonitorScreen = () => {
//   return (
//     <ScrollView style={styles.scrollContainer}>
//       <View style={styles.container}>
//         {/* Header */}
//         <View>
//           <Header />
//         </View>

//         {/* Status Box */}
//         <View style={styles.statusDetailsContainer}>
//           {/* Title & Battery Icon */}
//           <View style={styles.titleContainer}>
//             <View>
//               <Text style={styles.diseaseTitle}>Fusarium</Text>
//               <Text style={styles.diseaseStatus}>Detected</Text>
//             </View>
//             <ICONS.batteryHealthIcon />
//           </View>
//           {/* Status Details */}
//           <Text style={styles.statusTitle}>Status Details</Text>
//           <View style={styles.statusContainer}>
//             {/* Row of Icons */}
//             <View style={styles.statusItem}>
//               <ICONS.wheatIcon />
//               <Text style={styles.statusLabel}>UNHEALTHY</Text>
//               <Text style={styles.statusValue}>80%</Text>
//             </View>
//             <View style={styles.statusItem}>
//               <ICONS.smallTemperatureIcon />
//               <Text style={styles.statusLabel}>TEMPERATURE</Text>
//               <Text style={[styles.statusValue, {color: 'green'}]}>
//                 70-75 °F
//               </Text>
//             </View>
//             <View style={styles.statusItem}>
//               <ICONS.smallHumidityIcon />
//               <Text style={styles.statusLabel}>HUMIDITY</Text>
//               <Text style={styles.statusValue}>80%</Text>
//             </View>
//             <View style={styles.statusItem}>
//               <ICONS.waterIcon />
//               <Text style={styles.statusLabel}>WATER</Text>
//               <Text style={styles.statusValue}>290ml</Text>
//             </View>
//           </View>
//           {/* Image & Infection Alert */}
//           <View style={styles.bottomSection}>
//             <ICONS.detectionIcon />
//             <View style={styles.infectionAlert}>
//               <ICONS.LeafIcon />
//               <Text style={styles.alertText}>Your Crop is Infected</Text>
//             </View>
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default HealthMonitorScreen;

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1,
//     paddingBottom: 20,
//     backgroundColor: 'white',
//   },
//   container: {
//     flex: 1,
//     paddingTop: 20,
//   },
//   statusDetailsContainer: {
//     backgroundColor: '#ECF3D5',
//     borderRadius: 16,
//     padding: 16,
//     margin: 16,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: {width: 0, height: 2},
//   },
//   titleContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   diseaseTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#222',
//   },
//   diseaseStatus: {
//     color: 'red',
//     fontWeight: 'bold',
//     fontSize: 14,
//   },
//   statusTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 12,
//     color: '#333',
//   },
//   statusContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
//   statusItem: {
//     width: '45%',
//     alignItems: 'center',
//     marginVertical: 8,
//   },
//   statusLabel: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   statusValue: {
//     fontSize: 12,
//     color: '#666',
//   },
//   bottomSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   cropImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//   },
//   infectionAlert: {
//     flexDirection: 'row',
//     backgroundColor: '#F8E5A7',
//     padding: 8,
//     borderRadius: 20,
//     alignItems: 'center',
//     marginLeft: 10,
//   },
//   alertText: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     color: '#555',
//     marginLeft: 5,
//   },
// });
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../Components/Header';

const HealthMonitorScreen = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.mainContainer}>
        <Header />
        {/* status Detail Container */}

        <View style={styles.statusDetailsContainer}>
          {/* Title & Battery Icon */}
          <View style={styles.titleContainer}>
            <View>
              <Text style={styles.diseaseTitle}>Fusarium</Text>
              <Text style={styles.diseaseStatus}>Detected</Text>
            </View>
            {/* Battery Icon */}
            <ICONS.batteryHealthIcon />
          </View>
          {/* Status Details */}
          <Text style={styles.statusTitle}>Status Details</Text>
          <View style={styles.statusContainer}>
            {/* Row of Icons */}
            <View style={styles.statusItem}>
              <ICONS.wheatIcon />
              <Text style={styles.statusLabel}>UNHEALTHY</Text>
              <Text style={styles.statusValue}>80%</Text>
            </View>
            <View style={styles.statusItem}>
              <ICONS.smallTemperatureIcon />
              <Text style={styles.statusLabel}>TEMPERATURE</Text>
              <Text style={[styles.statusValue, {color: 'green'}]}>
                70-75 °F
              </Text>
            </View>
            <View style={styles.statusItem}>
              <ICONS.smallHumidityIcon />
              <Text style={styles.statusLabel}>HUMIDITY</Text>
              <Text style={styles.statusValue}>80%</Text>
            </View>
            <View style={styles.statusItem}>
              <ICONS.waterIcon />
              <Text style={styles.statusLabel}>WATER</Text>
              <Text style={styles.statusValue}>290ml</Text>
            </View>
          </View>
          {/* Image & Infection Alert */}
          <View style={styles.bottomSection}>
            <ICONS.detectionIcon />
            <View style={styles.infectionAlert}>
              <ICONS.LeafIcon />
              <Text style={styles.alertText}>Your Crop is Infected</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HealthMonitorScreen;

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
  statusDetailsContainer: {
    backgroundColor: '#ECF3D5',
    borderRadius: 16,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
  },
});
