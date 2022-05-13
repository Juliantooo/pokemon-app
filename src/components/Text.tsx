import { ClassNames } from "@emotion/react";
import styled from "@emotion/styled";



const StyledText = styled('text')`
    color:${({ color, theme }: any) => theme.colors[color] || theme.colors['basic-900']};
    font-weight: ${({ fontWeight }: any) => fontWeight || 'normal'};
    font-size: ${({ fontSize, theme }: any) => theme.typography[fontSize] || theme.typography['base']};
    line-height: 24px;
`

interface ITextProps {
    children?: React.ReactNode;
    color?: string;
    fontSize?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
    fontWeight?: 'bold' | 'normal' | 'lighter';
    css?: any;
}

const Text: React.FC<ITextProps> = ({ children, ...props }) => {
    return (
        <ClassNames>
            {({ css, cx }) => (
                <StyledText {...props} className={props.css && cx(
                    css`
                        ${props.css.styles}
                    `
                )} >
                    {children}
                </StyledText>
            )}
        </ClassNames>
    )
}

export default Text