import Icon from '../components/icons/Icon';

// ___
// ___
// ###
export function BottomWall(
  grid: number[][],
  y: number,
  x: number,
  size: number,
) {
  const currentPossitions: boolean = grid[y][x] === 7;
  const gridRestrictions: boolean =
    currentPossitions && y < grid.length - 1 && x > 0 && x < grid[0].length - 1;
  const tangentCells: boolean =
    gridRestrictions &&
    (grid[y][x + 1] === 7 || grid[y][x + 1] === 8) &&
    (grid[y][x - 1] === 7 || grid[y][x - 1] === 8) &&
    (grid[y + 1][x] === 1 || grid[y + 1][x] === 0);

  return currentPossitions && gridRestrictions && tangentCells ? (
    <Icon name="wall" size={size * 1.1} direction="bottom" />
  ) : (
    <></>
  );
}

// ###
// ___
// ___
export function TopWall(grid: number[][], y: number, x: number, size: number) {
  const currentPossitions: boolean = grid[y][x] === 7;
  const gridRestrictions: boolean =
    currentPossitions && y > 0 && x > 0 && x < grid[0].length - 1;
  const tangentCells: boolean =
    gridRestrictions &&
    (grid[y][x + 1] === 7 || grid[y][x + 1] === 8) &&
    (grid[y][x - 1] === 7 || grid[y][x - 1] === 8) &&
    (grid[y - 1][x] === 1 || grid[y - 1][x] === 0);

  return currentPossitions && gridRestrictions && tangentCells ? (
    <Icon name="wall" size={size * 1.1} direction="top" />
  ) : (
    <></>
  );
}

// #__
// #__
// #__
export function LeftWall(grid: number[][], y: number, x: number, size: number) {
  const currentPossitions: boolean = grid[y][x] === 7;
  const gridRestrictions: boolean =
    currentPossitions && x > 0 && y > 0 && y < grid.length - 1;
  const tangentCells: boolean =
    gridRestrictions &&
    (grid[y + 1][x] === 7 || grid[y + 1][x] === 8) &&
    (grid[y - 1][x] === 7 || grid[y - 1][x] === 8) &&
    (grid[y][x - 1] === 1 || grid[y][x - 1] === 0);

  return currentPossitions && gridRestrictions && tangentCells ? (
    <Icon name="wall" size={size * 1.1} direction="left" />
  ) : (
    <></>
  );
}

// __#
// __#
// __#
export function RightWall(
  grid: number[][],
  y: number,
  x: number,
  size: number,
) {
  const currentPossitions: boolean = grid[y][x] === 7;
  const gridRestrictions: boolean =
    currentPossitions && x < grid[0].length - 1 && y > 0 && y < grid.length - 1;
  const tangentCells: boolean =
    gridRestrictions &&
    (grid[y + 1][x] === 7 || grid[y + 1][x] === 8) &&
    (grid[y - 1][x] === 7 || grid[y - 1][x] === 8) &&
    (grid[y][x + 1] === 1 || grid[y][x + 1] === 0);

  return currentPossitions && gridRestrictions && tangentCells ? (
    <Icon name="wall" size={size * 1.1} direction="right" />
  ) : (
    <></>
  );
}
