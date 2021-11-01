import styled from 'styled-components';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef } from 'react';
import cn from 'classnames';
import useDynamicHeightField from '../useDynamicHeightField';

const SharePost = styled.div`
    width: 100%;
    height: 20;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    background-color: #FFF;
`

const SharePostWrapper = styled.div`
    padding: 10px;
`

const SharePostTop = styled.div`
    display: flex;
    align-items: center;
`

const SharePostProfilePicture = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
    cursor: pointer;
`

const SharePostInput = styled.textarea`
    border: none;
    width: 100%;
    font-family:consolas;
    line-height:20px;
    font-size:16px;
    resize: none;
    overflow: hidden;
    &:focus {
        outline: none;
    }
`

const SharePostOptions = styled.div`
    display: flex;
    margin-left: 40%;
`

const SharePostOption = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
    cursor: pointer;
    .fileUploadOutlinedIcon {
        margin-left: 200px;
        font-size: 40px;
        color: #2E7BBC;
        transition: 0.3s;
        &:hover {
            color: #D9B08C;
        }
    }
`

const SharePostButton = styled.button`
    width: 75px;
    border: none;
    padding: 10px;
    border-radius: 500px;
    background-color: #4D97D7;
    font-weight: 500;
    margin-right: 200px;
    cursor: pointer;
    color: #000;
    transition: 0.3s;
    &:hover {
        background-color: #2E7BBC;
    }
`

export default function Share() {
    {/*const [isExpanded, setIsExpanded] = useState(false);*/ }
    const [shareValue, setShareValue] = useState("");

    const textRef = useRef(null);


    useDynamicHeightField(textRef, shareValue);

    const onChange = (e) => {
        setShareValue(e.target.value);
    }

    {/*const onClose = () => {
        setShareValue("");
        setIsExpanded(false);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('send')
    }*/}

    return (
        <SharePost>
            <SharePostWrapper>
                <SharePostTop>
                    <SharePostProfilePicture src="/assets/person/10881736_818767454849281_615933931154256178_n.jpg" alt="" />
                    <FontAwesomeIcon icon="chevron-right" />
                    <SharePostInput
                        ref={textRef}
                        onChange={onChange}
                    />
                    <SharePostOptions>
                        <SharePostOption>
                            <FileUploadOutlinedIcon className="fileUploadOutlinedIcon" />
                        </SharePostOption>
                    </SharePostOptions>
                </SharePostTop>
                {/*<SharePostButton>Share</SharePostButton>*/}
            </SharePostWrapper>
        </SharePost>
    )
}
