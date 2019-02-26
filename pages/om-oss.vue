<template>
  <div>
    <h1>Om oss</h1>
    <div class="center">
      <div class="image"><img src="https://secure.meetupstatic.com/photos/member/c/2/8/0/highres_167869792.jpeg"></div>
      <p class="name">Ingrid Sorgendal</p>
      <p>Interaksjonsdesigner</p>
      <p><a class="phone" href="tel:+4795121144">+47 993 89 575</a></p>
      <p><a class="email" href="mailto:ingrid.sorgendal@teigdigital.no">ingrid.sorgendal<br>@teigdigital.no</a></p>
  
      <div class="image tor-egil"><img src="/toregil.png"></div>
      <p class="name">Tor Egil Refsahl</p>
      <p>Seniorutvikler og arkitekt</p>
      <p><a class="phone" href="tel:+4795121144">+47 951 21 144</a></p>
      <p><a class="email" href="mailto:toregil.refsahl@teigdigital.no">toregil.refsahl<br>@teigdigital.no</a></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .image {
    display: inline-block;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 5px solid $brown;
    overflow:hidden;
    box-shadow: 0 0 5px #333;
  }
  .tor-egil {
    clear: right;
  }
  .center {
    text-align: center;
  }
  .name {
    font-size: 2rem;
    font-weight: 900;
    font-family: 'Josefin Sans';
  }
  .phone, .email {
    display: inline-block;
    font-size: 1.5rem;
    font-weight: 900;
    color: $blue;
    text-decoration: none;
  }
  .email {
    margin-bottom: 3rem;
  }
</style>
