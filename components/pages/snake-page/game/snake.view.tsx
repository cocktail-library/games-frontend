import React, { FC } from 'react'
import { TileType } from '@/components/pages/snake-page/game/types'
import { BrickGame } from '@/components/devices/brick-game/brick-game'
import { BrickGameButtonHandlers } from '@/components/devices/brick-game/types'
import styles from '../snake-page.module.scss'
import {getGameModel} from '@/components/pages/snake-page/game/snake.game'

interface Props {
  buttonHandlers: BrickGameButtonHandlers;
}

export const SnakeView: FC<Props> = ({ buttonHandlers }) => {
    return (
    <div className={styles.brickGameWrapper}>
      <BrickGame
        buttonHandlers={buttonHandlers}
        matrix={getGameModel().field.map((row) => row.map((tile) => tile !== TileType.EMPTY))}
      />
    </div>
  )
}
