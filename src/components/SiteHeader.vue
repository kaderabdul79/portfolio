<template>
<!-- HEADER -->
<header id="header">
    <div id="particles-js">
        <nav id="nav" data-aos="fade-in">
            <div class="container nav-container">
                <router-link to="/" id="logo" class="text-xl md:text-2xl font-bold text-white">
                    Abdul Kader
                </router-link>
                <ul class="hide-for-mobile nav-links flex">
                    <li><a href="#projects" class="link"><i class="fas fa-code"></i> Projects</a> </li>
                    <li>
                        <a href="#skills" class="link"><i class="fas fa-tools"></i> Skills</a>
                    </li>
                    <li>
                        <a href="#education" class="link"><i class="fas fa-user-graduate"></i> Education</a>
                    </li>
                    <li>
                        <a href="" class="link" target="_blank"><i class="fas fa-file"></i> Resume</a>
                    </li>
                    <li>
                        <a href="#contact" class="link"><i class="fas fa-envelope"></i> Contact</a>
                    </li>
                </ul>
            </div>

            <div class="mobile-menu hide-for-desktop">
                <div class="container">
                    <div class="mobile-menu-links">
                        <ul class="flex">
                            <li>
                                <a href="#projects" class="link blue-hover">Projects</a>
                            </li>
                            <li>
                                <a href="#skills" class="link blue-hover">Skills</a>
                            </li>
                            <li>
                                <a href="#education" class="link blue-hover">Education</a>
                            </li>
                            <li>
                                <a href="" class="link" target="_blank"><i class="fas fa-file"></i> Resume</a>
                            </li>
                            <li>
                                <a href="#contact" class="link blue-hover">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>

        <!-- HERO -->
        <div class="hero">
            <div data-aos="fade-up">
                <h1 class="h1">Hi, I'm <span class="main-font text-blue">Abdul Kader</span></h1>
                <p class="student" id="student">
                    I am an industrious , self-motivated Software Engineer with excellent knowledge. I am Passionate about learning and staying up to date with the latest technologies & a clear communicator.
                </p>
                <div class="hero-btns">
                    <a href="#projects" class="btn-blue"><i class="fas fa-code"></i> Projects</a>
                    <a href="https://github.com/kaderabdul79/" class="btn-blue-outline mx-1" id="projects-btn" target="_blank"><i class="fab fa-github"></i> Github</a>
                </div>
            </div>
        </div>

        <!-- SOCIAL LINKS -->
        <div class="socials" data-aos="fade-in">
            <ul>
                <li class="bg-blue"><a href="https://www.linkedin.com/in/kader-abdul/" target="_blank"><span class="socials-text">LinkedIn</span> <i class="fab fa-linkedin fa-2x"></i></a></li>
                <li class="bg-dark-grey"> <a href="https://github.com/kaderabdul79/" target="_blank"><span class="socials-text">GitHub</span><i class="fab fa-github fa-2x"></i></a></li>
                <li class="bg-white"><a class="text-dark-grey" href="mailto:kaderabdul7980@gmail.com"><span class="socials-text">Email</span><i class="fas fa-envelope fa-2x"></i></a></li>
            </ul>
        </div>
    </div>

    <div class="seperator-skew">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon class="fill-white" points="2560 0 2560 100 0 100"></polygon>
        </svg>
    </div>

</header>
</template>

<script>
export default {
    setup() {

        return {}
    }
}
</script>

<style scoped>
header {
    background: #181a1b;
    background-size: cover;
    min-height: 80vh;
    position: relative;
}

header #particles-js {
    height: 80vh;
    position: relative;
}

header #particles-js canvas {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
}

header nav {
    width: 100%;
}

header nav .nav-container {
    position: relative;
    display: flex;
    justify-content: space-between;
}

header nav .nav-container #logo {
    margin: auto 0;
    z-index: 10;
}

header nav .nav-container #logo img {
    width: 250px;
}

header nav .nav-container .nav-links {
    z-index: 1000;
}

header nav .nav-container .nav-links li {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 2rem;
}

header nav .nav-container .nav-links a {
    text-decoration: none;
    letter-spacing: 2px;
    color: white;
}

header nav .nav-container .nav-links .link::after {
    content: "";
    position: relative;
    display: block;
    width: 0%;
    height: 2px;
    top: 3px;
    margin: auto;
    background: #3b82f6;
    transition: width 0.3s ease;
}

header nav .nav-container .nav-links .link:hover::after {
    width: 100%;
}

header nav .mobile-menu {
    position: relative;
    z-index: 1000;
}

header nav .mobile-menu .container {
    padding-top: 0;
}

header nav .mobile-menu .container .mobile-menu-links ul {
    justify-content: center;
    align-items: center;
    list-style-type: none;
}

header nav .mobile-menu .container .mobile-menu-links ul li {
    margin: 0rem 1rem;
}

header nav .mobile-menu .container .mobile-menu-links ul .link::after {
    content: "";
    position: relative;
    display: block;
    width: 0;
    height: 2px;
    top: 3px;
    margin: auto;
    background: #3b82f6;
    transition: width 0.3s ease;
}

header nav .mobile-menu .container .mobile-menu-links ul .link:hover::after {
    width: 100%;
}

header .hero {
    z-index: 5;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

header .hero h1,
header .hero p {
    color: white;
}

header .hero h1 {
    letter-spacing: 2px;
    white-space: nowrap;
    text-align: center;
    font-size: clamp(2rem, 5vw, 4rem);
    font-family: "Alfa Slab One", "Poppins";
    font-weight: 400;
    font-family: "Alfa Slab One", "Poppins";
    font-weight: 400;
}

header .hero p {
    color: #dcdcdc;
    line-height: 1.6;
    font-size: clamp(1.25rem, 2vw, 1.5rem);
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 0.5rem;
}

header .hero p .blue-link-underline {
    color: #3783ff;
}

header .hero .hero-btns {
    white-space: nowrap;
    text-align: center;
    margin-top: 1rem;
}

header .socials {
    position: absolute;
    bottom: 40%;
    left: -125px;
}

header .socials ul {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

header .socials ul li {
    transition: 0.3s;
    width: 100%;
    display: flex;
    justify-content: end;
    font-size: 1.5rem;
    width: 100%;
    height: 100%;
}

header .socials ul li a {
    text-align: right;
    height: 100%;
    width: 100%;
    padding: 15px 20px;
}

header .socials ul li a i {
    font-size: 1.75rem;
    margin-left: 1.5rem;
}

header .socials ul li:hover {
    transform: translateX(115px);
}

header .scroll-btn-container {
    position: absolute;
    width: 100%;
    background: red;
    bottom: 150px;
}

header .scroll-btn-container div {
    display: flex;
    justify-content: center;
    width: 100%;
}

header .scroll-btn-container div a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

header .scroll-btn-container div a span {
    display: block;
    height: 20px;
    width: 20px;
    border-bottom: 2px solid #3b82f6;
    border-right: 2px solid #3b82f6;
    transform: rotate(45deg);
    margin: -20px 0;
    animation: animate 2s infinite;
}

header .scroll-btn-container div a span:nth-child(2) {
    animation-delay: -0.2s;
}

header .scroll-btn-container div a span:nth-child(3) {
    animation-delay: -0.4s;
}

@keyframes animate {
    0% {
        opacity: 0;
        transform: rotate(45deg) translate(-20px, -20px);
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: rotate(45deg) translate(20px, 20px);
    }
}

header .seperator-skew {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 150px;
    width: 100%;
    overflow: hidden;
}

header .seperator-skew svg {
    position: absolute;
    bottom: 0;
}

header .seperator-skew svg .fill-white {
    fill: white;
}

@media screen and (max-width: 999px) {
    header nav .container {
        padding-bottom: 0.75rem;
    }

    header nav .nav-container {
        justify-content: center;
    }

    header .hero {
        top: 55%;
    }

    header .socials {
        display: none;
    }
}

@media screen and (max-width: 768px) {
    .hero {
        width: 90%;
    }

    header nav .nav-container #logo img {
        width: 200px;
    }
}

@media screen and (max-width: 500px) {
    header nav .nav-container #logo {
        font-size: 1.5rem;
    }

    header nav .mobile-menu .container .mobile-menu-links ul li {
        margin: 0 0.5rem;
    }

    header .hero span {
        max-width: 100%;
    }

    header .hero p {
        width: 100%;
    }
}

@media screen and (min-height: 900px) {
    header {
        min-height: 70vh;
    }

    header #particles-js {
        height: 70vh;
    }
}
</style>
