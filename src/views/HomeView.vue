<template>
    <SiteHeader/>
    <MyProjects class="bg-white"/>
    <MySkills/>
    <Education />
    <ContactMe />
    <SiteFooter/>
</template>

<script>
import ContactMe from '../components/ContactMe.vue';
import Education from '../components/Education.vue';
import MyProjects from '../components/MyProjects.vue';
import MySkills from '../components/MySkills.vue';
import SiteFooter from '../components/SiteFooter.vue';
import SiteHeader from '../components/SiteHeader.vue';

export default {
    components: { SiteHeader, MyProjects, MySkills, Education, ContactMe, SiteFooter }
}
</script>

<style scoped>

</style>
