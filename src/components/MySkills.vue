<template>
     <!-- SKILLS -->
     <section id="skills" class="skills">
      <div class="seperator-skew-top">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-white" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
      <div class="container" data-aos="fade-in"> 
        <h2 class="text-white main-font">My <span class="text-blue main-font">Skills</span></h2>
        <ul class="skills-icons">
          
            <li><span class="iconify" data-icon="logos:laravel" data-inline="false" data-width="90px" data-height="90px"></span><span class="text-center">Laravel</span></li>
          <li><span class="iconify" data-icon="logos:vue" data-inline="false" data-width="90px" data-height="90px"></span><span class="text-center">Vue</span></li> 
          <li><span class="iconify" data-icon="logos:react" data-inline="false" data-width="90px" data-height="90px"></span><span>React</span></li>             
          <li><span class="iconify" data-icon="logos:javascript" data-inline="false" data-width="90px" data-height="90px"></span><span>JavaScript</span></li>   
          <li><span class="iconify" data-icon="logos:php" data-inline="false" data-width="90px" data-height="90px"></span><span>Php</span></li>
          <li><span class="iconify" data-icon="vscode-icons:file-type-html" data-inline="false" data-width="90px" data-height="90px"></span><span>HTML</span></li>
          <li><span class="iconify" data-icon="vscode-icons:file-type-css" data-inline="false" data-width="90px" data-height="90px"></span><span>CSS</span></li>
          <li><span class="iconify" data-icon="logos:tailwindcss" data-inline="false" data-width="90px" data-height="90px"></span><span>Tailwind</span></li>
          <li><span class="iconify" data-icon="logos:bootstrap" data-inline="false" data-width="90px" data-height="90px"></span><span>Bootstrap</span></li>
          <li><span class="iconify" data-icon="logos:wordpress" data-inline="false" data-width="90px" data-height="90px"></span><span>Wordpress</span></li>          
        </ul>
      </div>

      <div class="seperator-skew-bottom">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-white" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.skills {
  padding: 3rem 0;
  position: relative;
  overflow: hidden;
}

.skills h2 {
  text-align: center;
  margin-bottom: 3rem;
}

.skills .container {
  padding: 6rem 0;
}

.skills .skills-icons {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
}

.skills .skills-icons svg {
  margin: 0.5rem;
  width: 90px;
}

@media (max-width: 420px) {
  .skills .skills-icons svg {
    width: 70px;
  }
}

.skills .skills-icons li {
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1rem;
  margin: 1rem;
}

@media (max-width: 420px) {
  .skills .skills-icons li {
    margin: 1rem 0.75rem;
  }
}

.skills .skills-icons li .aws-logo {
  background: white;
  padding: 10px;
  border-radius: 3px;
}

.skills .skills-icons li:hover {
  transform: scale(1.3);
}

.skills .seperator-skew-top {
  position: absolute;
  top: -1px;
  left: 0;
  right: 0;
  height: 150px;
  width: 120%;
  overflow: hidden;
}

.skills .seperator-skew-top svg {
  position: absolute;
  top: 0;
  transform: scaleY(-1) scaleX(-1);
}

.skills .seperator-skew-top svg .fill-white {
  fill: white;
}

.skills .seperator-skew-bottom {
  position: absolute;
  bottom: -0.5px;
  left: 0;
  right: 0;
  height: 150px;
  width: 120%;
  overflow: hidden;
}

.skills .seperator-skew-bottom svg {
  position: absolute;
  bottom: 0;
}

.skills .seperator-skew-bottom svg .fill-white {
  fill: white;
}

</style>