import { TileType } from '@/components/pages/snake-page/game/types';
import { FC } from 'react';
import styles from './tile.module.scss';
import cn from 'classnames';

interface Props {
  type: TileType
  distanceFromStart: number | null,
  maxDistance: number | null,
}

export const Tile: FC<Props> = ({ type, distanceFromStart, maxDistance }) => {
  const getStyleByDistance = (distanceFromStart: number | undefined, maxDistance: number | undefined) => {
    if (!distanceFromStart || !maxDistance || type !== TileType.SNAKE) {
      return {}
    }
    const gradientCoefficient = Math.max(Math.min(distanceFromStart / maxDistance, 1), 0)

    const colorComponent = Math.floor(70 + (190 - 70) * gradientCoefficient)
    const background = `rgb(0, ${colorComponent}, 0)`
    return {
      background,
    }
  }

  return <div className={cn(
    styles.tile,
    {
      [styles.appleTile]: type === TileType.APPLE,
    },
  )}
    style={getStyleByDistance(distanceFromStart, maxDistance)}
  >
    {/*{type}*/}
  </div>
}
