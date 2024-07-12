import Icon from '../components/icons/Icon';

// ___
// _##
// _#_
export function TopLeftInnerCorner(
  grid: number[][],
  y: number,
  x: number,
  size: number,
) {
  const currentPossitions: boolean = grid[y][x] === 7;
  const gridRestrictions: boolean =
    currentPossitions && y < grid.length - 1 && x < grid[0].length - 1;
  const tangentCells: boolean =
    gridRestrictions &&
    grid[y + 1][x] === 7 &&
    grid[y][x + 1] === 7 &&
    (grid[y + 1][x + 1] === 1 || grid[y + 1][x + 1] === 0);

  return currentPossitions && gridRestrictions && tangentCells ? (
    <Icon name="innerCorner" size={size} direction="topLeft" />
  ) : (
    <></>
  );
}

// ___
// ##_
// _#_
export function TopRightInnerCorner(
  grid: number[][],
  y: number,
  x: number,
  size: number,
) {
  const currentPossitions: boolean = grid[y][x] === 7;
  const gridRestrictions: boolean =
    currentPossitions && y < grid.length - 1 && x > 0;
  const tangentCells: boolean =
    gridRestrictions &&
    grid[y + 1][x] === 7 &&
    grid[y][x - 1] === 7 &&
    (grid[y + 1][x - 1] === 1 || grid[y + 1][x - 1] === 0);

  return currentPossitions && gridRestrictions && tangentCells ? (
    <Icon name="innerCorner" size={size} direction="topRight" />
  ) : (
    <></>
  );
}

// _#_
// ##_
// ___
export function BottomRightInnerCorner(
  grid: number[][],
  y: number,
  x: number,
  size: number,
) {
  const currentPossitions: boolean = grid[y][x] === 7;
  const gridRestrictions: boolean = currentPossitions && y > 0 && x > 0;
  const tangentCells: boolean =
    gridRestrictions &&
    grid[y - 1][x] === 7 &&
    grid[y][x - 1] === 7 &&
    (grid[y - 1][x - 1] === 1 || grid[y - 1][x - 1] === 0);

  return currentPossitions && gridRestrictions && tangentCells ? (
    <Icon name="innerCorner" size={size} direction="bottomRight" />
  ) : (
    <></>
  );
}

// _#_
// _##
// ___
export function BottomLeftInnerCorner(
  grid: number[][],
  y: number,
  x: number,
  size: number,
) {
  const currentPossitions: boolean = grid[y][x] === 7;
  const gridRestrictions: boolean =
    currentPossitions && y > 0 && x < grid[0].length - 1;
  const tangentCells: boolean =
    gridRestrictions &&
    grid[y - 1][x] === 7 &&
    grid[y][x + 1] === 7 &&
    (grid[y - 1][x + 1] === 1 || grid[y - 1][x + 1] === 0);

  return currentPossitions && gridRestrictions && tangentCells ? (
    <Icon name="innerCorner" size={size} direction="bottomLeft" />
  ) : (
    <></>
  );
}
