import { FC, useEffect, useRef, useState } from 'react'
import { SnakeView } from '@/components/pages/snake-page/game/snake.view'
import { getBrickGameButtonListeners, keyDownListener } from '@/components/pages/snake-page/game/snake.controller'
import { BrickGameButtonHandlers } from '@/components/devices/brick-game/types'
import styles from './snake-page.module.scss'
import {getGameModel} from '@/components/pages/snake-page/game/snake.game'

const msPerFrame = 150

export const SnakePage: FC = () => {
  const [tick, setTick] = useState({ current: 0 })
  const isPaused = useRef(false)
  const [buttonHandlers, setButtonHandlers] = useState<BrickGameButtonHandlers>()

  const togglePaused = () => {
    isPaused.current = !isPaused.current
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((tick) => ({
        current: tick.current + 1,
      }))
    }, msPerFrame)
    const gameModel = getGameModel()
    const listener = keyDownListener(gameModel)
    window.addEventListener('keydown', listener)
    setButtonHandlers(
      getBrickGameButtonListeners(gameModel, {
        onPause: togglePaused,
        onReset: () => {
          console.log('onReset')
        },
      }),
    )

    return () => {
      clearInterval(interval)
      window.removeEventListener('keydown', listener)
    }
  }, [])

  useEffect(() => {
    if (!isPaused.current) {
      getGameModel().proceedNextTick()
    }
  }, [tick])

  if (!buttonHandlers) {
    return null
  }

  return (
    <div className={styles.wrapper}>
      <SnakeView buttonHandlers={buttonHandlers} />
    </div>
  )
}
