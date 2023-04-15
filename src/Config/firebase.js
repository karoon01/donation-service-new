import firebase from 'firebase-admin'

const firebaseAdmin = firebase.initializeApp({
  credential: firebase.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  }),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
})

export const db = firebase.firestore()

export const bucket = firebase.storage(firebaseAdmin).bucket()

export const BUCKET_URL = `${process.env.CLOUD_STORAGE_URL}/${process.env.CLOUD_STORAGE_BUCKET}`

export default firebaseAdmin
