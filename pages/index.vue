<template>
  <NuxtLayout>
    <div>
      <p>I vår <span class="teig">teig</span> dyrker vi digital spesialkompetanse innen design og teknologi. Vi er
        konsulenter, men tror på vekselbruk og utvikler egne produkter ved anledning.</p>
      <p>Dessuten tror vi på samarbeid og sterke fagmiljøer på tvers av foretak og institusjoner. Derfor deler vi så mye
        som mulig av det vi kan, gjør og lærer.</p>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
p {
  font-size: calc(20px + .3vw);

  line-height: 1.2;
  @media (min-width: 768px) {
    font-size: calc(32px + .3vw);
  }
}

.teig {
  color: $brown;
  font-weight: 900;
}
</style>

<script setup lang="ts">
</script>