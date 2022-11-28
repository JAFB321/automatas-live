import { useContext, useEffect, useState } from 'react'
import { useGameLife } from 'react-game-life'
import { GameContext } from '../context/GameContext'
import useId from '../hooks/useId'

export interface GameLifeProps {
    gameId?: string
}

export const GameLife = (props: GameLifeProps) => {

    const randomId = useId()
    const [gameId, setGameId] = useState(props.gameId || randomId)
    const gameContext = useContext(GameContext)
    const [game, canvasRef] = useGameLife()

    useEffect(() => {
        if (!gameContext || !game) return

        if (props.gameId && props.gameId !== gameId) {
            gameContext.removeGame(gameId)
            setGameId(props.gameId)
        }
        else {
            gameContext.registerGame({ gameId, game })
        }

        return () => {
            gameContext.removeGame(gameId)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [game, gameId, !gameContext, props.gameId])

    return (
        <>
            <canvas ref={canvasRef}></canvas>
        </>
    )
}
