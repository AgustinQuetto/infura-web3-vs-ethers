const nodeUrl: string =
  "https://mainnet.infura.io/v3/41b43b2fbc724b209001f4f91ab785d3";

//web3
import Web3 from "web3";

const Web3Provider = new Web3.providers.HttpProvider(nodeUrl);
const Web3Instance: Web3 = new Web3(Web3Provider);

const address = "0x4Da4a0ad8f25EEee9392815817c36cD7BDD776E4";

const mainWeb3 = async () => {
  const weiBalance = await Web3Instance.eth.getBalance(address);
  const etherBalance = Web3Instance.utils.fromWei(weiBalance);
  console.log(etherBalance); //20.667254107121076203
};

mainWeb3();

//Ethers
import { ethers } from "ethers";

const ethersProvider = new ethers.providers.JsonRpcProvider(nodeUrl);

const mainEthers = async () => {
  const _balance = await ethersProvider.getBalance(address);
  const balance = ethers.utils.formatEther(_balance);
  console.log(balance); //20.667254107121076203
};

mainEthers();
