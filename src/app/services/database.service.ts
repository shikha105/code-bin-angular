import { Injectable } from '@angular/core';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
} from 'firebase/firestore';
import { AuthService } from './auth.service';
import { Title } from '@angular/platform-browser';
import { Snippet } from '../../models/snippet';
@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private db?: any;
  constructor(private authService: AuthService) {
    this.db = getFirestore();
  }

  async createSnippet(snippet: Snippet) {
    try {
      const docRef = await addDoc(collection(this.db, 'snippets'), {
        ...snippet,
        by: this.authService.getUid(),
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
      alert('something went wrong' + e);
    }
  }

  async getAllSnippets() {
    try {
      let result: any[] = [];
      const querySnapshot = await getDocs(collection(this.db, 'snippets'));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        result.push({ id: doc.id, ...doc.data() });
      });

      return result;
    } catch (e) {
      console.log('whats in e??', e);
      return [];
    }
  }

  async getSnippetById(docId: string) {
    const docRef = doc(this.db, 'snippets', docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
      return docSnap.data();
    } else {
      // docSnap.data() will be undefined in this case
      console.log('No such document!');
      return {
        id: '-1',
        title: 'not found',
        code: 'not found',
      };
    }
  }
}
