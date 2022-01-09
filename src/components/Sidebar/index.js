import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink
} from './SidebarElements';

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/">Home</SidebarLink>
                    <SidebarLink to="/">Specializations</SidebarLink>
                    <SidebarLink to="/">Services</SidebarLink>
                    <SidebarLink to="/">THE RELATIONSHIP WITH YOU</SidebarLink>
                    <SidebarLink to="/">Scientific insights</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar
