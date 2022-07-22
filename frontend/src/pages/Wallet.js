import React, {useState,} from 'react';
import './wallet.css';
import logo from './currencypeople2.png';
import walletlogo from './wallet.png';
import removelogo from './remove.png';

import removeopen from './remove-open.png';
import removeclose from './remove-close.png';


function Wallet(){
  const [userid, setUserId] = useState("");
  const [walletAmt, setWalletAmt] = useState(3);
  const [walletData, setWalletData] = useState([]); 

  const removeWallet = () => {
    if(window.confirm("Please confirm that you are deleting this wallet")==true){
      alert("deleted");
    }else{

    }
  }

  return (
    <div>
      <div class="WalletBanner">
        <table class="bannerTable">
          <tr>
            <td class="logorow">
              <img src={logo} class="BannerLogo"/>
            </td>
            <td class="bannerrow">
                <h1>HELLO -USERNAME-, </h1>
                <h1>welcome to TT-29</h1>
                <p> some other text </p>
            </td>
          </tr>
        </table>
      </div>
      <div class="walletdiv">
        <table class="wallettable">
        <tr>
          <td class="row1">
            <img src={walletlogo} class="walletlogo"/>
          </td>
          <td class="row4">
            <img onClick={() => removeWallet()} src={removeclose} class="removelogo" onMouseOut={e => e.currentTarget.src = removeclose} onMouseOver={e => e.currentTarget.src = removeopen}/>
          </td>
        </tr>
        <tr>
          <td class="row2">
            <p>wallet name </p>
          </td>
          <td class="row3">
            <p> $ xx </p>
          </td>        
        </tr>
        </table>
      </div>
    </div>
  );
};
  
export default Wallet;