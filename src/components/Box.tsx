import { css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)


const StyledBox = styled('div')`
    background-color:${({ backgroundColor, theme }: any) => theme.colors[backgroundColor] || 'inherit'};
    border-radius:${({ rounded }: any) => rounded === 'full' ? '999px' : `${rounded}rem`};
    justify-content:${({ justifyContent }: any) => justifyContent && justifyContent};
    align-items: ${({ alignItems }: any) => alignItems && alignItems};
    box-shadow: none;
    display:block;
    flex-wrap:${({ flexWrap }: any) => flexWrap || 'no-wrap'};


    ${({ boxShadow }: any) => (
        boxShadow &&
        css`
            box-shadow: 6px 5px 15px -1px rgb(64, 64, 64);
            -webkit-box-shadow: 6px 5px 15px -1px rgb(64, 64, 64);
            -moz-box-shadow: 6px 5px 15px -1px rgb(64, 64, 64);
        `
    )}

    ${({ w }: any) => {
        if (w === 'full') {
            return css`
                width:100%;
            `
        } else if (w) {
            return css`
                width:${w}rem;
            `
        }
    }}

    ${({ h }: any) => {
        if (h === 'full') {
            return css`
                height:100%;
            `
        } else if (h === 'screen') {
            return css`
                height:100vh;
            `
        } else if (h) {
            return css`
                height:${h}rem;
            `
        }
    }}

    ${({ py }: any) => {
        if (py === 'auto') {
            return css`
                padding-top:auto;
                padding-bottom:auto;
            `
        } else if (py) {
            return css`
                padding-top:${py}rem;
                padding-bottom:${py}rem;
            `
        } else {
            return css`
            padding-top:0;
            padding-bottom:0;`
        }
    }}

    ${({ px }: any) => {
        if (px === 'auto') {
            return css`
                padding-left:auto;
                padding-right:auto;
            `
        } else if (px) {
            return css`
                padding-left:${px}rem;
                padding-right:${px}rem;
            `
        }
        else {
            return css`
            padding-left:0;
            padding-right:0;`
        }
    }}

    ${({ my }: any) => {
        if (my === 'auto') {
            return css`
                margin-top:auto;
                margin-bottom:auto;
            `
        } else if (my) {
            return css`
                margin-top:${my}rem;
                margin-bottom:${my}rem;
            `
        } else {
            return css`
                margin-top:0;
                margin-bottom:0;
            `
        }
    }}

    ${({ mx }: any) => {
        if (mx === 'auto') {
            return css`
                margin-left:auto;
                margin-right:auto;
            `
        } else if (mx) {
            return css`
                margin-left:${mx}rem;
                margin-right:${mx}rem;
            `
        } else {
            return css`
            margin-left:0;
            margin-right:0;
        `
        }
    }}

    ${({ display }: any) => {
        if (display === 'flex-row') {
            return css`
                display:flex;
                flex-direction:row'
            `
        } else if (display === 'flex-col') {
            return css`
            display:flex;
            flex-direction:row'
        `
        }
    }}
`

interface IBoxProps {
    children?: JSX.Element | JSX.Element[];
    display?: 'block' | 'none' | 'flex-row' | 'flex-col' | 'inline' | 'inline-block';
    mx?: string;
    my?: string;
    px?: string;
    py?: string;
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'initial' | 'inherit';
    alignItems?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit';
    backgroundColor?: string;
    rounded?: string;
    boxShadow?: boolean;
    h?: string;
    w?: string;
    flexWrap?: string;
}

const Box: React.FC<IBoxProps> = ({ children, ...props }) => {
    return (
        <StyledBox {...props}>
            {children}
        </StyledBox>
    )
}

export default Box