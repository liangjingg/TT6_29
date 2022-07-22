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
  const [individualWalletData, setIndividualWalletData] = useState([
  {
    "id": 1,
    "wallet_id": 1,
    "currency": "SGD",
    "amount": 4294.50
  },
  {
    "id": 2,
    "wallet_id": 1,
    "currency": "CAD",
    "amount": 5687.65
  },
  {
    "id": 3,
    "wallet_id": 1,
    "currency": "CNH",
    "amount": 6063.14
  },
  {
    "id": 4,
    "wallet_id": 1,
    "currency": "EUR",
    "amount": 8089.82
  },
  {
    "id": 5,
    "wallet_id": 1,
    "currency": "HKD",
    "amount": 7862.36
  },
  {
    "id": 6,
    "wallet_id": 1,
    "currency": "JPY",
    "amount": 5759.15
  },
  {
    "id": 7,
    "wallet_id": 1,
    "currency": "NZD",
    "amount": 6943.26
  },
  {
    "id": 8,
    "wallet_id": 1,
    "currency": "NOK",
    "amount": 4038.10
  },
  {
    "id": 9,
    "wallet_id": 1,
    "currency": "GBP",
    "amount": 8287.33
  },
  {
    "id": 10,
    "wallet_id": 1,
    "currency": "SEK",
    "amount": 5126.40
  },
  {
    "id": 11,
    "wallet_id": 1,
    "currency": "THB",
    "amount": 147.62
  },
  {
    "id": 12,
    "wallet_id": 1,
    "currency": "USD",
    "amount": 7331.77
  },
  {
    "id": 13,
    "wallet_id": 2,
    "currency": "SGD",
    "amount": 485.19
  },
  {
    "id": 14,
    "wallet_id": 2,
    "currency": "CAD",
    "amount": 2634.58
  },
  {
    "id": 15,
    "wallet_id": 2,
    "currency": "CNH",
    "amount": 3893.29
  },
  {
    "id": 16,
    "wallet_id": 2,
    "currency": "EUR",
    "amount": 3887.15
  },
  {
    "id": 17,
    "wallet_id": 2,
    "currency": "HKD",
    "amount": 4065.34
  },
  {
    "id": 18,
    "wallet_id": 2,
    "currency": "JPY",
    "amount": 1702.47
  },
  {
    "id": 19,
    "wallet_id": 2,
    "currency": "NZD",
    "amount": 3299.38
  },
  {
    "id": 20,
    "wallet_id": 2,
    "currency": "NOK",
    "amount": 7681.32
  },
  {
    "id": 21,
    "wallet_id": 2,
    "currency": "GBP",
    "amount": 3720.37
  },
  {
    "id": 22,
    "wallet_id": 2,
    "currency": "SEK",
    "amount": 4511.50
  },
  {
    "id": 23,
    "wallet_id": 2,
    "currency": "THB",
    "amount": 6216.60
  },
  {
    "id": 24,
    "wallet_id": 2,
    "currency": "USD",
    "amount": 9103.66
  }
]);
  const [selectedWalletId, setSelectedWalletId] = useState(0);

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
      setCount((count) => count + 1);
    }, 1000);
  });

  useEffect(() => {
    fetchWallet();
  }, []);

  const showIndividualWallet = (walletId) =>{
    setSelectedWalletId(walletId);
  }

  const dataRowView = (item, key) => {
    return (
      <div onClick={() => showIndividualWallet(item.id)}>
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
            <tr>
            { item.id == selectedWalletId?
              individualWalletData.map(individualRowView)
              :
              <div></div>
            }
            </tr>
            </table>
          </div>
        </div>:
         <div></div>
        }
      </div> 
    );
  };

  const individualRowView = (item, key) =>{
    return(
    <div class="currencydiv">
      {
        item.wallet_id == selectedWalletId ?
        <p>{item.currency}{" "}{item.amount}</p>
        :
        <div></div>
      }
    </div>
    )
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
                <p> Here are your wallet details </p>
            </td>
          </tr>
        </table>
      </div>
      { walletData.map(dataRowView) }
    </div>
  );
};
  
export default Wallet;