import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {ICONS} from '../Constants/icons';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity>
        <ICONS.menuIcon />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <ICONS.chemicureText style={styles.headerTextIcon} />
      </View>
      <TouchableOpacity>
        <ICONS.bellIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
};

export default Header;
