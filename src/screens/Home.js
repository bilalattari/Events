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
class LandingScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageNum: 0,
      search: '',
      serachDone: false,
      selectedItem: 0,
      inputFocus: false
    }
    console.disableYellowBox = true;
  }
  static navigationOptions = {
    header: null
  }
  componentDidMount() {
    if (this.props.userObj) {
      this.props.navigation.navigate('App')
    }
  }

  updateSearch = search => {
    this.setState({ search, serachDone: false });
  }
  render() {
    let { imageNum, selectedItem, search, serachDone, inputFocus } = this.state
    return (
      <ScrollView style={styles.container}>

        <View style={styles.header}>
          <Image source={require('../assets/avatar.png')} style={{ height: 60, width: 60, borderRadius: 5 }} />
          <View style={{ paddingLeft: 12, justifyContent: "center", flex: 1 }}>
            <Text text={'Hi Waleed!'} />
            <Text bold={true} text={'How are you today?'} />
          </View>
          <TouchableOpacity style={{ width: 75, alignItems: 'center', justifyContent: 'center' }}>
            <Icon type={'font-awesome'} name={'bell-o'} color={'#363636'} size={25} />
            <View style={styles.bedge}>
              <Text text={3} font={9} color={'#fff'} />
            </View>
          </TouchableOpacity>
        </View>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          containerStyle={{
            borderColor: '#fff', padding: 1, width: '90%', borderTopColor: '#ccc', borderBottomColor: '#ccc',
            borderRadius: 5, alignSelf: 'center', borderColor: "#FFFAFA", borderTopWidth: 0,
            backgroundColor: "#FFFAFA", marginTop: 12
          }}
          onFocus={() => this.setState({ inputFocus: true })}
          // onBlur  = {()=> this.setState({inputFocus : false})}
          inputContainerStyle={{
            backgroundColor: "#FFFAFA",
            borderColor: '#ccc', borderWidth: 1, borderTopColor: '#ccc', borderBottomColor: '#ccc'
          }}
          value={this.state.search}
        />
        {
          serachDone ?
            <Text text={"28 party events are found in New Youk"}
              align={'center'} color={'grey'}
              style={{ marginVertical: 6 }} />
            : null}
        {
          inputFocus && search !== '' ?
            <View style={{
              width: '89%', alignSelf: "center", borderColor: "#ccc",
              borderRightWidth: 1, borderLeftWidth: 1
            }}>
              <FlatList
                data={searchEvents}
                keyExtractor={(item) => `${item.name}`}
                renderItem={({ item, index }) => <TouchableOpacity style={{
                  height: 45, borderBottomColor: "#ccc", padding: 8,
                  borderBottomWidth: 0.5, justifyContent: "center"
                }} onPress={() => {
                  this.props.navigation.navigate("Search", {name  : search})
                  this.setState({ inputFocus: false })
                }} >
                  <Text text={item.name} style={{ marginVertical: 0 }} />
                </TouchableOpacity>}
              />
            </View>
            :
            <View>
              <View style={{ height: 40, marginTop: 6 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  {
                    ['Popuplar', 'Party', 'E-Gemain', 'Culture', 'Sports', 'Festivals', 'New Events'].map((data, index) =>
                      <TouchableOpacity
                        key={index}
                        onPress={() => this.setState({ selectedItem: index })}
                        style={[{ padding: 4, marginHorizontal: 8 }, selectedItem === index ?
                          { borderBottomColor: '#000', borderBottomWidth: 1, } : null]}>
                        <Text text={data} />
                      </TouchableOpacity>
                    )
                  }
                </ScrollView>
              </View>

              <Header heading={'Upcoming Events'} subHeading={'View all'} />
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                  ENTRIES1.map((data, index) =>
                    <HorizontalEventItem index={index} data={data} onPress={() => this.props.navigation.navigate('EventDetail')} />
                  )
                }
              </ScrollView>
              <Header heading={'Trending Events'} subHeading={'View all'} />
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                  ENTRIES1.map((data, index) =>
                    <HorizontalEventItem index={index} data={data} onPress={() => this.props.navigation.navigate('EventDetail')} />
                  )
                }
              </ScrollView>
              <Header heading={'Trending Events'} subHeading={'View all'} />
              {
                ENTRIES1.map((data, index) =>
                  <TouchableOpacity key={index} style={{ margin: 7, flexDirection: "row" }}
                    onPress={() => this.props.navigation.navigate('EventDetail')}>
                    <Image source={data.thumbnail}
                      style={{
                        height: 125, width: 125, resizeMode: 'cover',
                        backgroundColor: '#000', borderRadius: 12
                      }} />
                    <View style={{ paddingHorizontal: 8 }}>
                      <Text text={'Quit Cloubing VIP Heated'} bold={true} font={18} />
                      <Text text={'Rooftop Party'} bold={true} font={18} />
                      <View style={{ marginTop: 4 }}>
                        <Text text={'Sports'} font={12} color={'green'} />
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                          <Icon type={'font-awesome'} name={'calendar'} color={'#ccc'} size={11} />
                          <Text text={'11 April 2020'} font={12} marginLeft={6} style={{ marginVertical: 0 }} />
                        </View>
                        <View style={{
                          flexDirection: "row", justifyContent: 'space-between',
                          height: 20, alignItems: "center"
                        }}>
                          <View style={{ flexDirection: 'row', alignItems: "center" }}>
                            <Icon type={'font-awesome'} name={'map-marker'} color={'#ccc'} size={16} />
                            <Text text={'North Nazimabad Block..'} font={12} marginLeft={6} style={{ marginVertical: 0 }} />
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                )
              }
            </View>
        }
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFAFA'
  },
  header: { flexDirection: "row", paddingHorizontal: 6, marginVertical: 12 },
  bedge: {
    height: 18, width: 18, borderRadius: 25, position: "absolute", top: 6, right: 12,
    justifyContent: 'center', alignItems: "center", backgroundColor: 'green'
  },
})

export default LandingScreen

