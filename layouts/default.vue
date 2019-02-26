<template>
  <div class="layout">
    <nuxt-link to="/" class="logo" v-bind:class="logoClass">Teig<span class="digital">Digital</span></nuxt-link>
    <navbar />
    <nuxt class="content" />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Navbar from '~/components/navbar';

  export default {
    components: {
      Navbar
    },
    computed: mapState({
      page: state => state.page,
      logoClass: state => state.page === 'index' ? 'big' : ''
    })
  }
</script>

<style lang="scss">
  body {
    font-family: 'Frank Ruhl Libre';
    background-color: $light-yellow;
    // font-size: calc(20px + .3vw);
    // @media (min-width: 768px) {
    //   font-size: calc(32px + .3vw);
    // }
  }

  @function strip-unit($value) {
    @return $value / ($value * 0 + 1);
  }

  @mixin fluid-type($min-vw, $max-vw, $min-font-size, $max-font-size) {
    $u1: unit($min-vw);
    $u2: unit($max-vw);
    $u3: unit($min-font-size);
    $u4: unit($max-font-size);

    @if $u1 == $u2 and $u1 == $u3 and $u1 == $u4 {
      & {

        font-size: $min-font-size;
        @media screen and (min-width: $min-vw) {
          font-size: calc(#{$min-font-size} + #{strip-unit($max-font-size - $min-font-size)} * ((100vw - #{$min-vw}) / #{strip-unit($max-vw - $min-vw)}));
        }

        @media screen and (min-width: $max-vw) {
          font-size: $max-font-size;
        }
      }
    }
  }

  $min_width: 320px;
  $max_width: 1000px;
  $min_font: 18px;
  $max_font: 26px;

  body {
    @include fluid-type($min_width, $max_width, $min_font, $max_font);
  }
  h1 {
    font-family: 'Josefin Sans';
  }
   
  // p {
  //   font-size: 1.6rem;
  // }

  // p {
  //   font-size: 24px;
  //   font-size: calc(20px + .3vw);

  //   line-height: 1.2;
  //   @media (min-width: 768px) {
  //     font-size: calc(32px + .3vw);
  //   }
  // }

  *:focus {
    outline-color: $pink;
    outline-style: dotted;
  }
  .layout {
    max-width: 900px;
    margin: 0 auto;
  }
  .content {
    margin: 6vh 15px 0;
  }
  .logo {
    display: inline-block;
    margin: 15px;
    font-family: 'Frank Ruhl Libre';
    font-weight: 900;
    font-size: 64px;
    text-transform: lowercase;
    text-decoration: none;
    color: $brown !important;
    // transition: all .5s;
  }
  // .logo.big {
  //   text-align: center;
  //   // font-size: calc(40px + 8vw);
  //   transform: translateY(30vh) scale(2);
  //   margin-bottom: 30vh;
  // }

  .digital {
    font-family: 'Lato';
    font-size: 16px;
    color: #000;
    font-weight: 800;
  }
  
  // .page-enter-active {
  //   transition: opacity 0.5s ease-out;
  // }
  // .page-leave-active {
  //   transition: opacity 0.1s ease-in;
  // }
  // .page-enter,
  // .page-leave-active {
  //   opacity: 0;
  // }

  .blobb {
    width: 120px;
    height: 80px;
    background: #a84909;
    border-radius: 50%;
  }
</style>


