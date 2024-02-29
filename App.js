import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Modal} from 'react-native';
import Calendar from 'react-native-calendars/src/calendar';

const App = () => {
    const [showModal, setShowModal] = useState(false);
    return(
        <View>
            <TouchableOpacity 
                onPress = {() => setShowModal(true)}
                style = {{ 
                    backgroundColor: 'black',
                    borderRadius: 10, 
                    margin: 40, 
                    padding: 10, 
                    width: 200, 
                    alignItems: 'center',  
                }}>
                <Text style = {{color: 'white', fontSize: 22}}>Show Calendar</Text>
            </TouchableOpacity>
            <Modal visible = {showModal} animationType = 'slide'>
                <Calendar/>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({})

export default App;