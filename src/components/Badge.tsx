import { css } from "@emotion/react";
import styled from "@emotion/styled";


const StyledBadge = styled('div')`
    padding:3px 13px;
    width: fit-content;
    min-width:35px;
    block-size: fit-content;
    border-radius:${({ rounded }: any) => rounded ? '999px' : '4px'};
    text-align:center;
    font-size: ${({ theme }: any) => theme.typography['xs']};
    color:${({ color, theme }: any) => theme.colors[color] || 'white'};
    background-color:${({ backgroundColor, theme }: any) => theme.colors[backgroundColor] || theme.colors['info-500']};
    
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
`



interface IBadgeProps {
    color?: string;
    backgroundColor?: string;
    children?: React.ReactNode;
    rounded?: boolean;
    my?: string;
    mx?: string;
}


const Badge: React.FC<IBadgeProps> = ({ children, ...props }) => {
    return (
        <StyledBadge {...props}>
            {children}
        </StyledBadge>
    )
}

export default Badge