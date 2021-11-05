import styled from 'styled-components';
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CampaignIcon from '@mui/icons-material/Campaign';
import ShareIcon from '@mui/icons-material/Share';
import { Users } from "../../dummyData";

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

export default function Post({ post }) {
    const [tip, setTip] = useState(post.tip)
    const [usd, setUsd] = useState(post.usd)
    const [isTipped, setIsTipped] = useState(false)

    const tipHandler = () => {
        setTip(isTipped ? '' : tip + 1)
        setUsd(isTipped ? '' : usd + .05)
    }

    return (
        <PostItem>
            <PostItemWrapper>
                <PostItemTop>
                    <PostItemTopLeft>
                        <PostItemProfileImg src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="" />
                        <PostItemUsername>
                            {Users.filter(u => u.id === post.userId)[0].username}
                        </PostItemUsername>
                        <PostItemDate>
                            {post.date}
                        </PostItemDate>
                    </PostItemTopLeft>
                    <PostItemTopRight>
                        <ArrowDropDownIcon className="arrowDropDownIcon" />
                    </PostItemTopRight>
                </PostItemTop>
                <PostItemCenter>
                    <PostItemText>
                        {post?.desc}
                    </PostItemText>
                    <PostItemImg src={post.img} alt="" />
                </PostItemCenter>
                <PostItemBottom>
                    <PostItemBottomLeft>
                        <FontAwesomeIcon icon="cube" className="fontAwesomeIcon" onClick={tipHandler} />
                        <PostItemTipCounter>
                            {tip} (${usd})
                        </PostItemTipCounter>
                    </PostItemBottomLeft>
                    <PostItemBottomCenter>
                        <CampaignIcon className="campaignIcon" />
                        <PostItemCommentText>
                            {post.comment}
                        </PostItemCommentText>
                    </PostItemBottomCenter>
                    <PostItemBottomRight>
                        <ShareIcon className="shareIcon" />
                        <PostItemShareText>
                            {post.share}
                        </PostItemShareText>
                    </PostItemBottomRight>
                </PostItemBottom>
            </PostItemWrapper>
        </PostItem>
    )
}
