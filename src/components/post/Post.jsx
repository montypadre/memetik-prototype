import styled from 'styled-components';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CampaignIcon from '@mui/icons-material/Campaign';
import ShareIcon from '@mui/icons-material/Share';

const PostItem = styled.div`
    width: 100%;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    margin: 30px 0;
    background-color: #FFF;
`

const PostItemWrapper = styled.div`
    padding: 10px;
`

const PostItemTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const PostItemCenter = styled.div`
    margin: 20px 0;
`

const PostItemBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const PostItemTopLeft = styled.div`
    display: flex;
    align-items: center;
`

const PostItemTopRight = styled.div`
    .arrowDropDownIcon {
        cursor: pointer;
    }
`

const PostItemProfileImg = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
`

const PostItemUsername = styled.span`
    font-size: 15px;
    font-weight: 500;
    margin: 0 10px;
    cursor: pointer;
`

const PostItemDate = styled.span`
    font-size: 12px;
    color: #78C0FF;
`

const PostItemText = styled.span`

`

const PostItemImg = styled.img`
    margin-top: 20px;
    width: 100%;
    height: auto;
    object-fit: contain;
    cursor: pointer;
`

const PostItemBottomLeft = styled.div`
    display: flex;
    align-items: center;
    .fontAwesomeIcon {
        margin-right: 6px;
        cursor: pointer;
    }
`

const PostItemTipCounter = styled.span`
    font-size: 15px;
`

const PostItemBottomCenter = styled.div`
    display: flex;
    align-items: center;
    .campaignIcon {
        width: 25px;
        height: 25px;
        margin-right: 5px;
        cursor: pointer;
    }
`

const PostItemCommentText = styled.span`
    font-size: 15px;
`

const PostItemBottomRight = styled.div`
    display: flex;
    align-items: center;
    .shareIcon {
        width: 21px;
        height: 21px;
        margin-right: 5px;
        cursor: pointer;
    }
`

const PostItemShareText = styled.span`
    font-size: 15px;
`

export default function Post() {
    return (
        <PostItem>
            <PostItemWrapper>
                <PostItemTop>
                    <PostItemTopLeft>
                        <PostItemProfileImg src="/assets/person/10881736_818767454849281_615933931154256178_n.jpg" alt=""/>
                        <PostItemUsername>
                            Laura Anne
                        </PostItemUsername>
                        <PostItemDate>
                            5 min
                        </PostItemDate>
                    </PostItemTopLeft>
                    <PostItemTopRight>
                        <ArrowDropDownIcon className="arrowDropDownIcon" />
                    </PostItemTopRight>
                </PostItemTop>
                <PostItemCenter>
                    <PostItemText>
                        Hey! It's my first post:)
                    </PostItemText>
                    <PostItemImg src="/assets/post/holofractalgraphic occurence.jpg" alt="" />
                </PostItemCenter>
                <PostItemBottom>
                    <PostItemBottomLeft>
                    <FontAwesomeIcon icon="cube" className="fontAwesomeIcon" />
                        <PostItemTipCounter>
                            32 ($1.75)
                        </PostItemTipCounter>
                    </PostItemBottomLeft>
                    <PostItemBottomCenter>
                        <CampaignIcon className="campaignIcon" />
                        <PostItemCommentText>
                            9 
                        </PostItemCommentText>
                    </PostItemBottomCenter>
                    <PostItemBottomRight>
                        <ShareIcon className="shareIcon" />
                        <PostItemShareText>
                            17 
                        </PostItemShareText>
                    </PostItemBottomRight>
                </PostItemBottom>
            </PostItemWrapper>
        </PostItem>
    )
}
