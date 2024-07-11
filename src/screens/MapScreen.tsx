import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from '../components/icons/Icon';
import PacMan from '../mazes/Pac-Man';

const width = Dimensions.get('screen').width;

// 8 - double
// 0 - empty
// 1 - coin
// 7 - wall
// 3 - closed

const gridSize = width / PacMan[0].length;

export default function MapScreen() {
  function CellMaker(props: {grid: any; y: number; x: number}) {
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
          <Icon name="outerCorner" size={gridSize} direction="topRight" />
        ) : (
          <></>
        )}
        {topLeft ? (
          <Icon name="outerCorner" size={gridSize} direction="topLeft" />
        ) : (
          <></>
        )}
        {bottomRight ? (
          <Icon name="outerCorner" size={gridSize} direction="bottomRight" />
        ) : (
          <></>
        )}
        {bottomLeft ? (
          <Icon name="outerCorner" size={gridSize} direction="bottomLeft" />
        ) : (
          <></>
        )}
        {bottomWall ? (
          <Icon name="wall" size={gridSize} direction="bottom" />
        ) : (
          <></>
        )}
        {topWall ? <Icon name="wall" size={gridSize} direction="up" /> : <></>}
        {leftWall ? (
          <Icon name="wall" size={gridSize} direction="left" />
        ) : (
          <></>
        )}
        {rightWall ? (
          <Icon name="wall" size={gridSize} direction="right" />
        ) : (
          <></>
        )}
        {innerCornerTopLeft ? (
          <Icon name="innerCorner" size={gridSize} direction="topLeft" />
        ) : (
          <></>
        )}
        {innerCornerTopRight ? (
          <Icon name="innerCorner" size={gridSize} direction="topRight" />
        ) : (
          <></>
        )}
        {innerCornerBottomRight ? (
          <Icon name="innerCorner" size={gridSize} direction="bottomRight" />
        ) : (
          <></>
        )}
        {innerCornerBottomLeft ? (
          <Icon name="innerCorner" size={gridSize} direction="bottomLeft" />
        ) : (
          <></>
        )}
        {bottomDoubleWall ? (
          <Icon name="doubleWall" size={gridSize} direction="bottom" />
        ) : (
          <></>
        )}
        {topDoubleWall ? (
          <Icon name="doubleWall" size={gridSize} direction="up" />
        ) : (
          <></>
        )}
        {leftDoubleWall ? (
          <Icon name="doubleWall" size={gridSize} direction="left" />
        ) : (
          <></>
        )}
        {rightDoubleWall ? (
          <Icon name="doubleWall" size={gridSize} direction="right" />
        ) : (
          <></>
        )}
        {innerDoubleCornerTopLeft ? (
          <Icon name="doubleInnerCorner" size={gridSize} direction="topLeft" />
        ) : (
          <></>
        )}
        {innerDoubleCornerTopRight ? (
          <Icon name="doubleInnerCorner" size={gridSize} direction="topRight" />
        ) : (
          <></>
        )}
        {innerDoubleCornerBottomRight ? (
          <Icon
            name="doubleInnerCorner"
            size={gridSize}
            direction="bottomRight"
          />
        ) : (
          <></>
        )}
        {innerDoubleCornerBottomLeft ? (
          <Icon
            name="doubleInnerCorner"
            size={gridSize}
            direction="bottomLeft"
          />
        ) : (
          <></>
        )}
        {innerCornerWallLeftTopRight ? (
          <Icon
            name="innerCornerWallLeft"
            size={gridSize}
            direction="topRight"
          />
        ) : (
          <></>
        )}
        {innerCornerWallRightTopLeft ? (
          <Icon
            name="innerCornerWallRight"
            size={gridSize}
            direction="topLeft"
          />
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
          <Icon
            name="innerCornerWallLeft"
            size={gridSize}
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
        {/* <View
          style={{
            backgroundColor:
              props.grid[props.y][props.x] === 1 ? 'red' : '#000',
            height: '70%',
            width: '70%',
            borderTopRightRadius: topRight ? gridSize / 2 : 0,
            borderTopLeftRadius: topLeft ? gridSize / 2 : 0,
            borderBottomRightRadius: bottomRight ? gridSize / 2 : 0,
            borderBottomLeftRadius: bottomLeft ? gridSize / 2 : 0,
          }}></View> */}
      </View>
    );
  }

  function RowMaker(props: {grid: any; y: number}) {
    return (
      <View style={{flexDirection: 'row'}}>
        {props.grid[props.y].map((cell: any, index: number) => (
          <CellMaker key={index} grid={props.grid} y={props.y} x={index} />
        ))}
      </View>
    );
  }

  function GridMaker(props: {grid: any}) {
    return (
      <View style={{flexDirection: 'column'}}>
        {props.grid.map((row: any, index: number) => (
          <RowMaker key={index} grid={props.grid} y={index} />
        ))}
      </View>
    );
  }

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <GridMaker grid={PacMan} />
    </View>
  );
}

const styles = StyleSheet.create({});
