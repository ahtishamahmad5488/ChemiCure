// import React from 'react';
// import {View, Text, TouchableOpacity} from 'react-native';
// import {useNavigation} from '@react-navigation/native';

// const CustomHeader = ({title, SvgIcon}) => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.header}>
//       {/* Back Button */}
//       <TouchableOpacity
//         onPress={() => navigation.goBack()}
//         style={styles.iconContainer}>
//         {SvgIcon && <SvgIcon width={30} height={30} />} {/* Render SVG Icon */}
//       </TouchableOpacity>

//       {/* Title */}
//       <Text style={styles.title}>{title}</Text>
//     </View>
//   );
// };

// const styles = {
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 15,
//   },
//   iconContainer: {
//     paddingRight: 10,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// };

// export default CustomHeader;
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CustomHeader = ({
  title,
  BackgroundSvg,
  SadIconSvg,
  backgroundSvgStyle,
  IconStyle,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.illustrationContainer}>
        {BackgroundSvg && (
          <BackgroundSvg style={[styles.backgroundSvg, backgroundSvgStyle]} />
        )}
        {SadIconSvg && <SadIconSvg style={[styles.sadIcon, IconStyle]} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 20,
  },
  backButtonContainer: {
    justifyContent: 'flex-start',
  },
  illustrationContainer: {
    justifyContentL: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  sadIcon: {
    position: 'absolute',
  },
  backText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 80,
  },
});

export default CustomHeader;
