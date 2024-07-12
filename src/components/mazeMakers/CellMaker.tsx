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

const width = Dimensions.get('screen').width;

export default function CellMaker(props: {grid: any; y: number; x: number}) {
  const gridSize = width / props.grid[0].length;
  // INNER CORNERS WITH WALL

  const innerCornerWallLeftTopRight =
    props.grid[props.y][props.x] === 8 &&
    props.y < props.grid.length - 1 &&
    props.y >= 0 &&
    props.x >= 0 &&
    props.x < props.grid[0].length - 1 &&
    props.grid[props.y][props.x - 1] === 8 &&
    props.grid[props.y][props.x + 1] === 8 &&
    props.grid[props.y + 1][props.x] === 7 &&
    (props.grid[props.y + 1][props.x - 1] === 1 ||
      props.grid[props.y + 1][props.x - 1] === 0);

  const innerCornerWallRightTopLeft =
    props.grid[props.y][props.x] === 8 &&
    props.y < props.grid.length - 1 &&
    props.y >= 0 &&
    props.x >= 0 &&
    props.x < props.grid[0].length - 1 &&
    props.grid[props.y][props.x - 1] === 8 &&
    props.grid[props.y][props.x + 1] === 8 &&
    props.grid[props.y + 1][props.x] === 7 &&
    (props.grid[props.y + 1][props.x + 1] === 1 ||
      props.grid[props.y + 1][props.x + 1] === 0);

  const innerCornerWallRightBottomRight =
    props.grid[props.y][props.x] === 8 &&
    props.y <= props.grid.length - 1 &&
    props.y > 0 &&
    props.x > 0 &&
    props.x < props.grid[0].length - 1 &&
    props.grid[props.y][props.x - 1] === 8 &&
    props.grid[props.y][props.x + 1] === 8 &&
    props.grid[props.y - 1][props.x] === 7 &&
    (props.grid[props.y - 1][props.x - 1] === 1 ||
      props.grid[props.y - 1][props.x - 1] === 0);

  const innerCornerWallLeftBottomLeft =
    props.grid[props.y][props.x] === 8 &&
    props.y <= props.grid.length - 1 &&
    props.y > 0 &&
    props.x > 0 &&
    props.x < props.grid[0].length - 1 &&
    props.grid[props.y][props.x - 1] === 8 &&
    props.grid[props.y][props.x + 1] === 8 &&
    props.grid[props.y - 1][props.x] === 7 &&
    (props.grid[props.y - 1][props.x + 1] === 1 ||
      props.grid[props.y - 1][props.x + 1] === 0);

  const innerCornerWallRightBottomLeft =
    props.grid[props.y][props.x] === 8 &&
    props.y < props.grid.length - 1 &&
    props.y > 0 &&
    props.x >= 0 &&
    props.x < props.grid[0].length - 1 &&
    props.grid[props.y - 1][props.x] === 8 &&
    props.grid[props.y + 1][props.x] === 8 &&
    props.grid[props.y][props.x + 1] === 7 &&
    (props.grid[props.y - 1][props.x + 1] === 1 ||
      props.grid[props.y - 1][props.x + 1] === 0);

  const innerCornerWallRightTopRigth =
    props.grid[props.y][props.x] === 8 &&
    props.y < props.grid.length - 1 &&
    props.y > 0 &&
    props.x > 0 &&
    props.x <= props.grid[0].length - 1 &&
    props.grid[props.y - 1][props.x] === 8 &&
    props.grid[props.y + 1][props.x] === 8 &&
    props.grid[props.y][props.x - 1] === 7 &&
    (props.grid[props.y + 1][props.x - 1] === 1 ||
      props.grid[props.y + 1][props.x - 1] === 0);

  const innerCornerWallLeftBottomRight =
    props.grid[props.y][props.x] === 8 &&
    props.y < props.grid.length - 1 &&
    props.y > 0 &&
    props.x > 0 &&
    props.x <= props.grid[0].length - 1 &&
    props.grid[props.y - 1][props.x] === 8 &&
    props.grid[props.y + 1][props.x] === 8 &&
    props.grid[props.y][props.x - 1] === 7 &&
    (props.grid[props.y - 1][props.x - 1] === 1 ||
      props.grid[props.y - 1][props.x - 1] === 0);

  const innerCornerWallLeftTopLeft =
    props.grid[props.y][props.x] === 8 &&
    props.y < props.grid.length - 1 &&
    props.y > 0 &&
    props.x >= 0 &&
    props.x < props.grid[0].length - 1 &&
    props.grid[props.y - 1][props.x] === 8 &&
    props.grid[props.y + 1][props.x] === 8 &&
    props.grid[props.y][props.x + 1] === 7 &&
    (props.grid[props.y + 1][props.x + 1] === 1 ||
      props.grid[props.y + 1][props.x + 1] === 0);

  function RenderIcon(grid: number[][], y: number, x: number) {
    return <Icon name="outerCorner" size={gridSize} direction="topRight" />;
  }

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

      {innerCornerWallLeftTopRight ? (
        <Icon name="innerCornerWallLeft" size={gridSize} direction="topRight" />
      ) : (
        <></>
      )}
      {innerCornerWallRightTopLeft ? (
        <Icon name="innerCornerWallRight" size={gridSize} direction="topLeft" />
      ) : (
        <></>
      )}
      {innerCornerWallRightBottomRight ? (
        <Icon
          name="innerCornerWallRight"
          size={gridSize}
          direction="bottomRight"
        />
      ) : (
        <></>
      )}
      {innerCornerWallLeftBottomLeft ? (
        <Icon
          name="innerCornerWallLeft"
          size={gridSize}
          direction="bottomLeft"
        />
      ) : (
        <></>
      )}
      {innerCornerWallRightBottomLeft ? (
        <Icon
          name="innerCornerWallRight"
          size={gridSize}
          direction="bottomLeft"
        />
      ) : (
        <></>
      )}
      {innerCornerWallRightTopRigth ? (
        <Icon
          name="innerCornerWallRight"
          size={gridSize}
          direction="topRight"
        />
      ) : (
        <></>
      )}
      {innerCornerWallLeftBottomRight ? (
        <Icon
          name="innerCornerWallLeft"
          size={gridSize}
          direction="bottomRight"
        />
      ) : (
        <></>
      )}
      {innerCornerWallLeftTopLeft ? (
        <Icon name="innerCornerWallLeft" size={gridSize} direction="topLeft" />
      ) : (
        <></>
      )}

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
