import { Direction, Field, Point, TileType } from '@/components/pages/snake-page/game/types'

export class SnakeGameModel {
  private _applePosition: Point | null = null
  private _snake: Point[]
  private _gameEnded = false
  private _isDirectionModified = false

  constructor(private _direction: Direction, private _originalField: Field, snakeHeadPosition: Point) {
    this._snake = [snakeHeadPosition]
    this._applePosition = this.getNewApplePosition()
  }

  private oppositeDirections: Record<Direction, Direction> = {
    [Direction.LEFT]: Direction.RIGHT,
    [Direction.RIGHT]: Direction.LEFT,
    [Direction.UP]: Direction.DOWN,
    [Direction.DOWN]: Direction.UP,
  }

  private applyMoveDirections: Record<Direction, (point: Point, fieldHeight: number, fieldWidth: number) => Point> = {
    [Direction.LEFT]: (point: Point, fieldHeight: number, fieldWidth: number) => ({
      x: (point.x + fieldWidth - 1) % fieldWidth,
      y: point.y,
    }),
    [Direction.RIGHT]: (point: Point, fieldHeight: number, fieldWidth: number) => ({
      x: (point.x + 1) % fieldWidth,
      y: point.y,
    }),
    [Direction.UP]: (point: Point, fieldHeight: number) => ({
      x: point.x,
      y: (point.y + fieldHeight - 1) % fieldHeight,
    }),
    [Direction.DOWN]: (point: Point, fieldHeight: number) => ({
      x: point.x,
      y: (point.y + 1) % fieldHeight,
    }),
  }

  public proceedNextTick() {
    if (this._gameEnded || !this._snake.length) {
      return
    }
    const applyMoveFunction = this.applyMoveDirections[this._direction]

    const newSnakeHead = applyMoveFunction(this._snake[0], this._originalField.length, this._originalField[0].length)

    const pointType = this.getPointType(newSnakeHead)
    switch (pointType) {
      case TileType.EMPTY:
        this._snake.pop()
        this._snake.unshift(newSnakeHead)
        break
      case TileType.APPLE:
        this._snake.unshift(newSnakeHead)
        this._applePosition = this.getNewApplePosition()
        break
      default:
        this._gameEnded = true
        break
    }
    this._isDirectionModified = false
  }

  public get field() {
    const result: TileType[][] = []
    for (let y = 0; y < this._originalField.length; y++) {
      result.push([...this._originalField[y]])
    }

    for (const snakePart of this._snake) {
      result[snakePart.y][snakePart.x] = TileType.SNAKE
    }
    if (this._applePosition) {
      result[this._applePosition.y][this._applePosition.x] = TileType.APPLE
    }
    return result
  }

  public get snake() {
    return this._snake
  }

  public get direction() {
    return this._direction
  }

  public set direction(newDirection: Direction) {
    if (this._isDirectionModified || this._direction === this.oppositeDirections[newDirection]) {
      return
    }
    this._direction = newDirection
    this._isDirectionModified = true
  }

  private getNewApplePosition(): Point {
    const field = this.field
    const availablePoints: Point[] = []
    for (let y = 0; y < field.length; y++) {
      for (let x = 0; x < field[y].length; x++) {
        if (field[y][x] === TileType.EMPTY) {
          availablePoints.push({ x, y })
        }
      }
    }
    const randIndex = Math.floor(Math.random() * availablePoints.length)
    return availablePoints[randIndex]
  }

  private getPointType(point: Point): TileType | undefined {
    if (point.y < 0 || point.y >= this.field.length || point.x < 0 || point.x >= this.field[0].length) {
      return
    }
    return this.field[point.y][point.x]
  }
}
