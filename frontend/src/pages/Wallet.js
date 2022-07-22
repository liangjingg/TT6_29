import React, {useState,useEffect} from 'react';
import './wallet.css';
import logo from './currencypeople2.png';
import walletlogo from './wallet.png';
import removelogo from './remove.png';

import removeopen from './remove-open.png';
import removeclose from './remove-close.png';


function Wallet(){
  const [userid, setUserId] = useState(1);
  const [walletAmt, setWalletAmt] = useState(3);
  const [count, setCount] = useState(0);
  const [walletData, setWalletData] = useState([
  {
    "id": 1,
    "user_id": 1,
    "name": "Multi-Currency Account"
  },
  {
    "id": 2,
    "user_id": 1,
    "name": "Travel Account"
  },
  {
    "id": 3,
    "user_id": 2,
    "name": "Trading Account"
  },
  {
    "id": 4,
    "user_id": 3,
    "name": "Multi-Currency Account"
  },
  {
    "id": 5,
    "user_id": 4,
    "name": "Trip to Japan"
  }
]); 

  const removeWallet = () => {
    if(window.confirm("Please confirm that you are deleting this wallet")==true){
      alert("deleted");
    }else{

    }
  }

  const fetchWallet = () => {
    fetch('http://localhost:5000/api/wallet/1')
    .then(response => response.json())
    .then(responseJson => setWalletData(JSON.stringify(responseJson)));
  }


  useEffect(() => {
    setTimeout(() => {
      // alert(count);
      fetchWallet();
      setCount((count) => count + 1);
    }, 1000);
  });

  const dataRowView = (item, key) => {
    return (
      <div>
        {item.user_id == userid ? 
        <div>
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
                <p>{item.name}</p>
              </td>        
            </tr>
            </table>
          </div>
        </div>:
         <div></div>
        }
      </div> 
    );
  };

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
                <p> Here are your wallet details </p>
            </td>
          </tr>
        </table>
      </div>
      { walletData.map(dataRowView)}
    </div>
  );
};
  
export default Wallet;