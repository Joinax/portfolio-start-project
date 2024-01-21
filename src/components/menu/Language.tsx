import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const Language = () => {
    return (
        <StyledLanguage>
            <select>
                <option>EU</option>
                <option>RU</option>
                <Icon iconId={'Arrow'} width={"10"} height={"5"} viewBox={"0 0 10 7"}/>
            </select>
        </StyledLanguage>
    );
};

const StyledLanguage = styled.nav`

`