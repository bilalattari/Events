/* eslint-disable */

import React, { Fragment } from 'react';
import {
    StyleSheet, View, FlatList, TouchableOpacity, Image,
    ScrollView,
} from 'react-native';
import { Icon, SearchBar } from 'react-native-elements';
import HorizontalEventItem from '../Component/EventItems'
import Header from '../Component/header'
import Text from '../Component/Text'
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
let searchEvents = [
    { name: 'Event Party' },
    { name: 'New YOor Party' },
    { name: 'Great Party' },
    { name: 'Nighty Party' },
    { name: 'Night Party' },
    { name: 'Nights Party' },
    { name: 'New Year Party' },
]
class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imageNum: 0,
            search: this.props.navigation.getParam('name'),
            serachDone: true,
            selectedItem: 0
        }
    }
    static navigationOptions = {
        header: null,
    }
    componentDidMount() {
    }

    updateSearch = search => {
        this.setState({ search, serachDone: false });
    }
    render() {
        let { imageNum, selectedItem, search, serachDone } = this.state
        console.log(this.props.navigation.getParam('name'))
        return (
            <View>
                <ScrollView style={styles.container}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 4 }}>
                            <SearchBar
                                placeholder="Type Here..."
                                onChangeText={this.updateSearch}
                                onFocus={() => this.setState({ serachDone: false })}
                                onBlur={() => this.setState({ serachDone: true })}
                                containerStyle={{
                                    borderColor: '#fff', padding: 1, width: '90%', borderTopColor: '#ccc', borderBottomColor: '#ccc',
                                    borderRadius: 5, alignSelf: 'center', borderColor: "#FFFAFA", borderTopWidth: 0,
                                    backgroundColor: "#FFFAFA", marginTop: 12
                                }}
                                inputContainerStyle={{
                                    backgroundColor: "#FFFAFA",
                                    borderColor: '#ccc', borderWidth: 1, borderTopColor: '#ccc', borderBottomColor: '#ccc'
                                }}
                                value={this.state.search}
                            />
                        </View>
                        {
                            search ?
                                <TouchableOpacity
                                onPress = {()=> this.setState({search : ''})}
                                style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <Text text={'Cancel'}
                                        color={'green'}
                                        bold={true}
                                        style={{ marginVertical: 0, marginTop: 6 }} />
                                </TouchableOpacity> : null
                        }
                    </View>
                    {
                        search && !serachDone ?
                            <View style={{
                                width: '89%', alignSelf: "center", borderColor: "#ccc",

                            }}>
                                <FlatList
                                    data={searchEvents}
                                    keyExtractor={(item) => `${item.name}`}
                                    renderItem={({ item, index }) => <TouchableOpacity style={{
                                        height: 45, padding: 8,
                                        justifyContent: "center"
                                    }} onPress={() => this.setState({ serachDone: true, search: '' })} >
                                        <Text text={item.name} style={{ marginVertical: 0 }} />
                                    </TouchableOpacity>}
                                />
                            </View>
                            : null}
                    {
                        serachDone ?
                            <Text text={"28 party events are found in New Youk"}
                                align={'center'} color={'grey'}
                                style={{ marginVertical: 12 }} />
                            : null}
                    {
                        serachDone ?
                            <ScrollView >
                                {
                                    ENTRIES1.map((data) =>
                                        <View style={{ marginVertical: 6 }}>
                                            <HorizontalEventItem data={data} onPress={() => this.props.navigation.navigate('EventDetail')} />
                                        </View>
                                    )
                                }
                            </ScrollView>
                            : null}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFAFA'
    },
})

export default Search

