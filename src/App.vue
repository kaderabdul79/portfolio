<template>
  <div>
    <SiteHeader/>
    <contact-me />
    <!-- <router-view /> -->
    <SiteFooter/>
  </div>
</template>

<script>
import ContactMe from './components/ContactMe.vue';
import SiteFooter from './components/SiteFooter.vue';
import SiteHeader from './components/SiteHeader.vue';

export default {
    components: { SiteHeader, SiteFooter, ContactMe }
}
</script>

<style>

</style>