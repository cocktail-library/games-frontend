import { FC, useEffect, useRef, useState } from 'react'
import { getArrayOf } from '@/utils/array'
import { Direction, TileType } from '@/components/pages/snake-page/game/types'
import { SnakeGameModel } from '@/components/pages/snake-page/game/snake.model'
import { SnakeView } from '@/components/pages/snake-page/game/snake.view'
import { getBrickGameButtonListeners, keyDownListener } from '@/components/pages/snake-page/game/snake.controller'
import {
  BrickGameButtonHandlers,
  MAX_COLUMN_COUNT,
  MAX_ROW_COUNT
} from '@/components/devices/brick-game/types'
import styles from './snake-page.module.scss'

const msPerFrame = 150

const defaultSnakeHeadPosition = {
  x: Math.floor(MAX_COLUMN_COUNT / 2),
  y: Math.floor(MAX_ROW_COUNT / 2),
}

const row: TileType[] = getArrayOf(MAX_COLUMN_COUNT).map(() => TileType.EMPTY)
const field = getArrayOf(MAX_ROW_COUNT).map(() => [...row])

export const SnakePage: FC = () => {
  const [tick, setTick] = useState({ current: 0 })
  const isPaused = useRef(false)
  const gameModel = useRef<SnakeGameModel>()
  const [buttonHandlers, setButtonHandlers] = useState<BrickGameButtonHandlers>()

  const togglePaused = () => {
    isPaused.current = !isPaused.current
  }

  const resetGameModel = () => {
    gameModel.current = new SnakeGameModel(Direction.RIGHT, field, defaultSnakeHeadPosition)
  }

  useEffect(() => {
    resetGameModel()
  }, [])

  useEffect(() => {
    if (!gameModel.current) {
      return
    }

    const interval = setInterval(() => {
      setTick((tick) => ({
        current: tick.current + 1,
      }))
    }, msPerFrame)
    const listener = keyDownListener(gameModel.current)
    window.addEventListener('keydown', listener)
    setButtonHandlers(
      getBrickGameButtonListeners(gameModel.current, {
        onPause: togglePaused,
        onReset: resetGameModel,
      }),
    )

    return () => {
      clearInterval(interval)
      window.removeEventListener('keydown', listener)
    }
  }, [gameModel])

  useEffect(() => {
    if (!isPaused.current) {
      gameModel.current?.proceedNextTick()
    }
  }, [tick])

  if (!gameModel.current || !buttonHandlers) {
    return null
  }

  return (
    <div className={styles.wrapper}>
      <SnakeView gameModel={gameModel.current} buttonHandlers={buttonHandlers} />
    </div>
  )
}
