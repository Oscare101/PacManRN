import Icon from '../components/icons/Icon';

// ___
// ___
// ###
export function Door(grid: number[][], y: number, x: number, size: number) {
  const currentPossitions: boolean = grid[y][x] === 6;
  const gridRestrictions: boolean =
    currentPossitions &&
    y < grid.length - 1 &&
    y > 0 &&
    x > 0 &&
    x < grid[0].length - 1;
  const tangentCells: boolean = gridRestrictions;

  return currentPossitions && gridRestrictions && tangentCells ? (
    <Icon name="door" size={size * 1.1} direction="bottom" />
  ) : (
    <></>
  );
}
