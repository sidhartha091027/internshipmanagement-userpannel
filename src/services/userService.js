import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db, isFirebaseConfigured } from './firebase';

export async function getProfile(uid, fallback = {}) {
  if (!isFirebaseConfigured || !db) throw new Error('Firebase is not configured.');
  const snapshot = await getDoc(doc(db, 'users', uid));
  return snapshot.exists() ? snapshot.data() : fallback;
}

export async function saveProfile(uid, profile) {
  if (!isFirebaseConfigured || !db) throw new Error('Firebase is not configured.');
  await setDoc(doc(db, 'users', uid), profile, { merge: true });
  return profile;
}