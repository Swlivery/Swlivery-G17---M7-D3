<template>
    <div class="formulario">
      <h2>Agregar Usuario</h2>
      <form @submit.prevent="enviarFormulario">
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input 
            type="text" 
            id="nombre" 
            v-model="usuario.nombre" 
            required
          >
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            v-model="usuario.email" 
            required
          >
        </div>
        <button type="submit">Agregar Usuario</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FormularioUsuario',
    data() {
      return {
        usuario: {
          nombre: '',
          email: ''
        }
      }
    },
    methods: {
      async enviarFormulario() {
        const resultado = await this.$store.dispatch('agregarUsuario', this.usuario)
        if (resultado) {
          alert('Usuario agregado exitosamente')
          this.usuario = { nombre: '', email: '' }
        } else {
          alert('Error al agregar usuario')
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .formulario {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>