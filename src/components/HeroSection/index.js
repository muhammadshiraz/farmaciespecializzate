import React, {useState} from 'react';
import { Button } from '../Button/ButtonElements';
import Video from '../../videos/farmacie.mp4';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Noi Farmacie Specializzate</HeroH1>
                <HeroP>Ci prendiamo cura della tua bellezza, salute e forma fisica.</HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to='/' 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >
                        GUARDA IL VIDEO {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
