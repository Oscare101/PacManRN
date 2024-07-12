import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import PacMan from '../mazes/Pac-Man';
import GridMaker from '../components/mazeMakers/GridMaker';

const width = Dimensions.get('screen').width;

export default function MapScreen() {
  const [grid, setGrid] = useState<number[][]>(PacMan);

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#000',
      }}>
      <GridMaker grid={grid} />
    </View>
  );
}

const styles = StyleSheet.create({});
