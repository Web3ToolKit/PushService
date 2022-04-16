
import { firebaseApp } from './init';

const sendNotification = (registrationToken, title, body) => {
    const message = {
        notification: {
            title: title,
            body: body
        },
        token: registrationToken
    }
    firebaseApp.messaging().send(message)
    .then((res) => {
        console.log('notification send successfully' + res);
    })
    .catch((err) => {
        console.log('error in notification send' + err);
    })
}

export {
    sendNotification
}
