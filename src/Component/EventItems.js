import React, { Fragment } from 'react';
import {
  StyleSheet,
  View, TouchableOpacity,
   ScrollView,Dimensions,
  Image, FlatList
} from 'react-native';

let width = Dimensions.get('screen').width
import { Icon } from 'react-native-elements';
import CustomText from './Text'
import Stars from './Stars'
export default HorizontalEventItem = ({ data }) =>
  <TouchableOpacity style={{ marginHorizontal: 7 }}>
    <Image source={data.thumbnail}
      style={{
        height: 230, width: width - 40, resizeMode: 'cover',
        backgroundColor: '#000', borderRadius: 12
      }} />
    <View style={{ paddingHorizontal: 5 }}>
      <View style={{
        flexDirection: "row", justifyContent: 'space-between',
        height: 30, alignItems: "center"
      }}>
        <CustomText text={'April 11 2020'} />
        <Stars />
      </View>
      <CustomText text={'Quit Cloubing VIP Heated'} bold={true} font={22} />
      <CustomText text={'Rooftop Party'} bold={true} font={18} />
      <View style={{
        flexDirection: "row", justifyContent: 'space-between',
        height: 20, alignItems: "center"
      }}>
        <View style={{ flexDirection: 'row', alignItems: "center" }}>
          <Icon type={'font-awesome'} name={'location'} name={'map-marker'} color={'#ccc'} size={16} />
          <CustomText text={'North Nazimabad Block..'} font={12} marginLeft={6} style={{ marginVertical: 0 }} />
        </View>
        <CustomText text={'12km'} font={12} style={{ marginVertical: 0 }} />
      </View>
    </View>
  </TouchableOpacity>
