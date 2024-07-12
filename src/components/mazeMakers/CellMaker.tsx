import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import Icon from '../icons/Icon';
import {
  BottomLeftOuterCorner,
  BottomRightOuterCorner,
  TopLeftOuterCorner,
  TopRightOuterCorner,
} from '../../functions/MazeOuterCornerFunctions';
import {
  BottomWall,
  LeftWall,
  RightWall,
  TopWall,
} from '../../functions/MazeWallFunction';
import {
  BottomLeftInnerCorner,
  BottomRightInnerCorner,
  TopLeftInnerCorner,
  TopRightInnerCorner,
} from '../../functions/MazeInnerCornerFunctions';
import {
  BottomDoubleWall,
  LeftDoubleWall,
  RightDoubleWall,
  TopDoubleWall,
} from '../../functions/MazeDoubleWallFuncrioins';
import {
  BottomLeftInnerDoubleCorner,
  BottomRightInnerDoubleCorner,
  TopLeftInnerDoubleCorner,
  TopRightInnerDoubleCorner,
} from '../../functions/MazeInnerDoubleCornerFunctions';
import {
  BottomLeftInnerCornerWallLeft,
  BottomLeftInnerCornerWallRight,
  BottomRightInnerCornerWallLeft,
  BottomRightInnerCornerWallRight,
  TopLeftInnerCornerWallLeft,
  TopLeftInnerCornerWallRight,
  TopRightInnerCornerWallLeft,
  TopRightInnerCornerWallRight,
} from '../../functions/MazeInnerCornerWallFunctions';

const width = Dimensions.get('screen').width;

export default function CellMaker(props: {grid: any; y: number; x: number}) {
  const gridSize = width / props.grid[0].length;

  return (
    <View
      style={{
        width: gridSize,
        height: gridSize,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {TopRightOuterCorner(props.grid, props.y, props.x, gridSize)}
      {TopLeftOuterCorner(props.grid, props.y, props.x, gridSize)}
      {BottomRightOuterCorner(props.grid, props.y, props.x, gridSize)}
      {BottomLeftOuterCorner(props.grid, props.y, props.x, gridSize)}
      {BottomWall(props.grid, props.y, props.x, gridSize)}
      {TopWall(props.grid, props.y, props.x, gridSize)}
      {LeftWall(props.grid, props.y, props.x, gridSize)}
      {RightWall(props.grid, props.y, props.x, gridSize)}
      {TopLeftInnerCorner(props.grid, props.y, props.x, gridSize)}
      {TopRightInnerCorner(props.grid, props.y, props.x, gridSize)}
      {BottomLeftInnerCorner(props.grid, props.y, props.x, gridSize)}
      {BottomRightInnerCorner(props.grid, props.y, props.x, gridSize)}
      {BottomDoubleWall(props.grid, props.y, props.x, gridSize)}
      {TopDoubleWall(props.grid, props.y, props.x, gridSize)}
      {LeftDoubleWall(props.grid, props.y, props.x, gridSize)}
      {RightDoubleWall(props.grid, props.y, props.x, gridSize)}
      {TopRightInnerDoubleCorner(props.grid, props.y, props.x, gridSize)}
      {TopLeftInnerDoubleCorner(props.grid, props.y, props.x, gridSize)}
      {BottomRightInnerDoubleCorner(props.grid, props.y, props.x, gridSize)}
      {BottomLeftInnerDoubleCorner(props.grid, props.y, props.x, gridSize)}
      {TopRightInnerCornerWallLeft(props.grid, props.y, props.x, gridSize)}
      {BottomLeftInnerCornerWallLeft(props.grid, props.y, props.x, gridSize)}
      {BottomRightInnerCornerWallLeft(props.grid, props.y, props.x, gridSize)}
      {TopLeftInnerCornerWallLeft(props.grid, props.y, props.x, gridSize)}
      {TopRightInnerCornerWallRight(props.grid, props.y, props.x, gridSize)}
      {TopLeftInnerCornerWallRight(props.grid, props.y, props.x, gridSize)}
      {BottomLeftInnerCornerWallRight(props.grid, props.y, props.x, gridSize)}
      {BottomRightInnerCornerWallRight(props.grid, props.y, props.x, gridSize)}

      {props.grid[props.y][props.x] === 1 ? (
        <View
          style={{
            width: gridSize / 4,
            height: gridSize / 4,
            backgroundColor: '#FFB897',
          }}></View>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
