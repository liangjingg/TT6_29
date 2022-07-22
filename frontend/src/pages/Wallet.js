import React, {useState,} from 'react';
import './wallet.css';
import logo from './currencypeople2.png';
import walletlogo from './wallet.png';

function Wallet(){
  const [userid, setUserId] = useState("");
  const [walletAmt, setWalletAmt] = useState(3);
  const [walletData, setWalletData] = useState([]); 

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
          <td>
            <p> <img src={walletlogo} class="walletlogo"/> wallet name </p>
            <p> wallet amount </p>
          </td>
        </table>
      </div>
    </div>
  );
};
  
export default Wallet;