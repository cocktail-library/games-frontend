import { SmoothSnakeModel } from '@/components/pages/smooth-snake-page/game/smooth-snake.model';
import { DirectionChange } from '@/components/pages/smooth-snake-page/game/types';

export const MapKeyboardKeyToDirection: Record<string, DirectionChange> = {
  'ArrowLeft': DirectionChange.LEFT,
  'ArrowRight': DirectionChange.RIGHT,
}

export const keyDownListener = (gameModel: SmoothSnakeModel) => (event: KeyboardEvent) => {
  const direction = MapKeyboardKeyToDirection[event.key]
  if (!direction) {
    return
  }
  gameModel.changeDirection(direction)
}
