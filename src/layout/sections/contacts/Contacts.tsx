import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../sectionTitle/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle title={"contacts"}/>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <ContactsText>
                    I’m interested in freelance opportunities. However,
                    if you have other request or question, don’t hesitate to contact me
                </ContactsText>
                <Message>
                    <Title>Message me here</Title>
                    <MessageBlock>
                        <Discord>
                            <Icon iconId={'Discord'} width={"32"} height={"32"} viewBox={"0 0 32 32"}/>
                            <DiscordText>!Elias#3519</DiscordText>
                        </Discord>
                        <Mail>
                            <Icon iconId={'Email'} width={"32"} height={"32"} viewBox={"0 0 32 32"}/>
                            <MailText>elias@elias.me</MailText>
                        </Mail>
                    </MessageBlock>
                </Message>
            </FlexWrapper>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    font-size: 16px;
    line-height: normal;
    font-style: normal;
    color: #ABB2BF;
    font-weight: 400;
`

const ContactsText = styled.div`
    color: #ABB2BF;
    font-weight: 500;
`

const Message = styled.div`
    border: 1px solid #ABB2BF;
    display: inline-flex;
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
`

const MessageBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
`

const Title = styled.h3`
    color: #FFFFFF;
    font-weight: 600;
`

const Discord = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

const DiscordText = styled.span`

`

const Mail = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

const MailText = styled.span`

`