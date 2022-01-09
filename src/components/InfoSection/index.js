import React from 'react';
import Covid from '../../images/COVID-19.png';
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle
} from './InfoElements';

const InfoElements = () => {
    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <Heading><img src={Covid} alt="Global and Country Wise Cases of Corona Virus" /></Heading>
                                <TopLine>Global and Country Wise Cases of Corona Virus</TopLine>                                
                                <Subtitle>(For a Particular country, select a Country from below)</Subtitle>
                            </TextWrapper>
                        </Column1>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default InfoElements
