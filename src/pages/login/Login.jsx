import styled from 'styled-components';
import { useState, useEffect } from 'react';
import OpenLogin from '@toruslabs/openlogin';
import AccountInfo from '../../components/accountInfo/AccountInfo';
import { Keypair, Connection, clusterApiUrl } from '@solana/web3.js';
import { getED25519Key } from '@toruslabs/openlogin-ed25519';
import * as bs58 from 'bs58';

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 100vh;
`

const networks = {
    mainnet: {url: "https://solana-api.projectserum.com", displayName: "Mainnet Beta"},
    devnet: {url: clusterApiUrl("devnet"), displayName: "Devnet"},
    testnet: { url: clusterApiUrl("testnet"), displayName: "Testnet" },
};

const solanaNetwork = networks.testnet;
const connection = new Connection(solanaNetwork.url);

export default function Login() {

    const [loading, setLoading] = useState(false);
    const [openlogin, setSdk] = useState(undefined);
    const [keypair, setUserAccount] = useState(null);
    const [walletInfo, setUserAccountInfo] = useState(null);
    const [solanaPrivateKey, setPrivateKey] = useState(null);

    useEffect(() => {
        setLoading(true);
        async function initializeOpenLogin() {
            const sdkInstance = new OpenLogin({
                // BJZKqhj2DWFxK4gXEy2EXV4QxrDuYFyfpkX0qm63zfAASFb1SeU-IE3LyZhudKnu1YNNDRaHZd8lcuqtLUzP9BM
                clientId: "BJZKqhj2DWFxK4gXEy2EXV4QxrDuYFyfpkX0qm63zfAASFb1SeU-IE3LyZhudKnu1YNNDRaHZd8lcuqtLUzP9BM",
                network: "testnet",
            });
            await sdkInstance.init();
            if (sdkInstance.privKey) {
                const privateKey = sdkInstance.privKey;
                const secretKey = getSolanaPrivateKey(privateKey);
                await getAccountInfo(secretKey);
            }
            setSdk(sdkInstance);
            setLoading(false);
        }
        initializeOpenLogin();
    }, []);

    const getSolanaPrivateKey = (openloginKey) => {
        const { sk } = getED25519Key(openloginKey);
        return sk;
    }

    const getAccountInfo = async (secretKey) => {
        const keypair = new Keypair(secretKey);
        const accountInfo = await connection.getAccountInfo(keypair.publicKey);
        setPrivateKey(bs58.encode(keypair.secretKey));
        setUserAccount(keypair);
        setUserAccountInfo(accountInfo);
        console.log("OK");
        console.log(accountInfo);
        return accountInfo;
    }

    async function handleLogin() {
        setLoading(true)
        try {
            const privKey = await openlogin.login({
                redirectUrl: `${window.origin}`,
            });
            const solanaPrivateKey = getSolanaPrivateKey(privKey);
            await getAccountInfo(solanaNetwork.url, solanaPrivateKey);
            setLoading(false)
        } catch (error) {
            console.log('error', error);
            setLoading(false)
        }
    }

    const handleLogout = async () => {
        setLoading(true)
        await openlogin.logout();
        setLoading(false)
    };
    return (
        <>
            {
                loading ?
                    <div>
                        <div style={{ display: "flex", flexDirection: "column", width: "100%", justifyContent: "center", alignItems: "center", margin: 20 }}>
                            <h1>....loading</h1>
                        </div>
                    </div> :
                    <div>
                        {
                            (openlogin && openlogin.privKey) ?
                                <AccountInfo
                                    handleLogout={handleLogout}
                                    loading={loading}
                                    privKey={solanaPrivateKey}
                                    walletInfo={walletInfo}
                                    keypair={keypair}
                                /> :
                                <LoginContainer>
                                    <h1 style={{ textAlign: "center" }}>Openlogin x Solana</h1>
                                    <div onClick={handleLogin} className="btn">
                                        Login
                                    </div>
                                </LoginContainer>
                        }
                    </div>
            }
        </>
    );
}
