import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";

export const Quote = () => {
    return (
        <Grid>
            <PrimaryQuote>
                <Text>With great power comes great electricity bill</Text>
                <PrimaryIcon>
                    <Icon iconId={'Quote'} width={"26"} height={"21"} viewBox={"0 0 26 21"}/>
                </PrimaryIcon>
                <SecondaryQuote>
                    <Text>- Dr. Who</Text>
                </SecondaryQuote>
                <SecondaryIcon>
                    <Icon iconId={'Quote'} width={"26"} height={"21"} viewBox={"0 0 26 21"}/>
                </SecondaryIcon>
            </PrimaryQuote>
        </Grid>

    );
};

const Grid = styled.section`
    display: flex;
    justify-content: center;
    align-content: center;
    position: relative;

`

const PrimaryQuote = styled.div`
    border: 1px solid #ABB2BF;
    padding: 32px;
    gap: 10px;
    position: relative;

`

const Text = styled.text`
    color: #FFF;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
`

const PrimaryIcon = styled.div`
    display: inline-flex;
    background: #282C33;
    padding: 4px 8px;
    align-items: flex-start;
    gap: 10px;
    position: absolute;
    left: 11px;
    top: -14px;
`

const SecondaryQuote = styled.div`
    border: 1px solid #ABB2BF;
    display: flex;
    padding: 16px;
    align-items: flex-start;
    gap: 10px;
    position: absolute;
    right: -1px;
    bottom: -66px;
`

const SecondaryIcon = styled.div`
    display: inline-flex;
    background: #282C33;
    padding: 4px 8px;
    align-items: flex-start;
    gap: 10px;
    position: absolute;
    right: 17px;
    bottom: -13.704px;
`
