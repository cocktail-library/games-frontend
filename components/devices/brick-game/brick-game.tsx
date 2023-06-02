import * as React from 'react'
import { FC } from 'react'
import { BrickGameShell } from './components/shell'
import { BrickGameDisplay } from './components/display'
import { BrickGameControls } from '@/components/devices/brick-game/components/controls'
import { BrickGameButtons } from '@/components/devices/brick-game/types'
import styles from './styles.module.scss'

interface Props {
  buttonHandlers: Partial<Record<BrickGameButtons, () => void>>;
  matrix: boolean[][];
}

export const BrickGame: FC<Props> = ({ buttonHandlers, matrix }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.displayWrapper}>
        <BrickGameDisplay matrix={matrix} />
      </div>
      <BrickGameShell>
        <g transform={'translate(43, 598)'}>
          <BrickGameControls buttonHandlers={buttonHandlers} />
        </g>
      </BrickGameShell>
    </div>
  )
}
