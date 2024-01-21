import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../sectionTitle/SectionTitle";
import styled from "styled-components";
import {Btn} from "../../../components/Button";
import photo from "../../../assets/images/foto-2.webp";

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <SectionTitle title={"about-me"}/>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <PBlock>
                    <Text>Hello, i’m Elias!

                        I’m a self-taught front-end developer based in Saint Petersburg, Russia. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.

                        Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</Text>
                    <Btn btnType={"primary"} display={"inline-flex"} title={"Read more ->"}/>
                </PBlock>
                <SBlock>
                    <Photo src={photo} alt=""/>
                </SBlock>
            </FlexWrapper>
        </StyledAboutMe>

    );
};

const StyledAboutMe = styled.section`

`

const PBlock = styled.div`

`

const SBlock = styled.div`

`
const Text = styled.p`
    color: #ABB2BF;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
`

const Photo = styled.img`

`
