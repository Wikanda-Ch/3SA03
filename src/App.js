import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "𝐵𝑙𝑎𝑐𝑘𝑃𝑖𝑛𝑘";
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
    </center>

      <br></br>
      <WordCard value={word}/>
      
    </div>


    </body>
  );
}

export default App;
