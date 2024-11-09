<template>
  <div id="app">
    <h1>Sistema de Gestión de Usuarios</h1>
    <FormularioUsuario />
    <ListaUsuarios />
  </div>
</template>

<script>
import FormularioUsuario from './components/FormularioUsuario.vue'
import ListaUsuarios from './components/ListaUsuarios.vue'

export default {
  name: 'App',
  components: {
    FormularioUsuario,
    ListaUsuarios
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #333;
}
</style>