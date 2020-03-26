/* eslint-disable */

import React, { Component } from 'react';
import { Header, Input, Icon } from 'react-native-elements';
import { StatusBar, View, Image, TouchableOpacity, Text } from 'react-native';
import { themeColor, pinkColor } from '../Constant/index';
export default CustomText = props => (
    <Text style={[{
        fontSize: props.font ? props.font : 16,textAlign : props.align ? props.align : "left",
        fontWeight: props.bold ? "bold" : 'normal', marginVertical: 2,fontFamily : "NotoSans-Regular",
        color: props.color ? props.color : '#363636', marginLeft: props.marginLeft ? props.marginLeft : 0,
    }, props.style]}>{props.text}</Text>
);
