import styles from '../styles/header.module.scss'
import React,{ useState,useEffect} from 'react'

import { connectWallet, getCurrentWalletConnected} from '../public/scripts/walletInteract'

export default function Header() {
    const [walletAddress, setWalletAddress] = useState("");

    const connectWalletPressed = async () => {
      const walletResponse = await connectWallet();
      setWalletAddress(walletResponse.address);
    };

    useEffect(() => {
        const prepare = async () => {
          const walletResponse = await getCurrentWalletConnected();
          setWalletAddress(walletResponse.address);
          addWalletListener();
        };
    
        prepare(); 
      }, []);
    
      const addWalletListener = () => {
        if (window.ethereum) {
          window.ethereum.on("chainChanged", async (chainId) => {
            if (chainId == 0x4) {
              setWalletAddress(window.ethereum.selectedAddress);
            } else {
              setWalletAddress("");
            }
          });
          window.ethereum.on("accountsChanged", async (accounts) => {
            setWalletAddress("");
          });
        }
      };

    return (
        <div className={styles.header}>
            <div className="container">
                <div className="row row-flex">
                    <div className="col-6 left">
                        <div className={styles.logo}>
                            <img src="/assets/img/logo.png" alt="Logo"/>
                        </div>
                    </div>
                    <div className="col-6 right">
                    {walletAddress ? (
                            "Connected: " +
                            String(walletAddress).substring(0, 6) +
                            "..." +
                            String(walletAddress).substring(38)
                        ): (
                    <>
                        <button type='button' onClick={connectWalletPressed} className='btn'>Connect Wallet</button>                        
                    </>
                        )}
                    </div>
                </div>
                <hr/>
            </div>
        </div>
    )
}