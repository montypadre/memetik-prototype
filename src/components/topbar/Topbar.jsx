import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const TopbarContainer = styled.div`
   height: 50px;
   width: 100%;
   background: hsla(355, 85%, 63%, 1);
   background: linear-gradient(315deg, hsla(355, 85%, 63%, 1) 0%, hsla(192, 80%, 51%, 0.8) 100%);
   background: -moz-linear-gradient(315deg, hsla(355, 85%, 63%, 1) 0%, hsla(192, 80%, 51%, 0.8) 100%);
   background: -webkit-linear-gradient(315deg, hsla(355, 85%, 63%, 1) 0%, hsla(192, 80%, 51%, 0.8) 100%);
   filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F1515E", endColorstr="#1DBDE6", GradientType=1 );
   display: flex;
   align-items: center;
   position: sticky;
   top: 0;
   z-index: 999;
   -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
   box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
`

const LogoImg = styled.img`
    width: 100px;
    height: 100px;
`

const TopbarLeft = styled.div`
    flex: 3;
    display: flex;
    align-items: center;
`

const Logo = styled.span`
    margin-left: 20px;
    margin-right: 40px;
    font-size: 24px;
    font-weight: bold;
    color: #042440;
    cursor: pointer;
`

const TopbarCenter = styled.div`
    flex: 8;
    display: flex;
    align-items: center;
    .accountBalanceWalletIcon {
        height: 50px;
        width: 50px;
        margin-left: 45%;
        margin-right: 2%;
        cursor: pointer;
    }
`

const Searchbar = styled.div`
    min-width: 80%;
    height: 30px;
    background-color: #FAFAFA;
    border-radius: 30px;
    display: flex;
    align-items: center;
    .searchIcon {
        font-size: 20px !important;
        margin-left: 10px;
        cursor: pointer;
    }
`

const SearchInput = styled.input`
    background-color: #FAFAFA;
    border: none;
    width: 70%;
    &:focus {
        outline: none;
    }
`

const TopbarRight = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #042440;
`

const TopbarImg = styled.img`
    margin-left: 50%;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
`

export default function Topbar() {
    return (
        <TopbarContainer>
            <TopbarLeft>
                <Logo>
                    <LogoImg src="/assets/logo/logo-nobackground-notext-500-alt.png" alt=""/>
                </Logo>
                <Searchbar>
                    <SearchIcon className="searchIcon" />
                    <SearchInput></SearchInput>
                </Searchbar>
            </TopbarLeft>
            <TopbarCenter>
                <AccountBalanceWalletIcon className="accountBalanceWalletIcon" />
            </TopbarCenter>
            <TopbarRight>
                <TopbarImg src="/assets/person/10881736_818767454849281_615933931154256178_n.jpg"></TopbarImg>
            </TopbarRight>
        </TopbarContainer>
    )
}
