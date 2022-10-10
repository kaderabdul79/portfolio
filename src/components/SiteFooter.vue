<template>
    <footer class="footer">
      <div class="container">
        <div class="footer-flex">
          <router-link to="/" id="logo" class="text-xl md:text-2xl font-bold text-white">Abdul Kader</router-link>

          <div class="footer-icon-links">
            <a href="https://github.com/kaderabdul79/" target="_blank"><i class="fab fa-github fa-2x"></i></a>
            <a href="https://www.linkedin.com/in/kader-abdul/" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
            <a class="text-dark-grey" href="mailto:kaderabdul7980@gmail.com"><i class="fas fa-envelope fa-2x"></i></a>
          </div>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
.footer {
  background: #181a1b;
  padding: 1.5rem 0;
  color: white;
}

.footer .footer-flex {
  display: flex;
  justify-content: space-between;
}

.footer .footer-flex #logo-footer {
  width: 200px;
}

.footer .footer-flex .top-scroll-button {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  text-align: center;
  border: 3px solid white;
  border-radius: 50%;
  transition: 0.3s;
}

.footer .footer-flex .top-scroll-button:hover {
  color: #3b82f6;
  border: 3px solid #3b82f6;
}

.footer .footer-flex .footer-icon-links a {
  margin-left: 2rem;
  transition: 0.3s;
}

.footer .footer-flex .footer-icon-links a:hover {
  color: #3b82f6;
}

.footer .footer-flex .footer-icon-links a i {
  transition: 0.3s;
}

.footer .footer-flex .footer-icon-links a i:hover {
  transform: translateY(-20%);
}

@media screen and (max-width: 500px) {
  .footer .footer-flex {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .footer .footer-flex .top-scroll-button {
    margin-top: 2rem;
  }
  .footer .footer-flex .footer-icon-links {
    margin-top: 2rem;
  }
  .footer .footer-flex .footer-icon-links a {
    margin: 0 1rem;
  }
}
</style>