import Icon from '../components/icons/Icon';

// ###
// #__
// ###
export function ClosedWallRight(
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
    x < grid[0].length - 1;
  const tangentCells: boolean =
    gridRestrictions && grid[y][x - 1] === 6 && grid[y][x + 1] === 8;

  return currentPossitions && gridRestrictions && tangentCells ? (
    <Icon name="closedWallRight" size={size * 1.1} direction="bottom" />
  ) : (
    <></>
  );
}

// ###
// __#
// ###
export function ClosedWallLeft(
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
    x < grid[0].length - 1;
  const tangentCells: boolean =
    gridRestrictions && grid[y][x - 1] === 8 && grid[y][x + 1] === 6;

  return currentPossitions && gridRestrictions && tangentCells ? (
    <Icon name="closedWallLeft" size={size * 1.1} direction="bottom" />
  ) : (
    <></>
  );
}
