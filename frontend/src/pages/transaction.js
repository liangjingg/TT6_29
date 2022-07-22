import React, {useState,useEffect} from 'react';
import './transaction.css';
import logo from './currencypeople2.png';
import SelectCurrency from 'react-select-currency';
import arrow from './arrow.gif';

function Transaction(){
  const [userid, setUserId] = useState("");
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState();
  const [exchangedValue, setExchangedValue] = useState();
  const [inputCurrency, setInputCurrency] = useState("SGD");
  const [outputCurrency, setOutputCurrency] = useState("USD");
  const [exchangeRateData, setExchangeRateData] = useState([{"id": 1,"base_currency": "SGD","exchange_currency": "CAD","rate": 0.9255},
  {
    "id": 2,
    "base_currency": "SGD",
    "exchange_currency": "CNH",
    "rate": 4.7868
  },
  {
    "id": 3,
    "base_currency": "SGD",
    "exchange_currency": "EUR",
    "rate": 0.7086
  },
  {
    "id": 4,
    "base_currency": "SGD",
    "exchange_currency": "HKD",
    "rate": 5.5830
  },
  {
    "id": 5,
    "base_currency": "SGD",
    "exchange_currency": "JPY",
    "rate": 97.5303
  },
  {
    "id": 6,
    "base_currency": "SGD",
    "exchange_currency": "NZD",
    "rate": 1.1612
  },
  {
    "id": 7,
    "base_currency": "SGD",
    "exchange_currency": "NOK",
    "rate": 7.2912
  },
  {
    "id": 8,
    "base_currency": "SGD",
    "exchange_currency": "GBP",
    "rate": 0.5974
  },
  {
    "id": 9,
    "base_currency": "SGD",
    "exchange_currency": "SEK",
    "rate": 7.5168
  },
  {
    "id": 10,
    "base_currency": "SGD",
    "exchange_currency": "THB",
    "rate": 25.7275
  },
  {
    "id": 11,
    "base_currency": "SGD",
    "exchange_currency": "USD",
    "rate": 0.7113
  },
  {
    "id": 12,
    "base_currency": "SGD",
    "exchange_currency": "SGD",
    "rate": 1
  }
]);


  const fetchExchangeRate = () => {
    fetch('http://localhost:5000/api/exchange')
    .then(response => response.json())
    .then(responseJson => setExchangeRateData(JSON.stringify(responseJson)));
  }

  const updateInputValue = (event) => {
    setInputValue(event.target.value);

    let inputAmt = event.target.value;
    let inputCur =  inputCurrency;
    let outputCur = outputCurrency;

    exchangeRateData.map((x) => {
      if(x.base_currency===inputCurrency && x.exchange_currency===outputCurrency){
        setExchangedValue((inputAmt*x.rate).toFixed(3));
      }
    })
  }
  const updateInputCurrency = (event) => {
    setInputCurrency(event.target.value);
    exchangeRateData.map((x) => {
      if(x.base_currency===inputCurrency && x.exchange_currency===outputCurrency){
        setExchangedValue((inputValue*x.rate).toFixed(3));
      }
    })
  }
  const updateOutputCurrency = (event) => {
    setOutputCurrency(event.target.value);
    exchangeRateData.map((x) => {
      if(x.base_currency===inputCurrency && x.exchange_currency===outputCurrency){
        setExchangedValue((inputValue*x.rate).toFixed(3));
      }
    })
  }
  const exchangeCurrencies = () => {
    if(inputCurrency==outputCurrency){
      alert("you are exchanging to the same currency");
    }else{
      exchangeRateData.map((x) => {
        if(x.base_currency===inputCurrency && x.exchange_currency===outputCurrency){
          setExchangedValue(inputValue*x.rate);
          alert(inputValue*x.rate);
        }
      })
    }
  }

  useEffect(() => {
    setTimeout(() => {
      // alert(count);
      setCount((count) => count + 1);
    }, 1000);
  });

  useEffect(() => {
    fetchExchangeRate();
  }, []);

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
                <p> Change your currencies over here </p>
            </td>
          </tr>
        </table>
        <div class="exchangediv">
          <table class="exchangetable">
            <tbody>
            <tr>
              <td>
                <select onChange={updateInputCurrency} >
                  <option selected value="SGD">SGD $</option>
                  <option value="CAD">CAD $</option>
                  <option value="CNH">CNH ¥</option>
                  <option value="EUR">EUR €</option>
                  <option value="HKD">HKD $</option>
                  <option value="JPY">JPY ¥</option>
                  <option value="NZD">NZD $</option>
                  <option value="NOK">NOK Ø</option>
                  <option value="GBP">GBP £</option>
                  <option value="SEK">SEK Ø</option>
                  <option value="THB">THB ฿</option>
                  <option value="USD">USD $</option>
                </select>
                <input type="number" class="currencyInput" min="1" value={inputValue} onChange={updateInputValue}/>
              </td>
              <td>
                <img src={arrow} class="arrow"/>
              </td>
              <td>
                <select onChange={updateOutputCurrency} >
                  <option  value="SGD">SGD $</option>
                  <option value="CAD">CAD $</option>
                  <option value="CNH">CNH ¥</option>
                  <option value="EUR">EUR €</option>
                  <option value="HKD">HKD $</option>
                  <option value="JPY">JPY ¥</option>
                  <option value="NZD">NZD $</option>
                  <option value="NOK">NOK Ø</option>
                  <option value="GBP">GBP £</option>
                  <option value="SEK">SEK Ø</option>
                  <option value="THB">THB ฿</option>
                  <option selected value="USD">USD $</option>
                </select>
                <text class="outputAmt">{exchangedValue}</text>
              </td>
            </tr>
            </tbody>
          </table>

          <button type="button" onClick={exchangeCurrencies}>Exchange Currencies</button>
        </div>

      </div>
    </div>
  );
};
  
export default Transaction;