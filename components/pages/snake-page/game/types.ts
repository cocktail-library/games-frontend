export enum TileType {
  EMPTY = 'empty',
  SNAKE = 'snake',
  APPLE = 'apple',
}

export enum Direction {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right'
}

export interface Point {
  x: number;
  y: number;
}

export type Field = TileType[][]
