/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView, TouchableOpacity,
    View, Image,

    StatusBar,
} from 'react-native';
import { Icon, SearchBar } from 'react-native-elements';
import Text from '../Component/Text'
import MapView from 'react-native-maps';
import HorizontalEventItem from '../Component/EventItems'
export const ENTRIES1 = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg',
        thumbnail: require('../assets/landingScreen/1.jpeg')
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
        thumbnail: require('../assets/landingScreen/2.jpeg')
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg',
        thumbnail: require('../assets/landingScreen/3.jpeg')
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
        thumbnail: require('../assets/landingScreen/4.jpeg')
    },
    {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
        thumbnail: require('../assets/landingScreen/5.jpeg')
    },
    {
        title: 'Middle Earth, Germany',
        subtitle: 'Lorem ipsum dolor sit amet',
        thumbnail: require('../assets/landingScreen/6.jpg')
    }
];

let icons = [
    { name: "Interested", icon: "star-o" },
    { name: "Going", icon: "check-circle" },
    { name: "Invite", icon: "user-plus" },
    { name: "More", icon: "ellipsis-h" },
]
class EventDetail extends Component {
    state = {
        getAccess: false,
        region: {
            latitude: 24.882626,
            longitude: 67.067256,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
        },
        showMore: false
    }
    static navigationOptions = {
        header: null
    }
    onRegionChange = (data) => {
        this.setState({ region: data })
    }
    showMoreOrLess = () => {
        let { showMore } = this.state
        this.setState({ showMore: !showMore })
    }
    render() {
        const { region, showMore } = this.state;
        let {navigation} = this.props
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, zIndex: -1200 }}>
                    <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
                        <View style={{ backgroundColor: '#fff' }}>
                            <TouchableOpacity 
                            onPress = {()=> navigation.navigate('Search')}
                            style={{
                                width: 50, height: 50, justifyContent: 'center', alignItems: "center",
                            }}>
                                <Icon type={"font-awesome"} name={'angle-left'} color={'#363636'} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Image source={require('../assets/landingScreen/2.jpeg')} style={{
                                height: 241, width: "100%",
                            }} />
                            <View style={{ position: 'absolute', right: 8, top: 8, flexDirection: "row", justifyContent: 'space-around', width: 70 }}>
                                <TouchableOpacity>
                                    <Icon type={'font-awesome'} name={'heart-o'} color={'#fff'} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Icon type={'font-awesome'} name={'share-alt'} color={'#fff'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ padding: 8 }}>
                            <Text text={"Sports"} color={'green'} />
                            <Text text={"Quit Clubbing VIO Heated"} bold={true} font={22} />
                            <Text text={"Rooftop Party"} bold={true} font={20} />
                            <View style={{
                                flexDirection: "row", justifyContent: 'space-between',
                                height: 25, alignItems: "center"
                            }}>
                                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                    <Icon type={'font-awesome'} name={'clock-o'} color={'#ccc'} size={20} />
                                    <Text text={'North Nazimabad Block..'} font={12} marginLeft={6} style={{ marginVertical: 0 }} />
                                </View>
                            </View>
                            <Text text={"About"} bold={true} font={20} />
                            <Text text={"The event is about The event is about The event is about The event is about The event is about The event is about The event is about The event is about"} font={16} />
                            {
                                showMore ?
                                    <Text text={"The event is about The event is about The event is about The event is about The event is about The event is about The event is about The event is about"} font={16} />
                                    : null
                            }
                            <TouchableOpacity onPress={this.showMoreOrLess}>
                                <Text text={showMore ? 'Show Less' : "Read More..."} font={16}
                                    color={showMore ? 'red' : "green"} style={{ marginRight: 5 }} align={showMore ? 'right' : 'left'} />
                            </TouchableOpacity>

                            <Text text={"LOCATION"} bold={true} font={20} />
                            <Text text={"65 W 48TH STREET , Manhathan 10035"} font={16} />
                            <Text text={"3.5 km nearby"} font={16} />
                            <Text text={"More Events Like This "} bold={true} font={20} style={{ marginVertical: 12 }} />
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                {
                                    ENTRIES1.map((data, index) =>
                                        <HorizontalEventItem index={index} data={data} onPress={() => this.props.navigation.navigate('EventDetail')} />
                                    )
                                }
                            </ScrollView>
                            <View style={{
                                height: 220, width: '95%', alignSelf: "center"
                                , borderRadius: 20, overflow: "hidden", marginVertical: 8
                            }}>
                                <MapView
                                    style={styles.map}
                                    region={region}
                                    onRegionChangeComplete={this.onRegionChange}
                                >
                                    <MapView.Marker
                                        coordinate={{
                                            latitude: region.latitude,
                                            longitude: region.longitude
                                        }}
                                        draggable
                                        title={"Software House"}
                                        description={"it is where our software house located"}
                                        onDragEnd={(e) => console.log('Data22*****', e)}
                                    />
                                </MapView>
                            </View>



                        </View>
                    </ScrollView>
                    <View style={{
                        flexDirection: "row",
                        zIndex: 1200, width: '100%', paddingVertical: 8, backgroundColor: '#FFFAFA'
                    }}>
                        {
                            icons.map((data, index) =>
                                <TouchableOpacity key={index} style={{
                                    backgroundColor: '#FFFAFA', zIndex: 1200, flex: 1,
                                    justifyContent: "center", alignItems: "center"
                                }} >
                                    <Icon type={'font-awesome'} name={data.icon} color={'#ccc'} size={20} />
                                    <Text text={data.name} font={14} bold={true} />
                                </TouchableOpacity>
                            )
                        }

                    </View>
                    <TouchableOpacity style={{
                        height: 45, width: "80%", alignSelf: "center", borderRadius: 12, marginVertical: 6,
                        justifyContent: "center", backgroundColor: 'green'
                    }}>
                        <Text text={"BUY TICKET"} color={'#fff'} align={'center'} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFAFA'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default EventDetail;
