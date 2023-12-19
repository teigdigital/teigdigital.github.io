<script setup>
const logoClass = useRoute().name === 'index' ? 'big' : ''
</script>

<template>
  <div class="layout">
    <nuxt-link to="/" class="logo" v-bind:class="logoClass">Teig<span class="digital">Digital</span></nuxt-link>
    <navbar/>
    <NuxtPage/>
  </div>
</template>

<style lang="scss">
@use "sass:math";

@function strip-unit($value) {
  @return math.div($value, $value * 0 + 1);
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
  font-family: 'Frank Ruhl Libre', serif;
  background-color: $light-yellow;
}

h1,h2,h3,h4 {
  font-family: 'Josefin Sans', serif;
}

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
  font-family: 'Frank Ruhl Libre', serif;
  font-weight: 900;
  font-size: 64px;
  text-transform: lowercase;
  text-decoration: none;
  color: $brown !important;
}

.digital {
  font-family: 'Lato', serif;
  font-size: 16px;
  color: #000;
  font-weight: 800;
}

.blobb {
  width: 120px;
  height: 80px;
  background: #a84909;
  border-radius: 50%;
}

p {
  @media (min-width: 768px) {
    font-size: calc(22px + .3vw);
  }
}

.teig {
  color: $brown;
  font-weight: 900;
}
</style>


