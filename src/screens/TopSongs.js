import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Dimensions, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

const windowHeight = Dimensions.get('window').height;

const data = [
    {
        id: '1',
        image: require("../assets/movie.jpg"),
        track: 'Anyone',
        album: "Single"
    },
    {
        id: '2',
        image: require("../assets/movie.jpg"),
        track: 'Anyone',
        album: "Single"
    },
    {
        id: '3',
        image: require("../assets/movie.jpg"),
        track: 'Anyone',
        album: "Single"
    },
    {
        id: '4',
        image: require("../assets/movie.jpg"),
        track: 'Anyone',
        album: "Single"
    },
    {
        id: '5',
        image: require("../assets/movie.jpg"),
        track: 'Anyone',
        album: "Single"
    },
    {
        id: '6',
        image: require("../assets/movie.jpg"),
        track: 'Anyone',
        album: "Single"
    },
    {
        id: '7',
        image: require("../assets/movie.jpg"),
        track: 'Anyone',
        album: "Single"
    },
]

function TopSongs({ navigation }) {

    return (
        <View style={{ flex: 1, backgroundColor: '#EEEEEE' }}>
            <View style={styles.topView}>
                <TouchableOpacity onPress={() => navigation.navigate("Search")} activeOpacity={1} style={styles.searchButton}>
                    <Icon name="search1" color="#E8E8E8" size={16} style={{ alignSelf: 'center' }} />
                    <Text style={styles.buttonText}>Search by track, artist, album</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.iconButton}>
                    <Icon1 name="person" color="#3CCB37" size={24} />
                </TouchableOpacity>
            </View>
            <Text style={styles.headingText}>
                Top 10 Songs
                </Text>
            <ScrollView>
                {data.map(element => (
                    <View style={styles.listView}>
                        <Image source={element.image}
                            style={styles.imageStyle} resizeMode="stretch" />
                        <View style={styles.textView}>
                            <Icon2 name="music-note" color="#3CCB37" size={30} />
                            <Text style={styles.textStyle}>Track - {element.track}</Text>
                        </View>
                        <View style={styles.textView}>
                            <Icon2 name="album" color="#3CCB37" size={30} />
                            <Text style={styles.textStyle}>Album - {element.album}</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate("ViewLyrics")} style={styles.bottomButton}>
                            <Text style={styles.bottomButtonText}>View Lyrics</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

export default TopSongs;

const styles = StyleSheet.create({
    topView: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        marginHorizontal: '3%'
    },
    searchButton: {
        flexDirection: 'row',
        paddingLeft: '2%',
        width: '80%',
        borderColor: '#E8E8E8',
        borderWidth: 2,
        borderRadius: 5,
        height: 45,
    },
    buttonText: {
        color: '#3CCB37',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginLeft: '3%'
    },
    iconButton: {
        height: 40,
        width: '12%',
        borderColor: '#3CCB37',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2
    },
    headingText: {
        fontSize: 22,
        color: '#3CCB37',
        textAlign: 'center',
        marginTop: 20,
    },
    listView: {
        backgroundColor: 'white',
        marginTop: 10,
        alignItems: 'center'
    },
    imageStyle: {
        height: 120,
        width: 180
    },
    textView: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 18,
        color: '#A9A9A9',
        marginLeft: '2%'
    },
    bottomButton: {
        height: 40,
        width: '50%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E6F5F1',
        marginTop: 25
    },
    bottomButtonText: {
        fontSize: 20,
        color: '#3CCB37',
        fontWeight: 'bold'
    },
})