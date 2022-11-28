import React, { createContext, useCallback, useMemo, useState } from "react";
import { GameOfLife, CanvasController } from 'react-game-life'

interface GameInstance {
  game: GameOfLife<CanvasController>,
  gameId: string,
}

interface ContextConfig {
  getGames: () => GameInstance[],
  getGame: (gameId: string) => GameOfLife<CanvasController> | null,
  registerGame: (gameInstance: GameInstance) => void,
  removeGame: (gameId: string) => void
}

export const GameContext = createContext<ContextConfig | null>(null)

export const GameProvider = (props: { children: JSX.Element }) => {
  const [gameInstances, setGameInstances] = useState<GameInstance[]>([])

  const getGame = useCallback((gameId: string) => {
    return gameInstances.find((game) => game.gameId === gameId)?.game || null
  }, [gameInstances])

  const getGames = useCallback(() => gameInstances, [gameInstances])

  const registerGame = useCallback(({ game, gameId }: GameInstance) => {
    if (!game || !gameId) return
    if (getGame(gameId) || getGame(gameId) === game) return
    if (!(game instanceof GameOfLife<CanvasController>)) return

    setGameInstances([...gameInstances, { game, gameId }])
  }, [gameInstances, getGame])

  const removeGame = useCallback((gameId: string) => setGameInstances(gameInstances.filter((game) => game.gameId !== gameId)), [gameInstances])

  const gameContext = useMemo(() => ({
    getGame,
    getGames,
    registerGame,
    removeGame
  }), [getGame, getGames, registerGame, removeGame])

  return <GameContext.Provider value={gameContext}>{props.children}</GameContext.Provider>
}
