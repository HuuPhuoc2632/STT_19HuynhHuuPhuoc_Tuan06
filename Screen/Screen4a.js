import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { FlatList } from 'react-native'
import ProductComponent from '../component/ProductComponent'

export default function Screen4a() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Image source={require('../assets/ant-design_arrow-left-outlined.png')} style={{height:30, width: 30}} />
                <Text style={{ fontSize: 20, color: 'white' }}>Chat</Text>
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
            </View>
            <View style={styles.body}>
                <View style={{ height: 80, width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 50,backgroundColor: 'transparent'}}>
                    <Text style={styles.title}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
                </View>
                <FlatList style={{ position: 'sticky', width: 470, top: 150, marginBottom: 50, height: 710}}
                    data={dataList}
                    renderItem={({ item }) => <ProductComponent option={item} /> }
                    numColumns={1}
                    contentContainerStyle={{ justifyContent: 'space-between', paddingHorizontal: 20 }}
                    scrollEnabled={true}
                />
            </View>

        </View>
    )
}
const dataList = [
    {
        img: require('../assets/ca_nau_lau.png'),
        name: 'Ca nấu lẩu, nấu mì mini...',
        shop: 'Devang',
    },
    {
        img: require('../assets/ga_bo_toi.png'),
        name: '1KG Khổ gà bơ tỏi',
        shop: 'LTD Food',
    },
    {
        img: require('../assets/xa_can_cau.png'),
        name: 'Xe cần cẩu đa năng',
        shop: 'Thế giới đồ chơi',
    },
    {
        img: require('../assets/do_choi_dang_mo_hinh.png'),
        name: 'Đồ chơi dạng mô hình',
        shop: 'Thế giới đồ chơi',
    },
    {
        img: require('../assets/lanh_dao_gian_don.png'),
        name: 'Lãnh đạo giản đơn',
        shop: 'Minh Long Book',
    },
    {
        img: require('../assets/ca_nau_lau.png'),
        name: 'Bông lan trứng muối',
        shop: 'Shop ABC',
    },
    {
        img: require('../assets/hieu_long_con_tre.png'),
        name: 'Hiểu lòng con trẻ',
        shop: 'Minh Long Book',
    },
    {
        img: require('../assets/trump 1.png'),
        name: 'Donal Trump Thiên tài lãnh đạo',
        shop: 'Minh Long Book',
    },
]
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C4C4C4',
    },
    header: {
        height: 50,
        width: '100%',
        backgroundColor: '#1BA9FF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        zIndex: 1,
    },
    body: {
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        height: 50,
        width: '80%',
        fontSize: 16,
        color: '#000000',
        textAlign: 'left    ',
        fontWeight: 'bold',
        position: 'fixed',
        zIndex: 1,
    },
    footer: {
        height: 50,
        width: '100%',
        backgroundColor: '#1BA9FF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        bottom: 0,

    }

})