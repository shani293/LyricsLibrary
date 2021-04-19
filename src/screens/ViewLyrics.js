import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Dimensions, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';

const windowHeight = Dimensions.get('window').height;

const data = [
    {
        id: '1',
        album: "Ooh, ooh"
    },
    {
        id: '2',
        album: "Across the ocean, across the sea"
    },
    {
        id: '3',
        album: "Startin' to forget the way you look at me now"
    },
    {
        id: '4',
        album: "Over the mountains, across the sky"
    },
    {
        id: '5',
        album: "Need to see your face"
    },
    {
        id: '6',
        album: "I need to look in your eyes"
    },
    {
        id: '7',
        album: "Through the storm and through the clouds"
    },
    {
        id: '8',
        album: "Bumps in the road and upside down now"
    },
    {
        id: '9',
        album: "I know it's hard babe, to sleep at night"
    },
    {
        id: '10',
        album: "Don't you worry"
    },
    {
        id: '11',
        album: "Cause everything's gonna be alright, ai-ai-ai-a'ight"
    },
    {
        id: '12',
        album: "Be alright, ai-ai-ai-a'ight"
    },
    {
        id: '13',
        album: "Through the sorrow"
    },
    {
        id: '14',
        album: "And the fights"
    },
]

function ViewLyrics({ navigation }) {

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={{color: 'white'}}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("AddedToFavourites")} style={{marginLeft: 'auto', marginRight: '10%'}}>
                <Icon name="heart" size={30}  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Copied")}>
                <Icon1 name="content-copy" size={30} color="#3CCB37" />
                </TouchableOpacity>
            </View>
            <Text style={styles.lyricsTitle}>Baby by justin bleber</Text>
            <ScrollView>
            <View style={{height: 5}} />
            
                {data.map(element => (
                    <Text style={styles.lyricsDescription}>{element.album}</Text>
                ))}
                <Text style={styles.bottomText}>
                    ARTIST- Justin Bieber
                </Text>
                <Text style={styles.bottomText}>
                    RELEASED- 2010
                </Text>
                <Text style={styles.bottomText}>
                    GENERE- Pop
                </Text>
            </ScrollView>
        </View>
    );
}

export default ViewLyrics;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginHorizontal: '2%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    backButton: {
        height: 35,
        width: '40%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#3CCB37',
        borderRadius: 5
    },
    lyricsTitle: {
        fontSize: 20,
        marginLeft: '2%',
        fontWeight: 'bold',
        marginTop: 5
    },
    lyricsDescription: {
        fontSize: 16,
        marginLeft: '2%'
    },
    bottomText: {
        color: '#3CCB37', 
        textAlign: 'center',
        marginTop: 30,
        fontSize: 18
    }
})