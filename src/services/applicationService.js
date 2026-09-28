import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db, isFirebaseConfigured } from './firebase';

export async function getApplications(uid) {
  if (!isFirebaseConfigured || !db) throw new Error('Firebase is not configured.');
  const snapshot = await getDocs(query(collection(db, 'applications'), where('userId', '==', uid)));
  return snapshot.docs.map((item) => ({ id: item.id, ...item.data() }));
}

export async function createApplication(application) {
  if (!isFirebaseConfigured || !db) throw new Error('Firebase is not configured.');
  const existingApplications = await getApplications(application.userId);
  if (existingApplications.some((item) => item.internshipId === application.internshipId)) {
    throw new Error('You have already applied for this internship.');
  }
  const result = await addDoc(collection(db, 'applications'), application);
  return { id: result.id, ...application };
}