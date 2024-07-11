import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import MapScreen from './src/screens/MapScreen';

const grid = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const gridSize = 30; // розмір клітинки
const gameSpeed = 200; // швидкість оновлення гри (в мілісекундах)

export default function App() {
  const [position, setPosition] = useState({x: 1, y: 5});
  const [direction, setDirection] = useState<
    'up' | 'down' | 'left' | 'right' | null
  >(null);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Функція для переміщення Pacman
    const movePacman = () => {
      setPosition(prevPosition => {
        let newPosition = {...prevPosition};
        if (direction === 'up') newPosition.y -= 1;
        if (direction === 'down') newPosition.y += 1;
        if (direction === 'left') newPosition.x -= 1;
        if (direction === 'right') newPosition.x += 1;

        // Перевірка колізій зі стінами (додай свій лабіринт тут)
        if (checkCollision(newPosition)) {
          return prevPosition; // якщо є колізія, не оновлюємо позицію
        }

        return newPosition;
      });
    };

    if (direction) {
      intervalRef.current = setInterval(movePacman, gameSpeed);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [direction]);

  const checkCollision = (newPosition: {x: number; y: number}) => {
    console.log(newPosition);

    return grid[newPosition.y][newPosition.x] === 1;
  };

  const handleDirectionChange = (
    newDirection: 'up' | 'down' | 'left' | 'right',
  ) => {
    setDirection(newDirection);
  };

  return <MapScreen />;
  return (
    <>
      <View style={{flexDirection: 'column'}}>
        {grid.map((row: any, XIndex: number) => (
          <View key={XIndex} style={{flexDirection: 'row'}}>
            {row.map((item: any, YIndex: number) => (
              <View
                key={YIndex}
                style={{
                  width: gridSize,
                  height: gridSize,
                  backgroundColor:
                    position.y === XIndex && position.x === YIndex
                      ? 'yellow'
                      : item
                      ? '#fff'
                      : '#000',
                }}>
                <Text>
                  {XIndex}
                  {YIndex}
                </Text>
              </View>
            ))}
          </View>
        ))}
      </View>
      <Text>
        {position.x}
        {position.y}
      </Text>
      <View style={styles.container}>
        <View style={styles.controls}>
          <TouchableOpacity onPress={() => handleDirectionChange('up')}>
            <Text>Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDirectionChange('down')}>
            <Text>Down</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDirectionChange('left')}>
            <Text>Left</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDirectionChange('right')}>
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
  pacman: {
    width: gridSize,
    height: gridSize,
    backgroundColor: 'yellow',
    position: 'absolute',
  },
  controls: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 50,
  },
});
