import config from '../config';
import CryptoBoyNFTInterface from '../abi/CryptoBoys.json';
import Web3 from "web3";
let web3;
let CryptoBoyNFT;
let contractAddress;
import {getListOfSubscriber} from '../firebase/firestore';
import { sendNotification} from '../firebase/notifier';


export default class CryptoBoy {
    constructor(ws, contract) {
        web3 = new Web3(ws);
        CryptoBoyNFT = new web3.eth.Contract(CryptoBoyNFTInterface.abi, contract);
        contractAddress = contract;
        this.init();
    }

    async notifyToSubscriber(title, message) {
        const subscribers = await getListOfSubscriber(contractAddress);
        console.log("subscribers" + subscribers);
        subscribers.forEach((sub) => {
            console.log(sub);
            sendNotification(sub.token, title, message);
        })
    }

    init() {

        CryptoBoyNFT.getPastEvents( 'Transfer',
        {
            // filter: {myIndexedParam: [20,23], myOtherIndexedParam: '0x123456789...'}, // Using an array means OR: e.g. 20 or 23
            fromBlock: 25949635,
            toBlock: 'latest'
        }
        , (error, events) => {

            events.forEach(element => {
                this.notifyToSubscriber( 'New NFT Minted', 'from address : ' + element.address + 'and the tx Hash is:' + element.transactionHash );
                console.log(element);
            });
         })
        }
}

