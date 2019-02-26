<template>
  <div>
    <h1>Ta kontakt!</h1>
    <p>Vi sitter på PARK, og vil gjerne snakke med deg!</p>

    <a class="phone" href="tel:+4795121144">+47 951 21 144</a><br>
    <a class="email" href="mailto:post@teigdigital.no">post@teigdigital.no</a>
    <p class="park">PARK gründer- og næringshus</p>
    <p class="park-address">Grønnegata 85,<br>2317 Hamar</p>
  </div>
</template>

<style lang="scss" scoped>
 .phone, .email {
   display: inline-block;
   font-size: 1.5rem;
   font-weight: 900;
   color: $blue;
   text-decoration: none;
 }
 .phone {
   margin-bottom: .5rem;
 }
 .email {
   margin-bottom: 2rem;
 }
 .park {
   font-weight: 900;
 }
 .park-address {
   font-size: 1.2rem;
 }
</style>
