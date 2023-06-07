import * as React from 'react'
import { FC } from 'react'
import { BrickGameShell } from './components/shell'
import { BrickGameDisplay } from './components/display'
import { BrickGameControls } from '@/components/devices/brick-game/components/controls'
import styles from './styles.module.scss'
import {BrickGameButtonHandlers} from '@/components/devices/brick-game/types'

interface Props {
  buttonHandlers: BrickGameButtonHandlers;
  matrix: boolean[][];
}

export const BrickGame: FC<Props> = ({ buttonHandlers, matrix }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.displayWrapper}>
        <BrickGameDisplay matrix={matrix} />
      </div>
      <BrickGameShell />
      <div className={styles.controlsWrapper}>
        <BrickGameControls buttonHandlers={buttonHandlers} />
      </div>
    </div>
  )
}
