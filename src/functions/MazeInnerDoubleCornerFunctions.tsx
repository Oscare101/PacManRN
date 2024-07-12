import Icon from '../components/icons/Icon';

// ###
// ###
// ##_
export function TopLeftInnerDoubleCorner(
  grid: number[][],
  y: number,
  x: number,
  size: number,
) {
  const currentPossitions: boolean = grid[y][x] === 8;
  const gridRestrictions: boolean =
    currentPossitions && y < grid.length - 1 && x < grid[0].length - 1;
  const tangentCells: boolean =
    gridRestrictions &&
    grid[y + 1][x] === 8 &&
    grid[y][x + 1] === 8 &&
    (grid[y + 1][x + 1] === 1 || grid[y + 1][x + 1] === 0);

  return currentPossitions && gridRestrictions && tangentCells ? (
    <Icon name="doubleInnerCorner" size={size} direction="topLeft" />
  ) : (
    <></>
  );
}

// ###
// ###
// _##
export function TopRightInnerDoubleCorner(
  grid: number[][],
  y: number,
  x: number,
  size: number,
) {
  const currentPossitions: boolean = grid[y][x] === 8;
  const gridRestrictions: boolean =
    currentPossitions && y < grid.length - 1 && x > 0;
  const tangentCells: boolean =
    gridRestrictions &&
    grid[y + 1][x] === 8 &&
    grid[y][x - 1] === 8 &&
    (grid[y + 1][x - 1] === 1 || grid[y + 1][x - 1] === 0);

  return currentPossitions && gridRestrictions && tangentCells ? (
    <Icon name="doubleInnerCorner" size={size} direction="topRight" />
  ) : (
    <></>
  );
}

// _##
// ###
// ###
export function BottomRightInnerDoubleCorner(
  grid: number[][],
  y: number,
  x: number,
  size: number,
) {
  const currentPossitions: boolean = grid[y][x] === 8;
  const gridRestrictions: boolean = currentPossitions && y > 0 && x > 0;
  const tangentCells: boolean =
    gridRestrictions &&
    grid[y - 1][x] === 8 &&
    grid[y][x - 1] === 8 &&
    (grid[y - 1][x - 1] === 1 || grid[y - 1][x - 1] === 0);

  return currentPossitions && gridRestrictions && tangentCells ? (
    <Icon name="doubleInnerCorner" size={size} direction="bottomRight" />
  ) : (
    <></>
  );
}

// ##_
// ###
// ###
export function BottomLeftInnerDoubleCorner(
  grid: number[][],
  y: number,
  x: number,
  size: number,
) {
  const currentPossitions: boolean = grid[y][x] === 8;
  const gridRestrictions: boolean =
    currentPossitions && y > 0 && x < grid[0].length - 1;
  const tangentCells: boolean =
    gridRestrictions &&
    grid[y - 1][x] === 8 &&
    grid[y][x + 1] === 8 &&
    (grid[y - 1][x + 1] === 1 || grid[y - 1][x + 1] === 0);

  return currentPossitions && gridRestrictions && tangentCells ? (
    <Icon name="doubleInnerCorner" size={size} direction="bottomLeft" />
  ) : (
    <></>
  );
}
