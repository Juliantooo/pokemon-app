import { css } from "@emotion/react";
import styled from "@emotion/styled";


const StyledButton = styled('button')`
    padding: 5px 10px;
    background-color: ${({ theme, backgroundColor }: any) => theme.colors[backgroundColor] || theme.colors['info-500']};
    border-radius: ${({ rounded }: any) => rounded ? '999px' : '5px'};
    color: ${({ color, theme }: any) => theme.colors[color] || 'white'};
    border:0;
    opacity:0.9;
    cursor:pointer;
    &:hover{
        opacity:${({ disabled }: any) => disabled ? null : '1'};
    };
    
    ${({ disabled }: any) => (
        disabled && (
            css`
                opacity:0.6;
                cursor: ${disabled ? 'not-allowed' : 'pointer'};
            `
        )
    )};

    ${({ width }: any) => {
        return (
            css`
                width: ${width === 'full' ? '100%' : `${width}rem`};
            `
        )
    }
    };
    
    ${({ size, theme }: any) => {
        return (
            css`
                font-size: ${theme.typography[size] || '15px'};
            `
        )
    }
    };

    ${({ variant, backgroundColor, theme }: any) => {
        return (
            variant === 'outline' &&
            css`
                border: 2px solid ${theme.colors[backgroundColor] || theme.colors['info-500']};
                color:${theme.colors[backgroundColor] || theme.colors['info-500']};
                background-color: white;
            `
        )
    }
    };
`
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    backgroundColor?: string,
    children?: React.ReactNode;
    rounded?: boolean;
    isDisabled?: boolean;
    onClick?: React.MouseEventHandler,
    size?: string,
    variant?: string,
    color?: string,
    width?: string,
}

const Button: React.FC<IButtonProps> = ({ children, isDisabled = false, onClick, ...props }) => {
    return (
        <StyledButton
            disabled={isDisabled}
            onClick={() => isDisabled ? null : onClick}
            {...props}
        >
            {children}
        </StyledButton>
    )
}

export default Button