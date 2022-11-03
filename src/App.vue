<template>
  <div v-cloak>
    <HomeView />
    <!-- vue plugin to move/scroll from bottom to top -->
    <transition name="fade">
    <div id="pageTop" class="fixed right-4 bottom-2 cursor-pointer bg-blue-500 rounded" v-show="scY > 300" @click="toTop">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
           stroke="#4a5568"
           stroke-width="1" stroke-linecap="square" stroke-linejoin="arcs">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </div>
    </transition>
    <!-- <router-view /> -->
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue';
export default {
    components: { HomeView },
    data() {
      return {
        scTimer: 0,
        scY: 0,
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll: function () {
        if (this.scTimer) return;
        this.scTimer = setTimeout(() => {
          this.scY = window.scrollY;
          clearTimeout(this.scTimer);
          this.scTimer = 0;
        }, 100);
      },
      toTop: function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      },
    }
}
</script>

<style scoped>
#backToTopBtn {
  position: fixed;
  right: 20px;
  bottom: 20px;
  padding: 0.5rem 0.9rem;
  opacity: 0;
  visibility: hidden;
  z-index: 1000;
}

#backToTopBtn.show {
  opacity: 1;
  visibility: visible;
}
</style>