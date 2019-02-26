<template>
  <nav :class="{showNavbar}">
    <button @click="showNavbar = !showNavbar">
      <i class="fas" :class="{['fa-bars']: !showNavbar, ['fa-times']: showNavbar}"></i>
    </button>
    <transition name="fade">
      <div class="links" v-if="showNavbar">
        <nuxt-link to="/"><i class="fas fa-home"></i></nuxt-link>
        <nuxt-link to="/om-oss">Om oss</nuxt-link>
        <!-- <nuxt-link to="/what">Hva</nuxt-link> -->
        <nuxt-link to="/kontakt-oss">Kontakt</nuxt-link>
      </div>
    </transition>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        showNavbar: false
      }
    },
    watch: {
    '$route': function() {
      setTimeout(() => {
        this.showNavbar = false;
      }, 100);
      },
    }
  }
</script>

<style scoped lang="scss">
  a {
    color: #666;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    font-family: 'Josefin Sans';
  }
  a:hover {
    color: darken($blue, 10%);
  }
  .nuxt-link-exact-active {
    color: $blue;
  }
  nav {
    position: relative;
  }
  .links {
    position: absolute;
    text-align: right;
    padding:  0 20px;
    top: 0;
    left: 0;
    right: 0;
    min-height: calc(100vh - 120px);
    background-color: $light-yellow;
  }
  .links > * {
    float: right;
    clear: both;
    margin: 10px;
    font-size: 24px;
    padding: 10px 5px 5px;
  }
  button {
    height: 60px;
    width: 60px;
    appearance: none;
    background-color: initial;
    font-size: 25px;
    border: none;
    position: absolute;
    top: -80px;
    right: 15px;
    padding: 0;
    cursor: pointer;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .1s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
