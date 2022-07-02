import { useMemo } from 'react';
import {GameConfig} from '../GameLife'

export const useGameConfig = (props: GameConfig) => {
    const {delay} = props?.game || {};
    const {onGraphicsUpdate, onNextGeneration} = props;
    const {board, cells, colors, grid} = props?.graphics || {};
    const {height, offset_x, offset_y, width, zoom} = board || {};
    const {size} = cells || {};
    const {background, cell, grid: gridColor, selected_cell} = colors || {};
    const {gap, lineWidth} = grid || {};

    const gameConfig = useMemo(() => ({
        delay
    }), [delay])
    
    const graphicsConfig = useMemo(() => ({
        board: {
            height, offset_x, offset_y, width, zoom
        },
        cells: {
            size
        },
        colors: {
            background, cell, gridColor, selected_cell
        },
        grid: {
            gap, lineWidth
        }
    }), [height,
        offset_x,
        offset_y,
        width,
        zoom,
        size,
        background,
        cell,
        gridColor,
        selected_cell,
        gap,
        lineWidth
    ])

    return {
        gameConfig,
        graphicsConfig,
        onGraphicsUpdate,
        onNextGeneration
    }
}