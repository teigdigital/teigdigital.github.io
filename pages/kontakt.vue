<template>
  <div>
    <h1>Ta kontakt!</h1>
    <p>Organisasjonsnummer: 992 977 469</p>

    <a class="phone" href="tel:+4795121144">+47 951 21 144</a><br>
    <a class="email" href="mailto:post@teigdigital.no">post@teigdigital.no</a>
    <p class="park">Adresse</p>
    <p class="park-address">Teig Digital AS<br>co/Tor Egil Refsahl<br>Holsetgata 62,<br>2318 Hamar</p>
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
