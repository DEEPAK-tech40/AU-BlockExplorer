import { useState } from "react";
import Header from "./components/Header";
import CurrentBlockNum from "./components/CurrentBlockNum";
import SearchBar from "./components/SearchBar";
import "./App.css";

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface

function App() {
  const [currentBlockNumber, setCurrentBlockNumber] = useState(0);
  const [blockNumber, setBlockNumber] = useState(0);
  const [transactionHash, setTransactionHash] = useState("");

  return (
    <div className="App">
      <Header />
      <CurrentBlockNum
        currentBlockNumber={currentBlockNumber}
        setCurrentBlockNumber={setCurrentBlockNumber}
      />
      <SearchBar
        blockNumber={blockNumber}
        setBlockNumber={setBlockNumber}
        transactionHash={transactionHash}
        setTransactionHash={setTransactionHash}
      />
    </div>
  );
}

export default App;
