import React from 'react'

import { View , Text, TouchableOpacity, StyleSheet } from 'react-native'

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { LalezarRegular } from '../utils/Fonts';

const SubChapter = ({navigation}) => {
    return (
        <>
        <View style={styles.block}>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.icon}>
                <MaterialIcon size={80} color="white" name="list-alt" />
                <Text style={styles.examText}>آزمون</Text>
            </TouchableOpacity>
          </View>
          
            <View style={styles.info}>
                <TouchableOpacity
                onPress={() => navigation.navigate('Reading')}
                >
                <Text style={styles.myBlockText}>فصل 1</Text>
                <Text style={ styles.mySubjectText }>موضوع</Text>
                </TouchableOpacity>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    myBlockText : {
        color : 'white',
        fontSize : 45,
        fontFamily : LalezarRegular,
    },
    mySubjectText : {
        color : 'white',
        fontSize : 25,
        fontFamily : LalezarRegular,
        alignSelf : 'flex-start',
    },
    examText : {
        color : 'white',
        fontSize : 25,
        fontFamily : LalezarRegular,
        alignSelf : 'flex-end',
    },    
    info : {
        flexDirection : 'column',
        flex : 2,
        paddingHorizontal : 20,
        paddingVertical : 5,
    },
    block : {
        backgroundColor : '#4D7C8A',
        // backgroundColor : 'yellow',
        flexDirection : 'row',
        borderRadius : 20,
        marginHorizontal : 20,
        marginBottom : 20,
    },
    iconContainer : {
        justifyContent : 'center',
        // backgroundColor : 'yellow',
        borderRightWidth : 2,
        paddingRight : 10,
        flex : 1,
    },
    icon : {
        //backgroundColor : 'red',
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    }
});

export default SubChapter
