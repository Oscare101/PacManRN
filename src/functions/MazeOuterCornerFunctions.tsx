import Icon from '../components/icons/Icon';

// _##
// __#
// ___
export function TopRightOuterCorner(
  grid: number[][],
  y: number,
  x: number,
  size: number,
) {
  const currentPossitions: boolean = grid[y][x] === 7 || grid[y][x] === 8;
  const gridRestrictions: boolean =
    currentPossitions && y > 0 && x < grid[0].length - 1;
  const tangentCells: boolean =
    gridRestrictions &&
    (grid[y - 1][x] === 1 || grid[y - 1][x] === 0) &&
    (grid[y - 1][x + 1] === 1 || grid[y - 1][x + 1] === 0) &&
    (grid[y][x + 1] === 1 || grid[y][x + 1] === 0);

  return currentPossitions && gridRestrictions && tangentCells ? (
    <Icon name="outerCorner" size={size} direction="topRight" />
  ) : (
    <></>
  );
}

// ##_
// #__
// ___
export function TopLeftOuterCorner(
  grid: number[][],
  y: number,
  x: number,
  size: number,
) {
  const currentPossitions: boolean = grid[y][x] === 7 || grid[y][x] === 8;
  const gridRestrictions: boolean = currentPossitions && y > 0 && x > 0;
  const tangentCells: boolean =
    gridRestrictions &&
    (grid[y - 1][x] === 1 || grid[y - 1][x] === 0) &&
    (grid[y - 1][x - 1] === 1 || grid[y - 1][x - 1] === 0) &&
    (grid[y][x - 1] === 1 || grid[y][x - 1] === 0);

  return currentPossitions && gridRestrictions && tangentCells ? (
    <Icon name="outerCorner" size={size} direction="topLeft" />
  ) : (
    <></>
  );
}

// ___
// __#
// _##
export function BottomRightOuterCorner(
  grid: number[][],
  y: number,
  x: number,
  size: number,
) {
  const currentPossitions: boolean = grid[y][x] === 7 || grid[y][x] === 8;
  const gridRestrictions: boolean =
    currentPossitions && y < grid.length - 1 && x < grid[0].length - 1;
  const tangentCells: boolean =
    gridRestrictions &&
    (grid[y + 1][x] === 1 || grid[y + 1][x] === 0) &&
    (grid[y + 1][x + 1] === 1 || grid[y + 1][x + 1] === 0) &&
    (grid[y][x + 1] === 1 || grid[y][x + 1] === 0);

  return currentPossitions && gridRestrictions && tangentCells ? (
    <Icon name="outerCorner" size={size} direction="bottomRight" />
  ) : (
    <></>
  );
}

// ___
// #__
// ##_
export function BottomLeftOuterCorner(
  grid: number[][],
  y: number,
  x: number,
  size: number,
) {
  const currentPossitions: boolean = grid[y][x] === 7 || grid[y][x] === 8;
  const gridRestrictions: boolean =
    currentPossitions && y < grid.length - 1 && x > 0;
  const tangentCells: boolean =
    gridRestrictions &&
    (grid[y + 1][x] === 1 || grid[y + 1][x] === 0) &&
    (grid[y + 1][x - 1] === 1 || grid[y + 1][x - 1] === 0) &&
    (grid[y][x - 1] === 1 || grid[y][x - 1] === 0);

  return currentPossitions && gridRestrictions && tangentCells ? (
    <Icon name="outerCorner" size={size} direction="bottomLeft" />
  ) : (
    <></>
  );
}
