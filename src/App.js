import React, { Component } from 'react'
import Web3 from 'web3'
import {Table, Button, Image} from 'react-bootstrap'
import './App.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';

const tokenAddress = '0xd624601650a599b7a9D82FD8B847034F145E173A';
const tokenAbi = [ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "account", "type": "address" } ], "name": "MinterAdded", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "account", "type": "address" } ], "name": "MinterRemoved", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }, { "indexed": false, "internalType": "uint256[]", "name": "values", "type": "uint256[]" } ], "name": "TransferBatch", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "TransferSingle", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "string", "name": "value", "type": "string" }, { "indexed": true, "internalType": "uint256", "name": "id", "type": "uint256" } ], "name": "URI", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "addMinter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "accounts", "type": "address[]" }, { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" } ], "name": "balanceOfBatch", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseTokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "contractURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenIdType", "type": "uint256" } ], "name": "getNextFullTokenId", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getNextTokenId", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "increaseXP", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "isMinter", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenIdType", "type": "uint256" } ], "name": "mintWithTokenType", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "mintedTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceMinter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }, { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "safeBatchTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "gameContract", "type": "address" } ], "name": "setGameContract", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "tokenIdToXp", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "uri", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" } ]

const factoryAddress = "0x33b7E0dED0803ACE8E5EEf687788296eDB2A89aa";
const factoryAbi = [ { "inputs": [ { "internalType": "uint256", "name": "numOptions", "type": "uint256" } ], "name": "addOptions", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_optionId", "type": "uint256" }, { "internalType": "address", "name": "_toAddress", "type": "address" } ], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_proxyRegistryAddress", "type": "address" }, { "internalType": "address", "name": "_nftAddress", "type": "address" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newNFTAddress", "type": "address" } ], "name": "setNFTAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_tokenId", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "baseURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_optionId", "type": "uint256" } ], "name": "canMint", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_owner", "type": "address" }, { "internalType": "address", "name": "_operator", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "nftAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "numOptions", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_tokenId", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "_owner", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "proxyRegistryAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "supportsFactoryInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_optionId", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" } ]

const battleAddress = "0x7a67E6ce8579dd6B83C083a60ff09E888444b724";
const battleAbi = [ { "inputs": [ { "internalType": "address", "name": "gangToken", "type": "address" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "player", "type": "address" } ], "name": "TeamReceived", "type": "event" }, { "inputs": [], "name": "TEAM_MEMBERS", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "battle", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "index", "type": "uint256" } ], "name": "getTeamIds", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "kill", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_operator", "type": "address" }, { "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "uint256[]", "name": "_ids", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "_values", "type": "uint256[]" }, { "internalType": "bytes", "name": "_data", "type": "bytes" } ], "name": "onERC1155BatchReceived", "outputs": [ { "internalType": "bytes4", "name": "", "type": "bytes4" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_operator", "type": "address" }, { "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "uint256", "name": "_id", "type": "uint256" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" } ], "name": "onERC1155Received", "outputs": [ { "internalType": "bytes4", "name": "", "type": "bytes4" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "sendBackTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "teamCount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "teams", "outputs": [ { "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "address", "name": "player", "type": "address" }, { "internalType": "bytes", "name": "_data", "type": "bytes" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "token", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" } ]
const NUM_OPTIONS = 14;

const options = {
  crossDomain:true,
  method: 'GET',
  mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin':'*'
  }
}

class App extends Component {


  componentDidMount() {
    this.loadBlockchainData();

     for(let i=100; i<NUM_OPTIONS + 100; i++){
      fetch('https://gangs-across-the-globe.herokuapp.com/api/token/' + i, options)
        .then(res => res.json())
        .then((data) => {
          this.setState(prevState => ({
  mintingOptions: [...prevState.mintingOptions, 
  {
    "id": i,
    "name": data.name,
    "description": data.description.substring(0, 100),
    "image": <img src={data.image} width='100' height='100' />,
    "mint": <Button onClick={() => this.mint(i)}>Mint</Button>
  }]
}))
     
    });
      }
  }


  mint(id){
    this.state.factory.methods.mint(id, this.state.account).send({from: this.state.account});
  }

  sendToBattle() {
  	var ids = this.state.selectedIds;
  	if(ids.length != 6){
  		alert("please select 6 gang members");
  		return;
  	}
  	this.state.token.methods.safeBatchTransferFrom(
  		this.state.account, 
  		battleAddress, 
  		ids, 
  		[1,1,1,1,1,1], 0x0)
  	.send({from:this.state.account});
  }

  battle() {
  	this.state.battleContract.methods.battle().send({from: this.state.account});
  }

  onRowSelect(row, isSelected) {

  	var idList = this.state.selectedIds;
  	console.log(idList[0]);
  	if(idList.includes(row.id))
  	{
  		var index = idList.indexOf(row.id);
  		idList.splice(index, 1);
  		this.setState({selectedIds: idList});

  	}
  	else{
  	this.setState(prevState => ({
  		selectedIds: [...prevState.selectedIds, 
  			row.id
  		]
  	}));
  }

 console.log(this.state.selectedIds);
}


  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    this.setState({web3});
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    web3.eth.net.getId().then(id =>
    this.setState({network: id === 4 ? "Rinkeby" : "PLEASE CONNECT TO RINKEBY"})
  );

    const token = new web3.eth.Contract(tokenAbi, tokenAddress);
    this.setState({token});
    const factory = new web3.eth.Contract(factoryAbi, factoryAddress);
    this.setState({factory});
    const battleContract = new web3.eth.Contract(battleAbi, battleAddress);
    this.setState({battleContract});
    const tokenCount = await token.methods.getNextTokenId().call();
    console.log(tokenCount);
    this.setState({totalTokens: tokenCount -1});

    var teamCount = await battleContract.methods.teamCount().call();

    for (let i=0; i<=teamCount;i++){
    	battleContract.methods.teams(i).call().then(team => {
    		battleContract.methods.getTeamIds(i).call().then(ids =>{
    			this.setState(prevState => ({
    				teams: [...prevState.teams, 
    				{"address": team.player,
    					"ids": ids.join(", ")}]
    			}))
    		})	
    })
    	}


    for(let i=0; i<=tokenCount; i++) {
      
      var tokenId;
      var owner;
      var xp;
      try{
      	tokenId = await token.methods.mintedTokens(i).call();
      	owner = await token.methods.ownerOf(tokenId).call();
        xp = await token.methods.tokenIdToXp(tokenId).call();
  }
  catch{

  }
  finally{
  	 console.log(tokenId);
      if(owner == this.state.account){
        this.setState(prevState => ({
          owned: [...prevState.owned, {
            "id": tokenId,
            "xp": xp
          }]
        }))
      }
    
    }
  }
     

 

  }

  constructor(props) {
    super(props)
    this.state = { account: '', 
    mintingOptions: [],
    owned:[],
    teams: [],
	selectedIds: []}

	this.onRowSelect = this.onRowSelect.bind(this)
  }

  render() {
   

const mintColumns = [{
  dataField: 'id',
  text: 'ID'
}, {
  dataField: 'name',
  text: 'Name'
},
{
dataField: 'description',
  text: 'description'
}, {
  dataField: 'image',
  text: 'Image'
},
{
  dataField: 'mint',
  text: "Mint"
}];

const ownedColumns = [{
  dataField: 'id',
  text: 'ID'
},
{
  dataField: 'xp',
  text: 'XP'
}];

const battleColumns = [{
  dataField: 'address',
  text: 'Address'
}, {
  dataField: 'ids',
  text: 'IDs'
}];



const selectRow = {
  mode: 'checkbox',
  clickToSelect: true,
  onSelect: this.onRowSelect
};



    return (
      <div className="container">
      <div className="header">
        <h1>Gangs Across The Globe!</h1>
        <p>Network: {this.state.network} </p>
        <p>Your account: {this.state.account}</p>
        <p>Token contract: {tokenAddress}</p>
        <p>Factory contract: {factoryAddress} (Opensea integration)</p>
        <p>Battle contract: {battleAddress} (Send gangs of 6 to this address)</p>
        <p>Total tokens Minted: {this.state.totalTokens}</p>
      </div>
      <div className="mint-tokens">
        <h1> Mint tokens to your wallet</h1>
        {this.state.mintingOptions.length > 0 ? 
          <BootstrapTable keyField='id' data={ this.state.mintingOptions } columns={ mintColumns }  />
          : ""
        }
      
      </div>
      <div className="your-tokens">
        <h1> Gang Members in your Wallet </h1>
        <BootstrapTable keyField='id' data={ this.state.owned } columns={ ownedColumns } selectRow={ selectRow } />
         
         
        <Button onClick={() => this.sendToBattle()}> Send Selected Tokens To Battle </Button>
      </div>
      <div className="your-tokens">
        <h1> Gang Teams ready to fight</h1>
          <BootstrapTable keyField='id' data={ this.state.teams } columns={ battleColumns }/>
          
          
      </div>
      <div className="actions">
      <Button onClick={() => this.battle()}>Battle Now</Button>
      </div>
      </div>
    );
  }
}

export default App;