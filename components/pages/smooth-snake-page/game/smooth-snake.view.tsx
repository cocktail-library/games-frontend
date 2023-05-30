import { FC, useEffect, useRef, useState } from 'react';
import styles from '@/components/pages/smooth-snake-page/smooth-snake-page.module.scss';
import { SmoothSnakeModel } from '@/components/pages/smooth-snake-page/game/smooth-snake.model';
import snake from '@/pages/snake';

interface Props {
  gameModel: SmoothSnakeModel | null;
  width: number;
  height: number;
  tick: {
    current: number;
  };
}

export const SmoothSnakeView: FC<Props> = ({ gameModel, width, height, tick}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }

    setContext(canvas.getContext('2d'))
  }, [])

  useEffect(() => {
    if (!context || !gameModel) {
      return
    }
    context.clearRect(0, 0, width, height)
    const fieldData = gameModel.field
    if (fieldData.apple) {
      context.fillStyle = 'orangered'
      context.strokeStyle = 'black'
      context.beginPath();
      context.arc(fieldData.apple.x, fieldData.apple.y, 10, 0, 2 * Math.PI);
      context.fill()
      context.stroke()
    }


    context.lineWidth = 5;
    context.strokeStyle = 'green'
    context.beginPath()
    context.moveTo(fieldData.snake[0].x, fieldData.snake[0].y)
    for (let i = 1; i < fieldData.snake.length; i++) {
      context.lineTo(fieldData.snake[i].x, fieldData.snake[i].y)
    }
    context.stroke()
  }, [tick])

  if (!gameModel) {
    return null
  }

  return <div className={styles.wrapper}>
    <canvas ref={canvasRef} width={`${width}px`} height={`${height}px`} />
  </div>
}
