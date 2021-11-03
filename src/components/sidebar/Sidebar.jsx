import styled from 'styled-components';
import ChatIcon from '@mui/icons-material/Chat';
import { useState, useCallback } from 'react';
import { images } from './images';
import ResponsiveGallery from 'react-responsive-gallery';

// TODO: fix scrollbar-thumb

const SideBar = styled.div`
   flex: 4;
   height: calc(100vh - 50px);
   background-color: #FAFAFA;
   overflow-y: scroll;
   &::-webkit-scrollbar {
       width: 5px;
      
   }
   &::-webkit-scrollbar-track {
        background-color: #f1f1f1;
   }
   &::-webkit-scrollbar-thumb {
        background-color: rgb(179, 179, 179);      
   }
`

const SideBarWrapper = styled.div`
    padding-top: 10px;
    .img-style {
        display: block;
        border: 1px solid black;
        -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
        box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    }
`

const SideBarList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`

const SideBarListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .storeIcon, .chatIcon {
        margin-right: 15px;
    }
`

const SideBarListItemText = styled.span`

`

export default function Sidebar() {

    return (
        <SideBar>
            <SideBarWrapper>
                <ResponsiveGallery 
                    images={images} 
                    useLightBox={true}
                    numOfImagesPerRow={{
                        xs: 1,
                        s: 1,
                        m: 1,
                        l: 1,
                        xl: 2,
                        xxl: 3
                    }}
                    imagesMaxWidth={{
                        xs: 50,
                        s: 50,
                        m: 50,
                        l: 50,
                        xl: 75,
                        xxl: 100
                      }}
                />
                <SideBarList>
                    <SideBarListItem>
                        <ChatIcon className="chatIcon" />
                        <SideBarListItemText>
                            Chat
                        </SideBarListItemText>
                    </SideBarListItem>
                </SideBarList>
            </SideBarWrapper>
        </SideBar>
    )
}