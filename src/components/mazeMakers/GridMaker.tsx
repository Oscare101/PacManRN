import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RowMaker from './RowMaker';

export default function GridMaker(props: {grid: any}) {
  return (
    <View style={{flexDirection: 'column'}}>
      {props.grid.map((row: any, index: number) => (
        <RowMaker key={index} grid={props.grid} y={index} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
