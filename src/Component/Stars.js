import React, { Fragment } from 'react';
import {
  StyleSheet,
  View, TouchableOpacity,
   ScrollView,
  Image, FlatList
} from 'react-native';
import { Icon } from 'react-native-elements';
import CustomText from './Text'
export default Stars = props =>
  <View style={{
    flexDirection: "row", alignItems: 'center'
  }}>
    {
      ['1', '2', '3', '4', '5'].map((data, index) => <Icon type={'font-awesome'} name={'star'} color={index !== 4 ? "#ffd700" : 'grey'} size={15} />)
    }
    <CustomText  text={'1.3k'} font={14} />
  </View>
