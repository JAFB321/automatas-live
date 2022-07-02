import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import { useGameConfig } from './hooks/useGameConfig'
 
const CreateGameOfLife = import('game-life');
CreateGameOfLife.catch(() => {});

export interface GameConfig {
    graphics?: {
        cells?: {
            size?: number,
        },
        grid?: {
            lineWidth?: number,
            gap?: number,
        }
        board?: {
            height?: number,
            width?: number,
            offset_x?: number,
            offset_y?: number,
            zoom?: number,
        },
        colors?: {
            background?: string,
            cell?: string,
            selected_cell?: string,
            grid?: string
        }
    },
    game?:{
        delay?: number
    },
    onNextGeneration?: (board: {x:number, y:number}[]) => {},
    onGraphicsUpdate?: (config: {
        cells?: {
            size?: number;
        };
        grid?: {
            lineWidth?: number;
            gap?: number;
        };
        board?: {
            height?: number;
            width?: number;
            offset_x?: number;
            offset_y?: number;
            zoom?: number;
        };
        colors?: {
            background?: string;
            cell?: string;
            selected_cell?: string;
            grid?: string;
        }
    }) => {}

}

export const GameLife = (props: GameConfig) => {

    const [gameInstance, setGameInstance] = useState<any>(null);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const initialized = useRef(false);
    const {gameConfig, graphicsConfig, onGraphicsUpdate} = useGameConfig(props);
    
    const initGame = async (canvas: HTMLCanvasElement) => {
        const game = await (await CreateGameOfLife).default(canvas, {game: gameConfig, graphics: graphicsConfig});
        console.log(game);
        
        if(onGraphicsUpdate)game.graphics.onConfigChange(onGraphicsUpdate);
        console.log(game.graphics);       
    } 

    useEffect(() => {
        const canvas = canvasRef.current;

        if(canvas && !initialized.current){
            initGame(canvas).catch(() => {
                initialized.current = false
            })            
            initialized.current = true;
        }
    }, [])

  return (
    <div>
        <canvas ref={canvasRef}>
            
        </canvas>
    </div>
  )
}
