import styled, {css} from "styled-components";

type StyleBtnPropsType = {
    btnType?: "primary" | "secondary"
    display?: string
    title?: string
}

export const Btn = (props: StyleBtnPropsType) => {
    return (
            <StyleBtn btnType={props.btnType} display={props.display}>
                <span>{props.title}</span>
            </StyleBtn>
        );
};

export const StyleBtn = styled.button<StyleBtnPropsType>`
    padding: 8px 16px;
    display: ${props => props.display || "flex"};
    border: none;
    font-family: 'Fira Code', serif;
 

    ${props => props.btnType === "primary" && css<StyleBtnPropsType>`
        color: #FFF;
        border: 1px solid #C778DD;
        background-color: #282C33;
        
        &:hover{
            background: rgba(199, 120, 221, 0.20);
        }
    `}

    ${props => props.btnType === "secondary" && css<StyleBtnPropsType>`
        color: #ABB2BF;
        border: 1px solid #ABB2BF;
        background-color: #282C33;
        
        &:hover{
            background: rgba(171, 178, 191, 0.20);
        }
    `}
    
`