import styles from '../styles/header.module.scss'
import React,{ useState,useEffect} from 'react'
import { wchainId } from '../public/const';
import { connectWallet, getCurrentWalletConnected} from '../public/scripts/walletInteract'

export default function Header() {
    const [walletAddress, setWalletAddress] = useState("");   
    const connectWalletPressed = async () => {
      const walletResponse = await connectWallet();
      if(window.ethereum.chainId == wchainId){
        setWalletAddress(walletResponse.address);
        location.reload()
      }else{
        setWalletAddress("");
      }
    };

    useEffect(() => {
        const prepare = async () => {
            const walletResponse = await getCurrentWalletConnected();
            if (window.ethereum.chainId == wchainId) {
              setWalletAddress(walletResponse.address);
            }else{
              setWalletAddress("")
            }
            
        
          
          addWalletListener();
        };
        
        prepare()
         
      }, []);
    
      const addWalletListener = () => {
        if (window.ethereum) {
          window.ethereum.on("chainChanged", async (chainId) => {
            if (chainId == wchainId) {
              setWalletAddress(window.ethereum.selectedAddress);
            } else {
              setWalletAddress("");
            }
            location.reload()
          });
          window.ethereum.on("accountsChanged", async (accounts) => {
            location.reload()
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