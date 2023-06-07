import { FC, useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'

interface Props {
  matrix: boolean[][];
}

const CANVAS_WIDTH_PX = 164
const CANVAS_HEIGHT_PX = 231

export const DisplayCanvas: FC<Props> = ({ matrix }) => {
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
    if (!context || !matrix) {
      return
    }
    // context.clearRect(0, 0, CANVAS_WIDTH_PX, CANVAS_HEIGHT_PX)
    for (let matrixRow = 0; matrixRow < matrix.length; matrixRow++) {
      for (let matrixColumn = 0; matrixColumn < matrix[0].length; matrixColumn++) {
        if (context) {
          const fillStyle = matrix[matrixRow][matrixColumn] ? '#222' : '#555'
          context.fillStyle = fillStyle
          context?.fillRect(matrixColumn * 10 + 8, matrixRow * 10 + 6, 9, 9)
          context?.clearRect(matrixColumn * 10 + 9, matrixRow * 10 + 7, 7, 7)
          context?.fillRect(matrixColumn * 10 + 10, matrixRow * 10 + 8, 5, 5)
        }
      }
    }
  }, [matrix, context])

  return (
    <canvas className={styles.canvas} ref={canvasRef} width={`${CANVAS_WIDTH_PX}px`} height={`${CANVAS_HEIGHT_PX}px`} />
  )
}
