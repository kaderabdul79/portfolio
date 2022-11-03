<template>
<!-- PROJECTS -->
<section id="projects" class="projects">
    <div class="container">
        <h2 class="main-font">My<span class="text-blue main-font"> Projects</span></h2>

        <div class="project-row" data-aos="fade-up" v-for="project of projectsList" :key="project.id">
            <div class="project-left">
                <img class="w-[500] h-[500] aspect-auto" v-bind:src="project.ImagesURL" alt="project showcase image">
            </div>
            <div class="project-right">
                <h3>{{project.name}}</h3>
                <ul class="tech-stack-list flex items-center">
                    <p class="text-grey"><b>Made with: </b></p>
                    <li class="tracking-tight	text-xs font-medium border-b-2 pb-2 border-b-[#3b82f6]" v-for="icon in project.madeWith" :key="icon">{{icon}}</li>
                </ul>
                <p>{{project.description}}</p>
                <div class="project-links">
                    <a :href="project.url" class="btn-blue btn-small" target="_blank"> <i class="fas fa-external-link-alt"></i> Live</a>
                    <a :href="project.github" class="btn-blue-outline btn-small mx-1" target="_blank"> <i class="fab fa-github"></i> Code</a>
                </div>
            </div>
        </div>

    </div>
</section>
</template>

<script>
import laravel_vue_blog_app_dashboard from '../assets/images/laravel_vue_blog_app_dashboard.png'
import laravel_vue_composition_api_crud from '../assets/images/laravel_vue_composition_api_crud.png'
import laravel_react_student_crud from '../assets/images/laravel_react_student_crud.png'
import apartment_project_using_react_firebase_bootstrap from '../assets/images/apartment_project_using_react_firebase_bootstrap.jpg'
import charitox_donation_app_using_react_firebase_css from '../assets/images/charitox_donation_app_using_react_firebase_css.jpg'
import jobslab_fronted_react_firebase from '../assets/images/jobslab_fronted_react_firebase.png'
import laravel_bootstarp_ecommerce_app_dashboard from '../assets/images/laravel_bootstarp_ecommerce_app_dashboard.png'

import {
    reactive
} from 'vue';

export default {
    setup() {
        const projectsList = reactive([{
                name: "Laravel with Vue Blog App.",
                id: "laravel_vue_blog_app_dashboard",
                madeWith: ["laravel", "vue"],
                description: "Blog Application where Author can add category , publish post and manage them. Add authentication and user can read post also has implemented searching by category or post and showing related post according to the category.",
                ImagesURL: laravel_vue_blog_app_dashboard,
                url: "https://blog.kaderabdul.com/build/",
                github: "https://github.com/kaderabdul79/Blog_Application"
            },
            {
                name: "laravel_vue_composition_api_crud",
                id: "laravel_vue_composition_api_crud",
                madeWith: ["laravel", "vue","tailwindcss"],
                description: "After Learning Session, developing small Vue3 Composition API with laravel api a crud based application.",
                ImagesURL: laravel_vue_composition_api_crud,
                url: "",
                github: "https://github.com/kaderabdul79/rest-api-crud-vue-laravel"
            },
            {
                name: "laravel_bootstarp_ecommerce_app_dashboard",
                id: "laravel_bootstarp_ecommerce_app_dashboard",
                madeWith: ["laravel", "bootstrap"],
                description: "For Authentication, Used Laravel UI package. Add Product and Manage Them from Dashboard. For a Product can have multiple sub images So, These Images will store seperate Table. Add Category and Manage Them from Dashboard. Add Brand and Manage Them from Dashboard. Add Slider and Manage Them from Dashboard and It will show fronted dynamically User can buy product.For add to card used 'bumbummen99/shoppingcart' this package. User can add product to card, update also they can remove from cart Multiple Image Upload, all store in local PC and retrieve also from there, just img name will goes to db.",
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
                name: "JobsLab",
                id: "jobslab",
                madeWith: ["react", "firebase","MUI5"],
                description: "Anyone can apply for the job but before need to register.Easily You will manage a job. and Company also can post job and they will manage corresponding job they posted.",
                ImagesURL: jobslab_fronted_react_firebase,
                url: "https://jobslist-7d4bc.web.app/",
                github: "https://github.com/kaderabdul79/JobsLab"
            },
            {
                name: "Daily Shop",
                id: "dailyshop",
                madeWith: ["bootstrap", "laravel"],
                description: "To make easy in our daily life.Customer can buy product,implement add to cart and admin can easily maintain the products,categories,brands and many more.",
                ImagesURL: "dailyShop_dashboard.png ",
                url: "",
                github: "https://github.com/kaderabdul79/dailyShop"
            },
            {
                name: "Charitox",
                id: "charitox",
                madeWith: ["react", "firebase","css"],
                description: "To make easy to donate fundriser.People are use facebook but they need to convert currency bd to usd.Through this website directly you can donate.",
                ImagesURL: charitox_donation_app_using_react_firebase_css,
                url: "https://charitox-fa919.web.app/",
                github: "https://github.com/kaderabdul79/apartment"
            }
        ])

        return {
            projectsList
        }
    }
}
</script>

<style scoped>
.projects {
    background: white;
    padding: 3rem 0;
}

.projects h2 {
    text-align: center;
    margin-bottom: 3rem;
}

.projects .project-row {
    display: flex;
    margin-bottom: 3rem;
}

.projects .project-row .project-left {
    width: 50%;
    margin-right: 2rem;
}

.projects .project-row .project-left img {
    width: 100%;
    border: 1px solid lightgray;
}

.projects .project-row .project-right {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.projects .project-row .project-right h3 {
    font-size: 1.25rem;
}

.projects .project-row .project-right .tech-stack-list {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    margin-top: 1rem;
}

.projects .project-row .project-right .tech-stack-list p {
    margin-right: 1rem;
}

.projects .project-row .project-right .tech-stack-list li {
    margin-right: 20px;
    font-size: 1.5rem;
}

.projects .project-row .project-right .project-links {
    margin-top: 1rem;
}

.projects .project-row #webscraper {
    background-image: url("../img/top10songs.JPG");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    transition: background-image 0.2s ease-in-out;
}

.projects .project-row #webscraper:hover {
    background-image: url("../img/top10songs.gif");
}

@media screen and (max-width: 860px) {
    .projects .project-row {
        display: flex;
        margin-bottom: 3rem;
        flex-direction: column;
    }

    .projects .project-row .project-left {
        width: 100%;
    }

    .projects .project-row .project-right {
        width: 100%;
    }
}

@media screen and (max-width: 500px) {
    .project-left {
        min-height: 200px;
    }
}

@media screen and (min-width: 501px) and (max-width: 700px) {
    .project-left {
        min-height: 300px;
    }
}

@media screen and (min-width: 701px) and (max-width: 859px) {
    .project-left {
        min-height: 350px;
    }
}
</style>
