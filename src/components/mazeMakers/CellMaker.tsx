import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from '../icons/Icon';

const width = Dimensions.get('screen').width;

export default function CellMaker(props: {grid: any; y: number; x: number}) {
  const gridSize = width / props.grid[0].length;

  // OUTER CORNERS

  const topRight =
    (props.grid[props.y][props.x] === 7 ||
      props.grid[props.y][props.x] === 8) &&
    props.y > 0 &&
    props.x < props.grid[0].length - 1 &&
    (props.grid[props.y - 1][props.x] === 1 ||
      props.grid[props.y - 1][props.x] === 0) &&
    (props.grid[props.y - 1][props.x + 1] === 1 ||
      props.grid[props.y - 1][props.x + 1] === 0) &&
    (props.grid[props.y][props.x + 1] === 1 ||
      props.grid[props.y][props.x + 1] === 0);

  const topLeft =
    (props.grid[props.y][props.x] === 7 ||
      props.grid[props.y][props.x] === 8) &&
    props.y > 0 &&
    props.x > 0 &&
    (props.grid[props.y - 1][props.x] === 1 ||
      props.grid[props.y - 1][props.x] === 0) &&
    (props.grid[props.y - 1][props.x - 1] === 1 ||
      props.grid[props.y - 1][props.x - 1] === 0) &&
    (props.grid[props.y][props.x - 1] === 1 ||
      props.grid[props.y][props.x - 1] === 0);

  const bottomRight =
    (props.grid[props.y][props.x] === 7 ||
      props.grid[props.y][props.x] === 8) &&
    props.y < props.grid.length - 1 &&
    props.x < props.grid[0].length - 1 &&
    (props.grid[props.y + 1][props.x] === 1 ||
      props.grid[props.y + 1][props.x] === 0) &&
    (props.grid[props.y + 1][props.x + 1] === 1 ||
      props.grid[props.y + 1][props.x + 1] === 0) &&
    (props.grid[props.y][props.x + 1] === 1 ||
      props.grid[props.y][props.x + 1] === 0);

  const bottomLeft =
    (props.grid[props.y][props.x] === 7 ||
      props.grid[props.y][props.x] === 8) &&
    props.y < props.grid.length - 1 &&
    props.x > 0 &&
    (props.grid[props.y + 1][props.x] === 1 ||
      props.grid[props.y + 1][props.x] === 0) &&
    (props.grid[props.y + 1][props.x - 1] === 1 ||
      props.grid[props.y + 1][props.x - 1] === 0) &&
    (props.grid[props.y][props.x - 1] === 1 ||
      props.grid[props.y][props.x - 1] === 0);

  // WALLS

  const bottomWall =
    props.grid[props.y][props.x] === 7 &&
    props.y < props.grid.length - 1 &&
    props.x > 0 &&
    props.x < props.grid[0].length - 1 &&
    (props.grid[props.y][props.x + 1] === 7 ||
      props.grid[props.y][props.x + 1] === 8) &&
    (props.grid[props.y][props.x - 1] === 7 ||
      props.grid[props.y][props.x - 1] === 8) &&
    (props.grid[props.y + 1][props.x] === 1 ||
      props.grid[props.y + 1][props.x] === 0);

  const topWall =
    props.grid[props.y][props.x] === 7 &&
    props.y > 0 &&
    props.x > 0 &&
    props.x < props.grid[0].length - 1 &&
    (props.grid[props.y][props.x + 1] === 7 ||
      props.grid[props.y][props.x + 1] === 8) &&
    (props.grid[props.y][props.x - 1] === 7 ||
      props.grid[props.y][props.x - 1] === 8) &&
    (props.grid[props.y - 1][props.x] === 1 ||
      props.grid[props.y - 1][props.x] === 0);

  const leftWall =
    props.grid[props.y][props.x] === 7 &&
    props.x > 0 &&
    props.y > 0 &&
    props.y < props.grid.length - 1 &&
    (props.grid[props.y + 1][props.x] === 7 ||
      props.grid[props.y + 1][props.x] === 8) &&
    (props.grid[props.y - 1][props.x] === 7 ||
      props.grid[props.y - 1][props.x] === 8) &&
    (props.grid[props.y][props.x - 1] === 1 ||
      props.grid[props.y][props.x - 1] === 0);

  const rightWall =
    props.grid[props.y][props.x] === 7 &&
    props.x < props.grid[0].length - 1 &&
    props.y > 0 &&
    props.y < props.grid.length - 1 &&
    (props.grid[props.y + 1][props.x] === 7 ||
      props.grid[props.y + 1][props.x] === 8) &&
    (props.grid[props.y - 1][props.x] === 7 ||
      props.grid[props.y - 1][props.x] === 8) &&
    (props.grid[props.y][props.x + 1] === 1 ||
      props.grid[props.y][props.x + 1] === 0);

  // INNER CORNERS

  const innerCornerTopLeft =
    props.grid[props.y][props.x] === 7 &&
    props.y < props.grid.length - 1 &&
    props.x < props.grid[0].length - 1 &&
    props.grid[props.y + 1][props.x] === 7 &&
    props.grid[props.y][props.x + 1] === 7 &&
    (props.grid[props.y + 1][props.x + 1] === 1 ||
      props.grid[props.y + 1][props.x + 1] === 0);

  const innerCornerTopRight =
    props.grid[props.y][props.x] === 7 &&
    props.y < props.grid.length - 1 &&
    props.x > 0 &&
    props.grid[props.y + 1][props.x] === 7 &&
    props.grid[props.y][props.x - 1] === 7 &&
    (props.grid[props.y + 1][props.x - 1] === 1 ||
      props.grid[props.y + 1][props.x - 1] === 0);

  const innerCornerBottomRight =
    props.grid[props.y][props.x] === 7 &&
    props.y > 0 &&
    props.x > 0 &&
    props.grid[props.y - 1][props.x] === 7 &&
    props.grid[props.y][props.x - 1] === 7 &&
    (props.grid[props.y - 1][props.x - 1] === 1 ||
      props.grid[props.y - 1][props.x - 1] === 0);

  const innerCornerBottomLeft =
    props.grid[props.y][props.x] === 7 &&
    props.y > 0 &&
    props.x < props.grid[0].length - 1 &&
    props.grid[props.y - 1][props.x] === 7 &&
    props.grid[props.y][props.x + 1] === 7 &&
    (props.grid[props.y - 1][props.x + 1] === 1 ||
      props.grid[props.y - 1][props.x + 1] === 0);

  // DOUBLE WALL

  const bottomDoubleWall =
    props.grid[props.y][props.x] === 8 &&
    props.y < props.grid.length - 1 &&
    props.x > 0 &&
    props.x < props.grid[0].length - 1 &&
    props.grid[props.y][props.x + 1] === 8 &&
    props.grid[props.y][props.x - 1] === 8 &&
    (props.grid[props.y + 1][props.x] === 1 ||
      props.grid[props.y + 1][props.x] === 0);

  const topDoubleWall =
    props.grid[props.y][props.x] === 8 &&
    props.y > 0 &&
    props.x > 0 &&
    props.x < props.grid[0].length - 1 &&
    props.grid[props.y][props.x + 1] === 8 &&
    props.grid[props.y][props.x - 1] === 8 &&
    (props.grid[props.y - 1][props.x] === 1 ||
      props.grid[props.y - 1][props.x] === 0);

  const leftDoubleWall =
    props.grid[props.y][props.x] === 8 &&
    props.x > 0 &&
    props.y > 0 &&
    props.y < props.grid.length - 1 &&
    props.grid[props.y + 1][props.x] === 8 &&
    props.grid[props.y - 1][props.x] === 8 &&
    (props.grid[props.y][props.x - 1] === 1 ||
      props.grid[props.y][props.x - 1] === 0);

  const rightDoubleWall =
    props.grid[props.y][props.x] === 8 &&
    props.x < props.grid[0].length - 1 &&
    props.y > 0 &&
    props.y < props.grid.length - 1 &&
    props.grid[props.y + 1][props.x] === 8 &&
    props.grid[props.y - 1][props.x] === 8 &&
    (props.grid[props.y][props.x + 1] === 1 ||
      props.grid[props.y][props.x + 1] === 0);

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

  return (
    <View
      style={{
        width: gridSize,
        height: gridSize,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {topRight ? (
        <Icon name="outerCorner" size={gridSize * 1.1} direction="topRight" />
      ) : (
        <></>
      )}
      {topLeft ? (
        <Icon name="outerCorner" size={gridSize * 1.1} direction="topLeft" />
      ) : (
        <></>
      )}
      {bottomRight ? (
        <Icon
          name="outerCorner"
          size={gridSize * 1.1}
          direction="bottomRight"
        />
      ) : (
        <></>
      )}
      {bottomLeft ? (
        <Icon name="outerCorner" size={gridSize * 1.1} direction="bottomLeft" />
      ) : (
        <></>
      )}
      {bottomWall ? (
        <Icon name="wall" size={gridSize * 1.1} direction="bottom" />
      ) : (
        <></>
      )}
      {topWall ? (
        <Icon name="wall" size={gridSize * 1.1} direction="up" />
      ) : (
        <></>
      )}
      {leftWall ? (
        <Icon name="wall" size={gridSize * 1.1} direction="left" />
      ) : (
        <></>
      )}
      {rightWall ? (
        <Icon name="wall" size={gridSize * 1.1} direction="right" />
      ) : (
        <></>
      )}
      {innerCornerTopLeft ? (
        <Icon name="innerCorner" size={gridSize * 1.1} direction="topLeft" />
      ) : (
        <></>
      )}
      {innerCornerTopRight ? (
        <Icon name="innerCorner" size={gridSize * 1.1} direction="topRight" />
      ) : (
        <></>
      )}
      {innerCornerBottomRight ? (
        <Icon
          name="innerCorner"
          size={gridSize * 1.1}
          direction="bottomRight"
        />
      ) : (
        <></>
      )}
      {innerCornerBottomLeft ? (
        <Icon name="innerCorner" size={gridSize * 1.1} direction="bottomLeft" />
      ) : (
        <></>
      )}
      {bottomDoubleWall ? (
        <Icon name="doubleWall" size={gridSize * 1.1} direction="bottom" />
      ) : (
        <></>
      )}
      {topDoubleWall ? (
        <Icon name="doubleWall" size={gridSize * 1.1} direction="up" />
      ) : (
        <></>
      )}
      {leftDoubleWall ? (
        <Icon name="doubleWall" size={gridSize * 1.1} direction="left" />
      ) : (
        <></>
      )}
      {rightDoubleWall ? (
        <Icon name="doubleWall" size={gridSize * 1.1} direction="right" />
      ) : (
        <></>
      )}
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
