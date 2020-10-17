<template>
  <div class="home">
    <home-header />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from './header' 

export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>
