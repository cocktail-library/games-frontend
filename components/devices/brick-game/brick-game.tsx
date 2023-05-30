import * as React from "react"
import { FC } from "react";
import { BrickGameShell } from './components/shell';
import { BrickGameDisplay } from './components/display';
import { BrickGameControls } from '@/components/devices/brick-game/components/controls';
import { BrickGameButtons } from '@/components/devices/brick-game/types';

interface Props {
  buttonHandlers: Record<BrickGameButtons, () => void>;
  matrix: boolean[][];
}

export const BrickGame: FC<Props> = ({ buttonHandlers, matrix }) => {
  return <BrickGameShell>
    <g transform={ `translate(124, 96)` }>
      <BrickGameDisplay matrix={matrix} />
    </g>
    <g transform={ `translate(43, 598)` }>
      <BrickGameControls buttonHandlers={buttonHandlers} />
    </g>
  </BrickGameShell>
}
