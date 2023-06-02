import { Direction } from '@/components/pages/snake-page/game/types'
import { SnakeGameModel } from '@/components/pages/snake-page/game/snake.model'
import { BrickGameButtons } from '@/components/devices/brick-game/types'

export const MapKeyboardKeyToDirection: Record<string, Direction> = {
  ArrowUp: Direction.UP,
  ArrowDown: Direction.DOWN,
  ArrowLeft: Direction.LEFT,
  ArrowRight: Direction.RIGHT,
}

export const keyDownListener = (gameModel: SnakeGameModel) => (event: KeyboardEvent) => {
  const direction = MapKeyboardKeyToDirection[event.key]
  gameModel.direction = direction || gameModel.direction
}

interface additionalGameHandlers {
  onPause: () => void;
  onReset: () => void;
}

export const getBrickGameButtonListeners = (
  gameModel: SnakeGameModel,
  { onPause, onReset }: additionalGameHandlers,
) => {
  return {
    [BrickGameButtons.UP]: () => (gameModel.direction = Direction.UP),
    [BrickGameButtons.DOWN]: () => (gameModel.direction = Direction.DOWN),
    [BrickGameButtons.LEFT]: () => (gameModel.direction = Direction.LEFT),
    [BrickGameButtons.RIGHT]: () => (gameModel.direction = Direction.RIGHT),
    [BrickGameButtons.START_PAUSE]: onPause,
    [BrickGameButtons.RESET]: onReset,
  } as Partial<Record<BrickGameButtons, () => void>>
}
