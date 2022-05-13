import React from 'react'
import Box from '../components/Box'
import Text from '../components/Text'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Button from '../components/Button'
import Badge from '../components/Badge'

const textTitle = css`
    color:white;
    background-color:red;
    margin-top:1000px;
`
const PokemonCard = styled(Box)`
    width:clamp(5.5rem,40%,15rem);
`

const PokemonList: React.FC = () => {
    return (
        <Box h='screen' w='auto' backgroundColor='basic-200' px='1' >
            <Box display='flex-row' justifyContent='space-between' py='1' alignItems='center'>
                <Text fontSize='lg' fontWeight='bold' >Pokemons</Text>
                <Button>
                    <Text fontWeight='bold' color='basic-0'>Pokedex</Text>
                </Button>
            </Box>
            <Box my='1' flexWrap='wrap' display='flex-row' justifyContent='space-between' alignItems='center' >
                <PokemonCard rounded='1' px='0.7' py='1.2' backgroundColor='link-300' my='0.7' display='flex-row' justifyContent='space-between' alignItems='flex-end'>
                    <Box>
                        <Text fontWeight='bold' color='basic-0'>Bulbasaur</Text>
                        <Badge backgroundColor='link-400' my='0.5'>Grass</Badge>
                        <Badge backgroundColor='link-400'>Poison</Badge>
                    </Box>
                    <img style={{ width: 55, aspectRatio: '1', marginLeft: -5 }} src={'https://i.pinimg.com/originals/82/42/25/824225f61b9e0efb7e7405f8c9579f6c.png'} alt="pokemon-avatar" />
                </PokemonCard>
                <PokemonCard rounded='1' px='0.7' py='1.2' backgroundColor='link-300' my='0.7' display='flex-row' justifyContent='space-between' alignItems='flex-end'>
                    <Box>
                        <Text fontWeight='bold' color='basic-0'>Bulbasaur</Text>
                        <Badge backgroundColor='link-400' my='0.5'>Grass</Badge>
                        <Badge backgroundColor='link-400'>Poison</Badge>
                    </Box>
                    <img style={{ width: 55, aspectRatio: '1', marginLeft: -5 }} src={'https://i.pinimg.com/originals/82/42/25/824225f61b9e0efb7e7405f8c9579f6c.png'} alt="pokemon-avatar" />
                </PokemonCard>
            </Box>
        </Box >
    )
}

export default PokemonList