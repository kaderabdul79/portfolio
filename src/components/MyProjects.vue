<template>
  <section id="projects" class="projects">
    <div class="container">
      <h2 class="text-center text-3xl font-bold mb-8">My<span class="text-blue"> Projects</span></h2>

      <div class="flex justify-center space-x-4 mb-4">
        <button @click="filterProjects('all')" :class="{ 'bg-blue-500': activeFilter === 'all' }" class="btn">All</button>
        <button @click="filterProjects('laravel')" :class="{ 'bg-blue-500': activeFilter === 'laravel' }" class="btn">Laravel</button>
        <button @click="filterProjects('vue')" :class="{ 'bg-blue-500': activeFilter === 'vue' }" class="btn">Vue</button>
        <button @click="filterProjects('react')" :class="{ 'bg-blue-500': activeFilter === 'react' }" class="btn">React</button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div v-for="project in filteredProjects" :key="project.id" class="bg-white p-4 shadow-md rounded-md">
          <div class="aspect-w-16 aspect-h-9 mb-4">
            <img :src="project.ImagesURL" alt="project showcase image" class="object-cover w-full h-full rounded-md">
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">{{ project.name }}</h3>
            <ul class="flex items-center space-x-2 text-gray-600">
              <li v-for="icon in project.madeWith" :key="icon" class="border-b-3 border-blue-500">{{ icon }}</li>
            </ul>
            <p class="text-gray-700 mt-2">{{ project.description }}</p>
            <div class="mt-4">
              <a :href="project.url" target="_blank" class="btn-blue btn-small" :disabled="project.url === ''">
                <i class="fas fa-external-link-alt"></i>
                <span v-if="project.url === ''">Not Live yet</span>
                <span v-else>Live</span>
              </a>
              <a :href="project.github" target="_blank" class="btn-blue-outline btn-small mx-1"><i class="fab fa-github"></i> Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue';
import job_memo_landing_page from '../assets/images/job_memo_landing_page.png'
import Inventory_management_dashboard from '../assets/images/Inventory_management_dashboard.png'
import laravel_vue_blog_app_dashboard from '../assets/images/laravel_vue_blog_app_dashboard.png'
import laravel_vue_composition_api_crud from '../assets/images/laravel_vue_composition_api_crud.png'
import laravel_react_student_crud from '../assets/images/laravel_react_student_crud.png'
import apartment_project_using_react_firebase_bootstrap from '../assets/images/apartment_project_using_react_firebase_bootstrap.jpg'
import charitox_donation_app_using_react_firebase_css from '../assets/images/charitox_donation_app_using_react_firebase_css.jpg'
import jobslab_fronted_react_firebase from '../assets/images/jobslab_fronted_react_firebase.png'
import laravel_bootstarp_ecommerce_app_dashboard from '../assets/images/laravel_bootstarp_ecommerce_app_dashboard.png'
import laravel_react_StudentsCRUD from '../assets/images/laravel_react_StudentsCRUD.png'

export default {
  setup() {
    const projectsList = ref([
            {
                name: "Quick-Job-Memo.",
                id: "job_memo_landing_page",
                madeWith: ["laravel", "vue", "vuetify"],
                description: "JobMemo streamlines your job application process, tracking interviews, tech stacks, and experiences in one space. Unlike traditional job portals, it emphasizes personalization to help you never miss an opportunity or forget crucial details.",
                ImagesURL: job_memo_landing_page,
                url: "",
                github: "https://github.com/kaderabdul79/Quick-Job-Memo"
            },
            {
                name: "Inventory-Management.",
                id: "Inventory_management_dashboard.PNG",
                madeWith: ["laravel", "vue", "vuetify"],
                description: "The Inventory Management System is a web application built with Laravel and Vue.js, designed to help businesses keep track of their products, sizes, brands, and stocks. It provides a user-friendly interface for managing inventory efficiently.",
                ImagesURL: Inventory_management_dashboard,
                url: "",
                github: "https://github.com/kaderabdul79/Blog_Application"
            },
            {
                name: "Laravel with Vue Blog App.",
                id: "x",
                madeWith: ["laravel", "vue"],
                description: "Blog Application where Author can add category , publish post and manage them. Add authentication and user can read post also has implemented searching by category or post and showing related post according to the category.",
                ImagesURL: laravel_vue_blog_app_dashboard,
                url: "",
                github: "https://github.com/kaderabdul79/Blog_Application"
            },
            {
                name: "laravel_vue_composition_api_crud",
                id: "laravel_vue_composition_api_crud",
                madeWith: ["laravel", "vue", "tailwindcss"],
                description: "After Learning Session, developing small Vue3 Composition API with laravel api a crud based application.",
                ImagesURL: laravel_vue_composition_api_crud,
                url: "",
                github: "https://github.com/kaderabdul79/rest-api-crud-vue-laravel"
            },
            {
                name: "laravel_react_StudentsCRUD",
                id: "laravel_react_StudentsCRUD",
                madeWith: ["laravel", "react", "bootstrap"],
                description: "Simple Students CRUD Project to learn how to consume Api which created by laravel and use in react.",
                ImagesURL: laravel_react_StudentsCRUD,
                url: "https://github.com/kaderabdul79/StudentsCRUDFrontend",
                github: "https://github.com/kaderabdul79/studentsCRUDBackend"
            },
            {
                name: "laravel_bootstarp_ecommerce_app_dashboard",
                id: "laravel_bootstarp_ecommerce_app_dashboard",
                madeWith: ["laravel", "bootstrap"],
                description: "E-commerce dashboard with Laravel and Bootstrap. Features include product, category, and brand management, image uploads, and a dynamic frontend. Utilizes Laravel UI for authentication and 'bumbummen99/shoppingcart' for the shopping cart.",
                ImagesURL: laravel_bootstarp_ecommerce_app_dashboard,
                url: "",
                github: "https://github.com/kaderabdul79/dailyShop"
            },
            {
                name: "Apartment",
                id: "apartment",
                madeWith: ["react", "firebase", "bootstrap"],
                description: "Anyone can take schedule a visit to look the apartment.It'll help people to view aparment after they liked they can visit via take schedule.",
                ImagesURL: apartment_project_using_react_firebase_bootstrap,
                url: "https://apartment-c3fc1.web.app/",
                github: "https://github.com/kaderabdul79/apartment"
            },
            {
                name: "Charitox",
                id: "charitox",
                madeWith: ["react", "firebase", "css"],
                description: "To make easy to donate fundriser.People are use facebook but they need to convert currency bd to usd.Through this website directly you can donate.",
                ImagesURL: charitox_donation_app_using_react_firebase_css,
                url: "https://charitox-fa919.web.app/",
                github: "https://github.com/kaderabdul79/apartment"
            },
            {
                name: "JobsLab",
                id: "jobslab",
                madeWith: ["react", "firebase", "MUI5"],
                description: "Anyone can apply for the job but before need to register.Easily You will manage a job. and Company also can post job and they will manage corresponding job they posted.",
                ImagesURL: jobslab_fronted_react_firebase,
                url: "https://jobslist-7d4bc.web.app/",
                github: "https://github.com/kaderabdul79/JobsLab"
            },
        ])

const activeFilter = ref('all');

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projectsList.value;
  } else {
    const filterValue = activeFilter.value.toLowerCase();
    return projectsList.value.filter(project => {
      // console.log(project)
      return project.madeWith.some(tech => tech.toLowerCase().includes(filterValue));
    });
  }
});

const filterProjects = (category) => {
  // console.log(category)
  activeFilter.value = category;
};

return {
  projectsList,
  activeFilter,
  filteredProjects,
  filterProjects
};
  }
};
</script>

<style scoped>

</style>
