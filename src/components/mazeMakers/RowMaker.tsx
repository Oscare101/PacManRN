import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CellMaker from './CellMaker';

export default function RowMaker(props: {grid: any; y: number}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {props.grid[props.y].map((cell: any, index: number) => (
        <CellMaker key={index} grid={props.grid} y={props.y} x={index} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
