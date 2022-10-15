<template>
  <div>
    <SiteHeader/>
    <MyProjects/>
    <MySkills/>
    <Education />
    <ContactMe />
    <SiteFooter/>
    <!-- <router-view /> -->
  </div>
</template>

<script>
import ContactMe from './components/ContactMe.vue';
import Education from './components/Education.vue';
import MyProjects from './components/MyProjects.vue';
import MySkills from './components/MySkills.vue';
import SiteFooter from './components/SiteFooter.vue';
import SiteHeader from './components/SiteHeader.vue';

export default {
    components: { SiteHeader, SiteFooter, ContactMe, Education, MySkills, MyProjects }
}
</script>

<style>

</style>