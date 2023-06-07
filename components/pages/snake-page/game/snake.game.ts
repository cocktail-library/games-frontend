import {SnakeGameModel} from '@/components/pages/snake-page/game/snake.model'
import {MAX_COLUMN_COUNT, MAX_ROW_COUNT} from '@/components/devices/brick-game/types'
import {Direction, TileType} from '@/components/pages/snake-page/game/types'
import {getArrayOf} from '@/utils/array'

const defaultSnakeHeadPosition = {
    x: Math.floor(MAX_COLUMN_COUNT / 2),
    y: Math.floor(MAX_ROW_COUNT / 2),
}

const row: TileType[] = getArrayOf(MAX_COLUMN_COUNT).map(() => TileType.EMPTY)
const field = getArrayOf(MAX_ROW_COUNT).map(() => [...row])


let gameModel: SnakeGameModel | null = null

export const getGameModel = () => {
    if (gameModel) {
        return gameModel
    }
    gameModel = new SnakeGameModel(Direction.RIGHT, field, defaultSnakeHeadPosition)
    return gameModel
}
