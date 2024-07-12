import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import PacMan from '../mazes/Pac-Man';
import GridMaker from '../components/mazeMakers/GridMaker';

const width: number = Dimensions.get('screen').width;
const gameSpeed: number = 100; // швидкість оновлення гри (в мілісекундах)
const step: number = 1;

export default function MapScreen() {
  const gridSize = width / PacMan[0].length;

  const [grid, setGrid] = useState<number[][]>(PacMan);
  const [position, setPosition] = useState({x: 13, y: 23});
  const [direction, setDirection] = useState<
    'up' | 'down' | 'left' | 'right' | null
  >(null);
  const [nextDirection, setNextDirection] = useState<
    'up' | 'down' | 'left' | 'right' | null
  >(null);

  const requestRef = useRef<number>(0);
  const previousTimeRef = useRef<number>(0);

  useEffect(() => {
    const movePacman = (time: number) => {
      if (previousTimeRef.current !== undefined) {
        const deltaTime = time - previousTimeRef.current;

        if (deltaTime > gameSpeed) {
          setPosition(prevPosition => {
            let newPosition = {...prevPosition};

            if (newPosition.x < 0) {
              newPosition.x = grid[0].length;
            } else if (newPosition.x > grid[0].length - 1) {
              newPosition.x = 0;
            }
            if (nextDirection) {
              // Спроба повороту в nextDirection
              let newNextPosition = getNextPosition(
                prevPosition,
                nextDirection,
              );
              if (!checkCollision(newNextPosition)) {
                setDirection(nextDirection);
                setNextDirection(null);
                newPosition = newNextPosition;
              }
            }

            // Переміщення в поточному напрямку
            newPosition = getNextPosition(newPosition, direction);
            if (checkCollision(newPosition)) {
              return prevPosition;
            }

            return newPosition;
          });

          previousTimeRef.current = time;
        }
      }
      requestRef.current = requestAnimationFrame(movePacman);
    };

    requestRef.current = requestAnimationFrame(movePacman);

    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, [direction, nextDirection]);

  useEffect(() => {
    // Негайне оновлення після зміни напряму
    if (direction) {
      setPosition(prevPosition => {
        let newPosition = {...prevPosition};

        newPosition = getNextPosition(newPosition, direction);
        if (!checkCollision(newPosition)) {
          return newPosition;
        }
        return prevPosition;
      });
    }
  }, [direction]);

  const getNextPosition = (
    position: {x: number; y: number},
    dir: 'up' | 'down' | 'left' | 'right' | null,
  ) => {
    let newPosition = {...position};
    if (dir === 'up') newPosition.y -= step;
    if (dir === 'down') newPosition.y += step;
    if (dir === 'left') newPosition.x -= step;
    if (dir === 'right') newPosition.x += step;
    return newPosition;
  };

  const checkCollision = (newPosition: {x: number; y: number}) => {
    // console.log(newPosition);

    return (
      grid[newPosition.y][newPosition.x] === 7 ||
      grid[newPosition.y][newPosition.x] === 8
    );
  };

  const handleDirectionChange = (
    newDirection: 'up' | 'down' | 'left' | 'right',
  ) => {
    if (direction) {
      setNextDirection(newDirection);
    } else {
      setDirection(newDirection);
    }
  };

  return (
    <>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
        }}>
        <GridMaker grid={grid} />
        <View
          style={{
            width: gridSize,
            height: gridSize,
            backgroundColor: 'yellow',
            position: 'absolute',
            top: gridSize * position.y,
            left: gridSize * position.x,
            borderRadius: gridSize,
          }}></View>
      </View>
      <Text>{direction}</Text>
      <Text>{nextDirection}</Text>

      <View style={styles.container}>
        <View style={styles.controls}>
          <TouchableOpacity
            style={{
              width: width * 0.25,
              height: width * 0.25,
              position: 'absolute',
              top: 0,
              left: width * 0.25,
              backgroundColor: '#000',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => handleDirectionChange('up')}>
            <Text>Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: width * 0.25,
              height: width * 0.25,
              position: 'absolute',
              bottom: 0,
              left: width * 0.25,
              backgroundColor: '#000',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => handleDirectionChange('down')}>
            <Text>Down</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: width * 0.25,
              height: width * 0.25,
              position: 'absolute',
              bottom: width * 0.125,
              left: 0,
              backgroundColor: '#000',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => handleDirectionChange('left')}>
            <Text>Left</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: width * 0.25,
              height: width * 0.25,
              position: 'absolute',
              bottom: width * 0.125,
              right: 0,
              backgroundColor: '#000',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => handleDirectionChange('right')}>
            <Text>Right</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  controls: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 50,
    width: width * 0.75,
    height: width * 0.5,
  },
});
