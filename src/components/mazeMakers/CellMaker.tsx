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

const width = Dimensions.get('screen').width;

export default function CellMaker(props: {grid: any; y: number; x: number}) {
  const gridSize = width / props.grid[0].length;

  // DOUBLE WALL

  // DOUBLE INNER CORNER

  const innerDoubleCornerTopLeft =
    props.grid[props.y][props.x] === 8 &&
    props.y < props.grid.length - 1 &&
    props.x < props.grid[0].length - 1 &&
    props.grid[props.y + 1][props.x] === 8 &&
    props.grid[props.y][props.x + 1] === 8 &&
    (props.grid[props.y + 1][props.x + 1] === 1 ||
      props.grid[props.y + 1][props.x + 1] === 0);

  const innerDoubleCornerTopRight =
    props.grid[props.y][props.x] === 8 &&
    props.y < props.grid.length - 1 &&
    props.x > 0 &&
    props.grid[props.y + 1][props.x] === 8 &&
    props.grid[props.y][props.x - 1] === 8 &&
    (props.grid[props.y + 1][props.x - 1] === 1 ||
      props.grid[props.y + 1][props.x - 1] === 0);

  const innerDoubleCornerBottomRight =
    props.grid[props.y][props.x] === 8 &&
    props.y > 0 &&
    props.x > 0 &&
    props.grid[props.y - 1][props.x] === 8 &&
    props.grid[props.y][props.x - 1] === 8 &&
    (props.grid[props.y - 1][props.x - 1] === 1 ||
      props.grid[props.y - 1][props.x - 1] === 0);

  const innerDoubleCornerBottomLeft =
    props.grid[props.y][props.x] === 8 &&
    props.y > 0 &&
    props.x < props.grid[0].length - 1 &&
    props.grid[props.y - 1][props.x] === 8 &&
    props.grid[props.y][props.x + 1] === 8 &&
    (props.grid[props.y - 1][props.x + 1] === 1 ||
      props.grid[props.y - 1][props.x + 1] === 0);

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
    return (
      <Icon name="outerCorner" size={gridSize * 1.1} direction="topRight" />
    );
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
      {TopRightOuterCorner(props.grid, props.y, props.x, gridSize * 1.1)}
      {TopLeftOuterCorner(props.grid, props.y, props.x, gridSize * 1.1)}
      {BottomRightOuterCorner(props.grid, props.y, props.x, gridSize * 1.1)}
      {BottomLeftOuterCorner(props.grid, props.y, props.x, gridSize * 1.1)}
      {BottomWall(props.grid, props.y, props.x, gridSize * 1.1)}
      {TopWall(props.grid, props.y, props.x, gridSize * 1.1)}
      {LeftWall(props.grid, props.y, props.x, gridSize * 1.1)}
      {RightWall(props.grid, props.y, props.x, gridSize * 1.1)}
      {TopLeftInnerCorner(props.grid, props.y, props.x, gridSize * 1.1)}
      {TopRightInnerCorner(props.grid, props.y, props.x, gridSize * 1.1)}
      {BottomLeftInnerCorner(props.grid, props.y, props.x, gridSize * 1.1)}
      {BottomRightInnerCorner(props.grid, props.y, props.x, gridSize * 1.1)}
      {BottomDoubleWall(props.grid, props.y, props.x, gridSize * 1.1)}
      {TopDoubleWall(props.grid, props.y, props.x, gridSize * 1.1)}
      {LeftDoubleWall(props.grid, props.y, props.x, gridSize * 1.1)}
      {RightDoubleWall(props.grid, props.y, props.x, gridSize * 1.1)}

      {innerDoubleCornerTopLeft ? (
        <Icon
          name="doubleInnerCorner"
          size={gridSize * 1.1}
          direction="topLeft"
        />
      ) : (
        <></>
      )}
      {innerDoubleCornerTopRight ? (
        <Icon
          name="doubleInnerCorner"
          size={gridSize * 1.1}
          direction="topRight"
        />
      ) : (
        <></>
      )}
      {innerDoubleCornerBottomRight ? (
        <Icon
          name="doubleInnerCorner"
          size={gridSize * 1.1}
          direction="bottomRight"
        />
      ) : (
        <></>
      )}
      {innerDoubleCornerBottomLeft ? (
        <Icon
          name="doubleInnerCorner"
          size={gridSize * 1.1}
          direction="bottomLeft"
        />
      ) : (
        <></>
      )}
      {innerCornerWallLeftTopRight ? (
        <Icon
          name="innerCornerWallLeft"
          size={gridSize * 1.1}
          direction="topRight"
        />
      ) : (
        <></>
      )}
      {innerCornerWallRightTopLeft ? (
        <Icon
          name="innerCornerWallRight"
          size={gridSize * 1.1}
          direction="topLeft"
        />
      ) : (
        <></>
      )}
      {innerCornerWallRightBottomRight ? (
        <Icon
          name="innerCornerWallRight"
          size={gridSize * 1.1}
          direction="bottomRight"
        />
      ) : (
        <></>
      )}
      {innerCornerWallLeftBottomLeft ? (
        <Icon
          name="innerCornerWallLeft"
          size={gridSize * 1.1}
          direction="bottomLeft"
        />
      ) : (
        <></>
      )}
      {innerCornerWallRightBottomLeft ? (
        <Icon
          name="innerCornerWallRight"
          size={gridSize * 1.1}
          direction="bottomLeft"
        />
      ) : (
        <></>
      )}
      {innerCornerWallRightTopRigth ? (
        <Icon
          name="innerCornerWallRight"
          size={gridSize * 1.1}
          direction="topRight"
        />
      ) : (
        <></>
      )}
      {innerCornerWallLeftBottomRight ? (
        <Icon
          name="innerCornerWallLeft"
          size={gridSize * 1.1}
          direction="bottomRight"
        />
      ) : (
        <></>
      )}
      {innerCornerWallLeftTopLeft ? (
        <Icon
          name="innerCornerWallLeft"
          size={gridSize * 1.1}
          direction="topLeft"
        />
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
