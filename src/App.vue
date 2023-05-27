<template>
  <HeaderNav />
  <BlogHome />
  <BookingForm />
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'
import BlogHome from './components/BlogHome.vue'
import BookingForm from './components/BookingForm.vue'

export default {
  name: 'App',
  components: {
    HeaderNav,
    BlogHome,
    BookingForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
