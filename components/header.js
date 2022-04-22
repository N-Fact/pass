import styles from '../styles/header.module.scss'
import React,{ useState,useEffect} from 'react'
import { chainId } from '../public/const';
import { connectWallet, getCurrentWalletConnected} from '../public/scripts/walletInteract'

export default function Header() {
    const [walletAddress, setWalletAddress] = useState("");
    
    const connectWalletPressed = async () => {
      const walletResponse = await connectWallet();
      if(window.ethereum.chainId == chainId){
        setWalletAddress(walletResponse.address);
      }else{
        setWalletAddress("");
      }
    };

    useEffect(() => {
        const prepare = async () => {
          if(window.ethereum.chainId == chainId){
            const walletResponse = await getCurrentWalletConnected();
            setWalletAddress(walletResponse.address);
          }else {
            setWalletAddress("");

          }
          
          addWalletListener();
        };
    
        prepare(); 
      }, []);
    
      const addWalletListener = () => {
        if (window.ethereum) {
          window.ethereum.on("chainChanged", async (chainId) => {
            location.reload()
            if (chainId == chainId) {
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