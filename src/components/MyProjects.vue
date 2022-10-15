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
import { reactive } from 'vue';

    export default {
        setup(){
            const projectsList = reactive([
                {name:"Apartment",id:"apartment",madeWith:["javascript","vue","laravel"],description:"Anyone can take schedule a visit to look the apartment.It'll help people to view aparment after they liked they can visit via take schedule.",reason:"Many Apartment's seller display apartment online but main thing they don't offer to visit the apartment whenever buyer want.To keep in mind to solve this through apartment projects buyer can visit just  they need take a schedule before come to visit.",techStack:"I used React, Node, Express and MongoDB. Authentication was done via Firebase.All the data will stored in MongoDB Atlas. I used react context Api to centralize users all the page.",ImagesURL:"https://kaderabdul.netlify.app/apartment-project.PNG",status:"Almost Complete / Not Responsive / Deployed",url:"https://apartment-c3fc1.web.app/",github:"https://github.com/kaderabdul79/apartment"},
                {name:"JobsLab",id:"jobslab",madeWith:["react","php"],description:"Anyone can apply for the job but before need to register.Easily You will manage a job. and Company also can post job and they will manage corresponding job they posted.",reason:"People are always think how they will get a job.Its not anymore hard to find job.Just follow and if any job related to you, apply.",techStack:"To build this application, I used React, Node, Express and MongoDB. Specially I emphasize on Design, so I use Material UI / MUI v5.",ImagesURL:"jobslab_project.PNG","status":"Almost Complete / Responsive / Deployed",url:"https://jobslist-7d4bc.web.app/",github:"https://github.com/kaderabdul79/JobsLab"},
                {name:"Daily Shop",id:"dailyshop",madeWith:["aws","laravel"],description:"To make easy in our daily life.Customer can buy product,implement add to cart and admin can easily maintain the products,categories,brands and many more.",reason: "To make easy in our daily life.Using this, You can eastimite easily what your expenditure in a month.",techStack:"To build this application, I used Laravel. Authentication was done via Laravel UI package and Used Mysql database.",ImagesURL:"dailyShop_dashboard.png ",status:"Almost Complete / Responsive",url:"",github:"https://github.com/kaderabdul79/dailyShop"},
                {name:"Charitox",id:"charitox",madeWith:["aws","laravel"],description:"To make easy to donate fundriser.People are use facebook but they need to convert currency bd to usd.Through this website directly you can donate.",reason: "In Bangladesh usually we didn't see fundraising website where people can get help through fundriser.But some of people do this through facebook.To donate bd currency needs to convert dollar.For this reason, I have been done this to make easy to donate.",techStack:"To build this application, I used React, Node, Express and MongoDB. Authentication was done via Firebase and the user data was stored in a user document in MongoDB Atlas.",ImagesURL:"charitox-project.JPG",status:"Almost Complete / Not Responsive / Deployed",url:"https://charitox-fa919.web.app/",github:"https://github.com/kaderabdul79/apartment"}        
            ])
            return {projectsList}
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