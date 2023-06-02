import React, { FC } from 'react'
import styles from './styles.module.scss'
import { DisplayBackground } from '@/components/devices/brick-game/components/display/display-background'
import { DisplayCanvas } from '@/components/devices/brick-game/components/display/display-canvas'

interface Props {
  matrix: boolean[][];
}

export const BrickGameDisplay: FC<Props> = ({ matrix }) => {
  return (
    <div className={styles.wrapper}>
      <DisplayBackground />
      <div className={styles.canvasWrapper}>
        <DisplayCanvas matrix={matrix} />
      </div>
    </div>
  )
}
