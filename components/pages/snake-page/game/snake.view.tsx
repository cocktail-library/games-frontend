import React, { FC } from 'react'
import { SnakeGameModel } from '@/components/pages/snake-page/game/snake.model'
import { TileType } from '@/components/pages/snake-page/game/types'
import { BrickGame } from '@/components/devices/brick-game/brick-game'
import { BrickGameButtonHandlers } from '@/components/devices/brick-game/types'
import styles from '../snake-page.module.scss'

interface Props {
  gameModel: SnakeGameModel | null;
  buttonHandlers: BrickGameButtonHandlers;
}

export const SnakeView: FC<Props> = ({ gameModel, buttonHandlers }) => {
  if (!gameModel) {
    return null
  }

  return (
    <div className={styles.brickGameWrapper}>
      <BrickGame
        buttonHandlers={buttonHandlers}
        matrix={gameModel.field.map((row) => row.map((tile) => tile !== TileType.EMPTY))}
      />
    </div>
  )
}
