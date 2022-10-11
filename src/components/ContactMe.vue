<template>
    <!-- CONTACT -->
    <section id="contact" class="contact">
      <div class="container">
        <h2 class="section-title main-font" data-aos="fade-in">Contact <span class="text-blue main-font">Me</span></h2>
        <form id="contact-form" data-aos="zoom-in" data-aos-delay="300" action="https://formspree.io/f/meqdpnzy" method="POST">
          <h2 class="main-font">Send <span class="text-blue main-font">Email</span></h2>

          <div class="form-group">
            <input type="text" id="name" name="name" placeholder="Name" required>
          </div>

          <div class="form-group">
            <input type="email" id="email" name="email" placeholder="Your email" required>
          </div>

          <div class="form-group">
            <textarea name="message" id="message" rows="7" placeholder="Message" required></textarea>
          </div>

          <button type="submit" class="btn-email">
            <span class="default">Send</span>
            <span class="success">
                <svg viewBox="0 0 16 16">
                    <polyline points="3.75 9 7 12 13 5"></polyline>
                </svg>Sent
            </span>
            <svg class="trails" viewBox="0 0 33 64">
                <path d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60"></path>
                <path d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60"></path>
            </svg>
            <div class="plane">
                <div class="left"></div>
                <div class="right"></div>
            </div>
          </button>
          <div id="status"></div>
        </form>
      </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.contact {
  background: white;
  padding: 3rem 0;
}

.contact .section-title {
  margin-bottom: 2rem;
  text-align: center;
}

.contact .card-container {
  display: flex;
  justify-content: space-around;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.contact .card-container .card {
  background: #fff;
  width: 260px;
  margin: 20px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 0.15rem 0.6rem rgba(43, 52, 56, 0.15);
  border-radius: 3px;
}

.contact .card-container .card i {
  font-size: 3.5rem;
  color: #3b82f6;
  margin-bottom: 1rem;
  transition: 0.4s;
}

.contact .card-container .card i:hover {
  transform: translateY(-20%);
}

.contact .card-container .card > * {
  margin: 0.5rem;
}

.contact form {
  max-width: 600px;
  margin: 0 auto;
  border-radius: 3px;
  box-shadow: 0 0.15rem 0.6rem rgba(43, 52, 56, 0.15);
  padding: 2rem;
}

.contact form h2 {
  text-align: center;
  margin: 1.5rem 0;
}

.contact form .form-group input {
  margin: 0.75rem 0;
  width: 100%;
  border-radius: 3px;
  border: 1px solid black;
  padding: 0.75rem;
  font-size: 1rem;
}

.contact form .form-group input:focus {
  outline: none;
}

.contact form .form-group textarea {
  width: 100%;
  border-radius: 3px;
  margin: 0.75rem 0;
  border: 1px solid black;
  padding: 0.75rem;
  font-size: 1rem;
  resize: vertical;
}

.contact form .form-group textarea:focus {
  outline: none;
}

.contact form #status {
  width: 100%;
  text-align: center;
  margin: 0 auto;
  border-radius: 3px;
  color: #00b700;
}

.contact form #status.success {
  color: #00b700;
  animation: status 4s ease forwards;
}

.contact form #status.error {
  color: red;
  animation: status 4s ease forwards;
}

@keyframes status {
  0% {
    opacity: 1;
    pointer-events: all;
  }
  90% {
    opacity: 1;
    pointer-events: all;
  }
  100% {
    opacity: 0;
    pointer-events: none;
  }
}

</style>