import React from 'react'
import Box from '../components/Box'
import Text from '../components/Text'
import { css } from '@emotion/react'

const MyPokemonList: React.FC = () => {
    return (
        <Box h='full' w='full' backgroundColor='basic-100' >
            <Text fontSize='lg' fontWeight='bold' >Pokemon List</Text>
        </Box>
    )
}

export default MyPokemonList