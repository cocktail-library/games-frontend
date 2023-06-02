import { FC, useEffect, useState } from 'react'
import { SmoothSnakeModel } from './game/smooth-snake.model'
import { SmoothSnakeView } from './game/smooth-snake.view'
import { keyDownListener } from './game/smooth-snake.controller'

const msPerFrame = 50

const fieldSize = {
  x: 600,
  y: 600,
}

const defaultSnakeHeadPosition = {
  x: fieldSize.x / 2,
  y: fieldSize.y / 2,
}

export const SmoothSnakePage: FC = () => {
  const [tick, setTick] = useState({ current: 0 })
  const [gameModel, setGameModel] = useState<SmoothSnakeModel | null>(null)

  useEffect(() => {
    const newGameModel = new SmoothSnakeModel(fieldSize, defaultSnakeHeadPosition)
    setGameModel(newGameModel)

    const interval = setInterval(() => {
      setTick((tick) => ({
        current: tick.current + 1,
      }))
    }, msPerFrame)
    const listener = keyDownListener(newGameModel)
    window.addEventListener('keydown', listener)

    return () => {
      clearInterval(interval)
      window.removeEventListener('keydown', listener)
    }
  }, [])

  useEffect(() => {
    gameModel?.proceedNextTick()
  }, [tick])

  return <SmoothSnakeView gameModel={gameModel} width={fieldSize.x} height={fieldSize.y} tick={tick} />
}
