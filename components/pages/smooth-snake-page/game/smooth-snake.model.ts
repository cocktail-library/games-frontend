import { DirectionChange, Point } from './types'

const DIRECTION_CHANGE_DEGREE_STEP = 15
const SNAKE_SPEED_PER_TICK = 3
const APPLE_RADIUS = 10

export class SmoothSnakeModel {
  private _applePosition: Point | null = null
  private _snake: Point[]
  private _gameEnded = false
  private _isDirectionModified = false
  private _directionDegrees = 0

  constructor(private _fieldSize: Point, snakeHeadPosition: Point) {
    this._snake = [snakeHeadPosition]
    this._applePosition = this.getNewApplePosition()
  }

  public proceedNextTick() {
    if (this._gameEnded || !this._snake.length) {
      return
    }

    const dx: number = SNAKE_SPEED_PER_TICK * Math.cos((this._directionDegrees * Math.PI) / 180)
    const dy: number = SNAKE_SPEED_PER_TICK * Math.sin((this._directionDegrees * Math.PI) / 180)
    const snakeHead = this._snake[0]

    this._snake.unshift({
      x: (snakeHead.x + dx) % this._fieldSize.x,
      y: (snakeHead.y + dy) % this._fieldSize.y,
    })

    this._isDirectionModified = false
  }

  public get field() {
    return {
      snake: this._snake,
      apple: this._applePosition,
    }
  }

  public get snake() {
    return this._snake
  }

  public get directionDegrees() {
    return this._directionDegrees
  }

  public changeDirection(directionChange: DirectionChange) {
    if (this._isDirectionModified) {
      return
    }
    this._directionDegrees = (this._directionDegrees + directionChange * DIRECTION_CHANGE_DEGREE_STEP + 360) % 360
    this._isDirectionModified = true
  }

  private getNewApplePosition(): Point {
    const newPoint = {
      x: Math.random() * this._fieldSize.x,
      y: Math.random() * this._fieldSize.y,
    }
    if (Math.hypot(newPoint.x - this._snake[0].x, newPoint.y - this._snake[0].y) > APPLE_RADIUS) {
      return newPoint
    }
    return this.getNewApplePosition()
  }
}
