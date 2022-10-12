<template>
     <!-- Education -->
     <section id="education" class="education">
      <div class="container">
        <h2 class="main-font" data-aos="fade-in">My <span class="text-blue main-font">Education</span></h2>

        <div class="education-card" data-aos="zoom-in">
            <div class="education-card-column">
              <div class="card-column-large">
                <h4 class="education-year">2018 - 2021</h4>
                <h4>American International University - Bangladesh (AIUB)</h4>
                <p>Computer Science & Engineering (CSE)</p>
                <p>CGPA 3.57 out of 4.00</p>
              </div>
            </div>
        </div>
      </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.education {
  background: white;
  padding-bottom: 3rem;
}

.education .container {
  max-width: 900px;
}

.education .container h2 {
  text-align: center;
  color: black;
  margin-bottom: 3rem;
}

.education .container .education-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0.15rem 0.6rem rgba(43, 52, 56, 0.15);
  padding: 10px;
  border-radius: 3px;
}

.education .container .education-card > *:last-child {
  margin-top: 10px;
}

@media (max-width: 500px) {
  .education .container .education-card {
    padding: 20px;
  }
}

.education .container .education-card .education-card-column {
  display: flex;
}

.education .container .education-card .education-card-column .card-column-image {
  flex: 0 0 20%;
}

.education .container .education-card .education-card-column .card-column-image img {
  width: 100%;
}

.education .container .education-card .education-card-column .card-column-large {
  flex: 0 0 80%;
  padding-left: 1.5rem;
}

.education .container .education-card .education-card-column .card-column-large > * {
  margin: 0.25rem 0;
}

.education .container .education-card .education-card-column .card-column-large h4 {
  font-weight: normal;
}

.education .container .education-card .education-card-column .card-column-large ul {
  padding-left: 1.5rem;
}

.education .container .education-card .education-card-column .card-column-large hr {
  border: 0;
  border-top: 1px solid #eee;
  margin-top: 40px;
}

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