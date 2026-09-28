import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth, isFirebaseConfigured } from './firebase';

function requireFirebase() {
  if (!isFirebaseConfigured || !auth) {
    throw new Error('Firebase is not configured. Add the REACT_APP_FIREBASE_* values to .env.local.');
  }
}

export async function signIn(email, password) {
  requireFirebase();
  const result = await signInWithEmailAndPassword(auth, email, password);
  return result.user;
}

export async function signUp({ name, email, password }) {
  requireFirebase();
  const result = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(result.user, { displayName: name });
  return result.user;
}

export async function signInWithGoogle() {
  requireFirebase();
  const result = await signInWithPopup(auth, new GoogleAuthProvider());
  return result.user;
}

export async function resetPassword(email) {
  requireFirebase();
  return sendPasswordResetEmail(auth, email);
}

export async function logout() {
  requireFirebase();
  await signOut(auth);
}