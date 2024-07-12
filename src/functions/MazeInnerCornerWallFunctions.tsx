import Icon from '../components/icons/Icon';

// WALL LEFT

// ###
// ##_
// _#_
export function TopRightInnerCornerWallLeft(
  grid: number[][],
  y: number,
  x: number,
  size: number,
) {
  const currentPossitions: boolean = grid[y][x] === 8;
  const gridRestrictions: boolean =
    currentPossitions &&
    y < grid.length - 1 &&
    y >= 0 &&
    x >= 0 &&
    x < grid[0].length - 1;
  const tangentCells: boolean =
    gridRestrictions &&
    grid[y][x - 1] === 8 &&
    grid[y][x + 1] === 8 &&
    grid[y + 1][x] === 7 &&
    (grid[y + 1][x - 1] === 1 || grid[y + 1][x - 1] === 0);

  return currentPossitions && gridRestrictions && tangentCells ? (
    <Icon name="innerCornerWallLeft" size={size * 1.1} direction="topRight" />
  ) : (
    <></>
  );
}

// _#_
// _##
// ###
export function BottomLeftInnerCornerWallLeft(
  grid: number[][],
  y: number,
  x: number,
  size: number,
) {
  const currentPossitions: boolean = grid[y][x] === 8;
  const gridRestrictions: boolean =
    currentPossitions &&
    y <= grid.length - 1 &&
    y > 0 &&
    x > 0 &&
    x < grid[0].length - 1;
  const tangentCells: boolean =
    gridRestrictions &&
    grid[y][x - 1] === 8 &&
    grid[y][x + 1] === 8 &&
    grid[y - 1][x] === 7 &&
    (grid[y - 1][x + 1] === 1 || grid[y - 1][x + 1] === 0);

  return currentPossitions && gridRestrictions && tangentCells ? (
    <Icon name="innerCornerWallLeft" size={size * 1.1} direction="bottomLeft" />
  ) : (
    <></>
  );
}

// _##
// ###
// __#
export function BottomRightInnerCornerWallLeft(
  grid: number[][],
  y: number,
  x: number,
  size: number,
) {
  const currentPossitions: boolean = grid[y][x] === 8;
  const gridRestrictions: boolean =
    currentPossitions &&
    y < grid.length - 1 &&
    y > 0 &&
    x > 0 &&
    x <= grid[0].length - 1;
  const tangentCells: boolean =
    gridRestrictions &&
    grid[y - 1][x] === 8 &&
    grid[y + 1][x] === 8 &&
    grid[y][x - 1] === 7 &&
    (grid[y - 1][x - 1] === 1 || grid[y - 1][x - 1] === 0);

  return currentPossitions && gridRestrictions && tangentCells ? (
    <Icon
      name="innerCornerWallLeft"
      size={size * 1.1}
      direction="bottomRight"
    />
  ) : (
    <></>
  );
}

// #__
// ###
// ##_
export function TopLeftInnerCornerWallLeft(
  grid: number[][],
  y: number,
  x: number,
  size: number,
) {
  const currentPossitions: boolean = grid[y][x] === 8;
  const gridRestrictions: boolean =
    currentPossitions &&
    y < grid.length - 1 &&
    y > 0 &&
    x >= 0 &&
    x < grid[0].length - 1;
  const tangentCells: boolean =
    gridRestrictions &&
    grid[y - 1][x] === 8 &&
    grid[y + 1][x] === 8 &&
    grid[y][x + 1] === 7 &&
    (grid[y + 1][x + 1] === 1 || grid[y + 1][x + 1] === 0);

  return currentPossitions && gridRestrictions && tangentCells ? (
    <Icon name="innerCornerWallLeft" size={size * 1.1} direction="topLeft" />
  ) : (
    <></>
  );
}

// WALL Right

// __#
// ###
// _##
export function TopRightInnerCornerWallRight(
  grid: number[][],
  y: number,
  x: number,
  size: number,
) {
  const currentPossitions: boolean = grid[y][x] === 8;
  const gridRestrictions: boolean =
    currentPossitions &&
    y < grid.length - 1 &&
    y > 0 &&
    x > 0 &&
    x <= grid[0].length - 1;
  const tangentCells: boolean =
    gridRestrictions &&
    grid[y - 1][x] === 8 &&
    grid[y + 1][x] === 8 &&
    grid[y][x - 1] === 7 &&
    (grid[y + 1][x - 1] === 1 || grid[y + 1][x - 1] === 0);

  return currentPossitions && gridRestrictions && tangentCells ? (
    <Icon name="innerCornerWallRight" size={size * 1.1} direction="topRight" />
  ) : (
    <></>
  );
}

// ##_
// ###
// #__
export function BottomLeftInnerCornerWallRight(
  grid: number[][],
  y: number,
  x: number,
  size: number,
) {
  const currentPossitions: boolean = grid[y][x] === 8;
  const gridRestrictions: boolean =
    currentPossitions &&
    y < grid.length - 1 &&
    y > 0 &&
    x >= 0 &&
    x < grid[0].length - 1;
  const tangentCells: boolean =
    gridRestrictions &&
    grid[y - 1][x] === 8 &&
    grid[y + 1][x] === 8 &&
    grid[y][x + 1] === 7 &&
    (grid[y - 1][x + 1] === 1 || grid[y - 1][x + 1] === 0);

  return currentPossitions && gridRestrictions && tangentCells ? (
    <Icon
      name="innerCornerWallRight"
      size={size * 1.1}
      direction="bottomLeft"
    />
  ) : (
    <></>
  );
}

// _#_
// ##_
// ###
export function BottomRightInnerCornerWallRight(
  grid: number[][],
  y: number,
  x: number,
  size: number,
) {
  const currentPossitions: boolean = grid[y][x] === 8;
  const gridRestrictions: boolean =
    currentPossitions &&
    y <= grid.length - 1 &&
    y > 0 &&
    x > 0 &&
    x < grid[0].length - 1;
  const tangentCells: boolean =
    gridRestrictions &&
    grid[y][x - 1] === 8 &&
    grid[y][x + 1] === 8 &&
    grid[y - 1][x] === 7 &&
    (grid[y - 1][x - 1] === 1 || grid[y - 1][x - 1] === 0);

  return currentPossitions && gridRestrictions && tangentCells ? (
    <Icon
      name="innerCornerWallRight"
      size={size * 1.1}
      direction="bottomRight"
    />
  ) : (
    <></>
  );
}

// ####
// _##
// _#_
export function TopLeftInnerCornerWallRight(
  grid: number[][],
  y: number,
  x: number,
  size: number,
) {
  const currentPossitions: boolean = grid[y][x] === 8;
  const gridRestrictions: boolean =
    currentPossitions &&
    y < grid.length - 1 &&
    y >= 0 &&
    x >= 0 &&
    x < grid[0].length - 1;
  const tangentCells: boolean =
    gridRestrictions &&
    grid[y][x - 1] === 8 &&
    grid[y][x + 1] === 8 &&
    grid[y + 1][x] === 7 &&
    (grid[y + 1][x + 1] === 1 || grid[y + 1][x + 1] === 0);

  return currentPossitions && gridRestrictions && tangentCells ? (
    <Icon name="innerCornerWallRight" size={size * 1.1} direction="topLeft" />
  ) : (
    <></>
  );
}
