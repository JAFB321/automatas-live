import { useEffect } from 'react';
import {useGameLife} from 'react-game-life'

export const GameLife = () => {

    const [game, canvasRef] = useGameLife()
    
    return (
        <canvas ref={canvasRef}></canvas>
    )
}
