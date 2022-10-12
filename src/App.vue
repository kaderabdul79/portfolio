<template>
  <div>
    <SiteHeader/>
    <Education />
    <ContactMe />
    <!-- <router-view /> -->
    <SiteFooter/>
  </div>
</template>

<script>
import ContactMe from './components/ContactMe.vue';
import Education from './components/Education.vue';
import SiteFooter from './components/SiteFooter.vue';
import SiteHeader from './components/SiteHeader.vue';

export default {
    components: { SiteHeader, SiteFooter, ContactMe, Education }
}
</script>

<style>

</style>