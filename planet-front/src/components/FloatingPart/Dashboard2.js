import React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import CustomSwitch from './CustomSwitch';

//토글 스위치 Dashboard screen
export default function Dashboard2({navigation}){
    const onSelectSwitch = index => {
    };
  
    return (
      <View style={{alignItems: 'center'}}>
        <View style={{alignItems: 'center', marginBottom: 60}}>
          <CustomSwitch
            selectionMode={2}
            roundCorner={true}
            option1={'수입'}
            option2={'지출'}
            onSelectSwitch={onSelectSwitch}
            selectionColor={'#374756'}
          />
        </View>
      </View>
    );
  }