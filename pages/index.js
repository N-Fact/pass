import Layout from "../components/layout";
import Mint from "../components/mint";
import React,{ useState,useEffect} from 'react'
import { wchainId } from "../public/const";
import {getProof} from '../public/scripts/merkleTree'
import {getTotalSupply, getSaleState, getMaxSupply, startSale, mintNFT,getOwnerBalance,getWalletAddress} from '../public/scripts/contractIntereact'


export default function Index() {
    const [totalSupply, setTotalSupply] = useState(0);
    const [isSaleActive, setSaleActive] = useState(false);
    const [maxSupply, setMaxSupply] = useState(1);
    const [ownerBalance, setOwnerBalance] = useState(0);
    const [proof, setProof] = useState(false);
    const [allowance, setAllowance] = useState();
    const GoldenWhitelistAddress = require('../public/scripts/GoldenWhitelist.json')
    const SilverWhitelistAddress = require('../public/scripts/SilverWhitelist.json')
    var walletAddress

    const Button = () => (    
        <>
        {!proof && totalSupply < maxSupply && isSaleActive && 
        <p>You are not whitelisted</p> } 
    
        {isSaleActive == true && totalSupply < maxSupply  && proof && allowance > ownerBalance&&
        <Mint data={preMintFunction} total={totalSupply} max={maxSupply} allowance={allowance} ownerBalance={ownerBalance}/>} 
    
        {isSaleActive == false && totalSupply < maxSupply &&
        <p>Sale not started</p>} 
    
        { totalSupply == maxSupply &&
        <p>Sold out</p>} 
    
        { ownerBalance >= allowance  && totalSupply < maxSupply && proof&&
        <p>Already minted</p> } 
    
        </>
       )
       
       async function preMintFunction()  {
        var proof = checkAddressIsGold()
        const quantity = document.getElementById("quantity").value
        await mintNFT(proof.allowance,quantity, proof.proof)
       
      }
      
      function checkAddressIsGold(){
        let GoldenProof = getProof(GoldenWhitelistAddress,walletAddress,true,false)
        let SilverProof = getProof(SilverWhitelistAddress,walletAddress,false,true)
        if(GoldenProof.verify == true){
          return {
            isGold :true,
            proof:GoldenProof.proof,
            allowance:GoldenProof.allowance,
          verify:GoldenProof.verify
        }
        }else if(SilverProof.verify == true){
          return {
            isGold:false,
            proof:SilverProof.proof,
            allowance:SilverProof.allowance,
            verify:SilverProof.verify
        }
        }
        else{
          return{
            isGold:false,
            proof:[],
            allowance:0,
            verify:false
          }
        }
      }
      
      
      useEffect(() => {
        const prepare = async () => {
          const is_sale = await getSaleState()
          const total_supply = await getTotalSupply()
          const max_supply = await getMaxSupply()
          const owner_balance = await getOwnerBalance();
          walletAddress = await getWalletAddress()
          var isVerify = checkAddressIsGold()
          setProof(isVerify.verify)
          setAllowance(isVerify.allowance)
          try {
            setTotalSupply(total_supply.toNumber())
            setSaleActive(is_sale)
            setMaxSupply(max_supply.toNumber())
            setOwnerBalance(owner_balance.toNumber())
          } catch (error) {
            
          }
          
           try {
               if(window.ethereum.selectedAddress == null){
                document.getElementById("mintDiv").innerHTML = ""
                const div = document.createElement("div");
                div.className = "col-6 center"
                const h = document.createElement("p")
                p.style.paddingLeft ="25%" 
                p.innerText = "Connect Wallet"
                div.appendChild(p)
                document.getElementById("mintDiv").appendChild(div)
                const div2 = document.createElement("div");
                div.className= "col-6 lef"
                const h1 = document.createElement("h1");
                h1.innerText = "Dwarf Knights Mint Pass"
                const p2 = document.createElement("p");
                p2.innerText = "The pass you need to become a Dwarf Knight."
                div2.appendChild(h1)
                div2.appendChild(p2)
                document.getElementById("mintDiv").appendChild(div2)
               }
                else if (window.ethereum.chainId != wchainId) {
                    document.getElementById("mintDiv").innerHTML = ""
                    const div = document.createElement("div");
                    div.className = "col-6 center"
                    const p = document.createElement("p")
                    p.style.paddingLeft ="25%"
                    p.innerText = "Unsupported Network"
                    div.appendChild(p)
                    document.getElementById("mintDiv").appendChild(div)
                    const div2 = document.createElement("div");
                    div.className= "col-6 lef"
                    const h1 = document.createElement("h1");
                    h1.innerText = "Dwarf Knights Mint Pass"
                    const p2 = document.createElement("p");
                    p2.innerText = "The pass you need to become a Dwarf Knight."
                    div2.appendChild(h1)
                    div2.appendChild(p2)
                    document.getElementById("mintDiv").appendChild(div2)
                }
                } catch (error) {
                    console.log(error)
                }
    
        };
      
        prepare();
      });
      
    return (
        <div className="container">
            <div className="row row-flex row-flex-top" id="mintDiv">
                <div className="col-6 center"  >
                   <Button/>
                    <a id="mintLink" href="#"></a>
                </div>
                <div className="col-6 left">
                    <h1>Dwarf Knights Mint Pass</h1>
                    <p>
                    The pass you need to become a Dwarf Knight
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <video src="/assets/pass.mp4" autoPlay muted loop="loop"/>
                </div>
                <div className="col-6">
                    <div className="description">
                        <div className="row"><strong>Mint price:</strong><span>Free ♥</span></div>
                        <div className="row"><strong>Minting date:</strong><span>22 - 26 April 2022</span></div>
                        {/* <div className="row"><strong>Total supply:</strong><span>6666</span></div> */}
                        {/* <div className="row"><strong>Resale royalties:</strong><span>5% for all the NFTs holders</span></div> */}
                        <div className="row">
                            <strong>Description:</strong>
                            <p>
                            A Mint Pass is used for minting up to 5 Dwarf Knights NFTs
                            </p>
                            
                        </div>
                        <div className="row links">
                            <ul>
                                <li>
                                    <a href="https://twitter.com/DwarfKnightNft" target="_blank" className="twitter">Twitter</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/dwarfknights" target="_blank" className="discord">Discord</a>
                                </li>
                                <li>
                                    <a href="https://dwarfknights.com/" target="_blank" className="website">Website</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Index.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}