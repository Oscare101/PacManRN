import {StyleSheet, View} from 'react-native';
import React, {memo} from 'react';
import RowMaker from './RowMaker';

function GridMaker(props: {grid: any}) {
  return (
    <View style={{flexDirection: 'column'}}>
      {props.grid.map((row: any, index: number) => (
        <RowMaker key={index} grid={props.grid} y={index} />
      ))}
    </View>
  );
}

export default memo(GridMaker);
