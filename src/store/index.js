import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../firebase'
import { 
  collection, 
  getDocs, 
  addDoc, 
  deleteDoc, 
  doc 
} from '@firebase/firestore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarios: []
  },
  mutations: {
    SET_USUARIOS(state, usuarios) {
      state.usuarios = usuarios
    },
    ADD_USUARIO(state, usuario) {
      state.usuarios.push(usuario)
    },
    DELETE_USUARIO(state, id) {
      state.usuarios = state.usuarios.filter(usuario => usuario.id !== id)
    }
  },
  actions: {
    async fetchUsuarios({ commit }) {
      try {
        const querySnapshot = await getDocs(collection(db, 'usuarios'))
        const usuarios = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        commit('SET_USUARIOS', usuarios)
      } catch (error) {
        console.error('Error al obtener usuarios:', error)
      }
    },
    async agregarUsuario({ commit }, usuario) {
      try {
        const docRef = await addDoc(collection(db, 'usuarios'), usuario)
        commit('ADD_USUARIO', { id: docRef.id, ...usuario })
        return true
      } catch (error) {
        console.error('Error al agregar usuario:', error)
        return false
      }
    },
    async eliminarUsuario({ commit }, id) {
      try {
        await deleteDoc(doc(db, 'usuarios', id))
        commit('DELETE_USUARIO', id)
        return true
      } catch (error) {
        console.error('Error al eliminar usuario:', error)
        return false
      }
    }
  }
})