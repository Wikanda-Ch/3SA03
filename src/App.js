import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word1 = "𝐵𝑙𝑎𝑐𝑘𝑃𝑖𝑛𝑘";
const word2 = "8311";
const word3 = "8217";
const word4 = "8528";

function App() {
  return (
    <body>

    <div>
    <br></br>
    <center>
      
      <footer><br></br><b><h1><b1>🌈𝑊𝑒𝑙𝑐𝑜𝑚𝑒 𝑡𝑜 𝑡ℎ𝑒 𝑆ℎ𝑢𝑓𝑓𝑙𝑒 𝑔𝑎𝑚𝑒!✨</b1></h1></b><br></br></footer>

    <br></br> 
    <img src="https://i.pinimg.com/564x/fa/60/19/fa601977af2c5100d69afc3d1f3aff07.jpg" alt="Image"></img>
    <br></br> 
    </center>

    <center>
    <b2>
      <br></br>❗𝐶𝑙𝑖𝑐𝑘 𝑡ℎ𝑒 𝑏𝑜𝑡𝑡𝑜𝑛 𝑡𝑜 𝑝𝑙𝑎𝑦 𝑡ℎ𝑒 𝑔𝑎𝑚𝑒. 
      <br></br>⭕️𝐼𝑓 𝑦𝑜𝑢 𝑠𝑤𝑎𝑝 𝑡𝑟𝑢𝑒,𝑦𝑜𝑢 𝑤𝑖𝑛.
      <br></br>❌𝐼𝑓 𝑦𝑜𝑢 𝑠𝑤𝑎𝑝 𝑤𝑟𝑜𝑛𝑔,𝑦𝑜𝑢 𝑙𝑜𝑠𝑒 𝑎𝑛𝑑 𝑡ℎ𝑒 𝑔𝑎𝑚𝑒 𝑤𝑖𝑙𝑙 𝑟𝑒𝑠𝑒𝑡.
    </b2>
      <br></br><br></br>
    </center>

    <div id="Question" class="container ">
    <container>
      <br></br><b2>𝐻𝑖𝑛𝑡: 𝑆𝑜𝑢𝑡ℎ 𝐾𝑜𝑟𝑒𝑎𝑛 𝐺𝑖𝑟𝑙 𝐺𝑟𝑜𝑢𝑝 👭🏼👭🏼</b2>
      <br></br>
      <WordCard value={word1}/>

      <br></br><b2>1. __ x __ + __ - __ = 24</b2>
      <br></br>
      <WordCard value={word2}/>

      <br></br><b2>2. ( __ x __ ) + __ + __ = 24</b2>
      <br></br>
      <WordCard value={word3}/>

      <br></br><b2>3. ( __ x __ ) - ( __ x __ ) = 24</b2>
      <br></br>
      <WordCard value={word4}/>

      </container>
      </div>

    </div>
    </body>
  );
}

export default App;
