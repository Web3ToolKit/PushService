import { firebaseApp } from './init';

const db = firebaseApp.firestore();

const getContractList = async () => {
    let protocols = [];
    let docRef = await db.collection('protocol').get();
    docRef.docs.forEach((doc) => {
        protocols.push(doc.data());
    });
    return protocols;
}

const getListOfSubscriber = async (contractAddress) => {
    let subscriber = [];
    let docRef = await db.collection('subscriber').get();
    docRef.docs.forEach((doc) => {
        console.log(contractAddress);
        console.log(doc.data().contract);
        if(doc.data().contract == contractAddress && doc.data().IsSubscribed) {
            subscriber.push(doc.data());
        }
    });
    return subscriber;
}

export {
    getContractList,
    getListOfSubscriber
}
