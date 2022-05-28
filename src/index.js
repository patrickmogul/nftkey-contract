import "./styles.css";
const hre = require("hardhat");
const ethers = require("ethers");
const USDT_ABI = require("../abis/USDT_ABI.json");

async function main() {
  const usdt = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
  const provider = new ethers.providers.WebSocketProvider(
    "wss://eth-mainnet.ws.alchemyapi.io/v2/MY_API"
  );
  const contract = new ethers.Contract(usdt, USDT_ABI, provider);

  contract.on("Transfer", (from, to, value) => console.log(from, to, value));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
