import styled from "styled-components";

type StyledSymbolProps = {
    symbol?: string
    fontSize?: string
    fontWeight?: string
}
export const Symbol = (props: StyledSymbolProps) => {
    return (
        <StyledSymbol>
            {props.symbol || "#"}
        </StyledSymbol>
    );
};

export const StyledSymbol = styled.span<StyledSymbolProps>`
    color: #C778DD;
    font-family: 'Fira Code', serif;
    font-style: normal;
    font-size: ${props => props.fontSize  || "16px"};
    font-weight: ${props => props.fontWeight  || "400px"};
    line-height: normal;
`


