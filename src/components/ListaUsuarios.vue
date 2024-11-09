<template>
    <div class="lista-usuarios">
      <h2>Lista de Usuarios</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="usuario in usuarios" :key="usuario.id">
            <td>{{ usuario.nombre }}</td>
            <td>{{ usuario.email }}</td>
            <td>
              <button 
                @click="eliminarUsuario(usuario.id)"
                class="btn-eliminar"
              >
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ListaUsuarios',
    computed: {
      usuarios() {
        return this.$store.state.usuarios
      }
    },
    methods: {
      async eliminarUsuario(id) {
        if (confirm('¿Estás seguro de eliminar este usuario?')) {
          const resultado = await this.$store.dispatch('eliminarUsuario', id)
          if (resultado) {
            alert('Usuario eliminado exitosamente')
          } else {
            alert('Error al eliminar usuario')
          }
        }
      }
    },
    created() {
      this.$store.dispatch('fetchUsuarios')
    }
  }
  </script>
  
  <style scoped>
  .lista-usuarios {
    margin: 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f4f4f4;
  }
  
  .btn-eliminar {
    background-color: #ff4444;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn-eliminar:hover {
    background-color: #cc0000;
  }
  </style>