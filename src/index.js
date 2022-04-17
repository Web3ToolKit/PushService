import { Worker } from 'worker_threads';
import { getContractList } from './firebase/firestore';
import config from './config';
import ERC721Listner from './events/ERC721Listner';
import CryptoBoy from './events/CryptoBoy';
import NotificationModuleListener from './events/NotificationModuleListner';

new CryptoBoy(config.rpcEndpoint,config.ERC721Contract);
new ERC721Listner(config.rpcEndpoint,config.ERC721Contract);
new NotificationModuleListener(config.NotificationModuleContract);
// getContractList().then((res) => {
//     console.log(res);

// }).catch((er) => {
//     console.log(er);
// });



