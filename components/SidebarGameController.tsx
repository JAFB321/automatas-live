import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    DrawerOverlay,
} from '@chakra-ui/react'
import { useContext, useEffect, useMemo, useState } from 'react'
import { CanvasConfig } from 'react-game-life'
import { GameContext } from '../context/GameContext'

export const SidebarGameController = ({ gameId }: { gameId: string }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const gameContext = useContext(GameContext)
    const game = useMemo(() => gameContext?.getGame(gameId), [gameId, gameContext])

    const [config, setConfig] = useState<CanvasConfig>()

    useEffect(() => {
        setConfig(game?.graphics.getConfig())
        game?.graphics.onConfigChange(setConfig)
    }, [game])


    return (
        <>
            <Button colorScheme='blue' onClick={onOpen}>
                Customize
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                closeOnOverlayClick={false}
            >
                <DrawerContent >
                    <DrawerCloseButton />
                    <DrawerHeader>Customize the Game</DrawerHeader>

                    <DrawerBody>
                        <code>{config ? JSON.stringify(config, null, 5) : 'No config'}</code>
                    </DrawerBody>

                    <DrawerFooter>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
