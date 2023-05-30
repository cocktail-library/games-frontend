export interface Point {
  x: number;
  y: number;
}

export enum DirectionChange {
  LEFT = -1, // 'left',
  UNSET = 0, // 'unset',
  RIGHT = 1, // 'right',
}
