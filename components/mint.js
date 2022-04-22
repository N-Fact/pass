import React, {useEffect,useState} from 'react';

import styles from '../styles/mint.module.scss'
export default function Mint(props) {

    useEffect(() => {
        try {
            if( document.querySelector(".minusBtn")){
                document.querySelector(".minusBtn").addEventListener("click", clickHandler);
                document.querySelector(".plusBtn").addEventListener("click", clickHandler);
            }
                        console.log(props.ownerBalance)
                        console.log(props.allowance)
    
            if(props.ownerBalance+1 >= props.allowance){
                document.getElementById("plusButton").style.display="none"
             }
    
            return () => {
                document.querySelector(".minusBtn").removeEventListener("click", clickHandler, true);
                document.querySelector(".plusBtn").removeEventListener("click", clickHandler, true);
            }
        } catch (error) {
            
        }
      
    });

    /** both plus and minus use the same function, but value is set by the class of the button */
    function clickHandler(event) {
        let val = Number(document.querySelector('.quantity').value);
        if (event.target.className.match(/\bminusBtn\b/)) {
            if (val <= 1) {
                val = 1;
            } else {
                val--;
                if(val+props.ownerBalance < props.allowance){
                    document.getElementById("plusButton").style.display="block"
                 }
            }
        } else if (event.target.className.match(/\bplusBtn\b/)) {
            val = val + 1;
            if(val+props.ownerBalance >= props.allowance){
               document.getElementById("plusButton").style.display="none"
            }
        }
        document.querySelector('.quantity').value = val;
    }
    return (
        <>
            <div className={styles.mintgroup}>
                <div className={styles.btngroup}>
                  
                    <button  className={"btnMint minusBtn " + styles.btn}>-</button>
                    <input className={"quantity " + styles.quantity} min={1} defaultValue={1} readOnly="readonly" id="quantity" type="number"/>
                     <button id="plusButton" className={"btnMint plusBtn " + styles.btn}>+</button>
                    
                   
                </div>
                <button className="btn" onClick={props.data} >Claim</button>
            </div>
            <div className={styles.mintgroup}>
                {/* <div className={styles.btngroup}>
                 {props.total} / {props.max}
                </div> */}
                {/* <div className={styles.price}>1 🔺</div> */}
            </div>
        </>
    )
}

