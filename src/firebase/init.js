const admin = require("firebase-admin");
const serviceAccount = require("../../notificationapp-b7714-firebase-adminsdk-v2uao-4c2e133dbb.json");
const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://notificationapp-b7714.firebaseio.com'
});

module.exports = {
    firebaseApp
}
