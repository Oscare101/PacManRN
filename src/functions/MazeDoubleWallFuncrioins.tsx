import Icon from '../components/icons/Icon';

// ___
// ###
// ###
export function BottomDoubleWall(
  grid: number[][],
  y: number,
  x: number,
  size: number,
) {
  const currentPossitions: boolean = grid[y][x] === 8;
  const gridRestrictions: boolean =
    currentPossitions &&
    y < grid.length - 1 &&
    x >= 0 &&
    x <= grid[0].length - 1;
  const tangentCells: boolean =
    gridRestrictions &&
    (x === grid[0].length - 1
      ? true
      : grid[y][x + 1] === 8 || grid[y][x + 1] === 9) &&
    (x === 0 ? true : grid[y][x - 1] === 8 || grid[y][x - 1] === 9) &&
    (grid[y + 1][x] === 1 || grid[y + 1][x] === 0);

  return currentPossitions && gridRestrictions && tangentCells ? (
    <Icon name="doubleWall" size={size * 1.1} direction="bottom" />
  ) : (
    <></>
  );
}

// ###
// ###
// ___
export function TopDoubleWall(
  grid: number[][],
  y: number,
  x: number,
  size: number,
) {
  const currentPossitions: boolean = grid[y][x] === 8;
  const gridRestrictions: boolean =
    currentPossitions && y > 0 && x >= 0 && x <= grid[0].length - 1;
  const tangentCells: boolean =
    gridRestrictions &&
    (x === grid[0].length - 1
      ? true
      : grid[y][x + 1] === 8 || grid[y][x + 1] === 9) &&
    (x === 0 ? true : grid[y][x - 1] === 8 || grid[y][x - 1] === 9) &&
    (grid[y - 1][x] === 1 || grid[y - 1][x] === 0);

  return currentPossitions && gridRestrictions && tangentCells ? (
    <Icon name="doubleWall" size={size * 1.1} direction="top" />
  ) : (
    <></>
  );
}

// ##_
// ##_
// ##_
export function LeftDoubleWall(
  grid: number[][],
  y: number,
  x: number,
  size: number,
) {
  const currentPossitions: boolean = grid[y][x] === 8;
  const gridRestrictions: boolean =
    currentPossitions && x > 0 && y > 0 && y < grid.length - 1;
  const tangentCells: boolean =
    gridRestrictions &&
    (grid[y + 1][x] === 8 || grid[y + 1][x] === 9) &&
    (grid[y - 1][x] === 8 || grid[y - 1][x] === 9) &&
    (grid[y][x - 1] === 1 || grid[y][x - 1] === 0);

  return currentPossitions && gridRestrictions && tangentCells ? (
    <Icon name="doubleWall" size={size * 1.1} direction="left" />
  ) : (
    <></>
  );
}

// _##
// _##
// _##
export function RightDoubleWall(
  grid: number[][],
  y: number,
  x: number,
  size: number,
) {
  const currentPossitions: boolean = grid[y][x] === 8;
  const gridRestrictions: boolean =
    currentPossitions && x < grid[0].length - 1 && y > 0 && y < grid.length - 1;
  const tangentCells: boolean =
    gridRestrictions &&
    (grid[y + 1][x] === 8 || grid[y + 1][x] === 9) &&
    (grid[y - 1][x] === 8 || grid[y - 1][x] === 9) &&
    (grid[y][x + 1] === 1 || grid[y][x + 1] === 0);

  return currentPossitions && gridRestrictions && tangentCells ? (
    <Icon name="doubleWall" size={size * 1.1} direction="right" />
  ) : (
    <></>
  );
}
