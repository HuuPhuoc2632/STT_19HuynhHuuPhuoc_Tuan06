import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import ProductDetailComponent from '../component/ProductDetailComponent'

export default function Screen4b() {
  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../assets/ant-design_arrow-left-outlined.png')} style={{height:30, width: 30}} />
        </TouchableOpacity>

        <View style={styles.seacrh}>
            <TouchableOpacity>
              <Image
                source={require("../assets/whh_magnifier.png")}
                style={{ width: 24, height: 24, marginLeft: 5, marginRight: 5 }}
              />
            </TouchableOpacity>
            <TextInput
              placeholder="Dây cáp usb"
              placeholderTextColor={"#7D5B5B"}
              style={{ width: 155 }}
            ></TextInput>
        </View>

        <View style={{ marginRight: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../assets/Vector-1.png')}
                        style={{
                            width: 30,
                            height: 30,
                            position: 'absolute',
                        }}
                    />
                    <Image source={require('../assets/Vector.png')}
                        style={{
                            width: 10,
                            height: 10,
                            position: 'absolute',
                        }}
                    />
                </View>
                <Image source={require('../assets/Group 2.png')} style={{height:10, width: 35}}/>

      </View>
      <View style={styles.body}>
                <FlatList style={{ position: 'sticky', width: 470, top: 150, marginBottom: 50, height: 800}}
                    data={dataList}
                    renderItem={({ item }) => <ProductDetailComponent option={item} /> }
                    numColumns={2}
                    contentContainerStyle={{ justifyContent: 'space-between', paddingHorizontal: 20 }}
                    scrollEnabled={true}
                />
            </View>
    </View>
  )
}
const dataList = [
  {
      img: require('../assets/giacchuyen 1.png'),
  },
  {
      img: require('../assets/daynguon 1.png'),
  },
  {
      img: require('../assets/dauchuyendoipsps2 1.png'),

  },
  {
      img: require('../assets/dauchuyendoi 1.png'),
  },
  {
      img: require('../assets/carbusbtops2 1.png'),

  },
  {
      img: require('../assets/daucam 1.png'),

  },
]
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C4C4C4",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#1BA9FF",
    height: 42,
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    position: "sticky",
    top: 0,
    zIndex: 1,
  },
  seacrh: {
    width: 192,
    height: 30,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
})