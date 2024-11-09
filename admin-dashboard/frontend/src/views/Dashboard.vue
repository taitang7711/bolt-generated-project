<template>
  <div class="dashboard">
    <Navbar />
    <Sidebar />
    <h1>Dashboard</h1>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';

export default {
  name: 'Dashboard',
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style scoped>
/* Dashboard styles */
</style>
