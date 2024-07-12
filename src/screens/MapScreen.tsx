import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import PacMan from '../mazes/Pac-Man';
import GridMaker from '../components/mazeMakers/GridMaker';

const width = Dimensions.get('screen').width;

export default function MapScreen() {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <GridMaker grid={PacMan} />
    </View>
  );
}

const styles = StyleSheet.create({});
