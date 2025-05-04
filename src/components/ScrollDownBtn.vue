<template>
  <section id="section" class="demo">
    <a href="#solution"><span></span></a>
  </section>
</template>


<style scoped>
section {
  position: relative;
  width: 100%;
  height: 100%;
}

section::after {
  position: absolute;
  bottom: 0;
  left: 0;
  content: "";
  width: 100%;
  height: 80%;
  background: -webkit-linear-gradient(top,
      rgba(0, 0, 0, 0) 0,
      rgba(0, 0, 0, 0.8) 80%,
      rgba(0, 0, 0, 0.8) 100%);
  background: linear-gradient(to bottom,
      rgba(0, 0, 0, 0) 0,
      rgba(0, 0, 0, 0.8) 80%,
      rgba(0, 0, 0, 0.8) 100%);
}

section h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  white-space: nowrap;
}

.demo a {
  position: absolute;
  bottom: 20px;
  left: 50%;
  z-index: 2;
  display: inline-block;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: #fff;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: opacity 0.3s;
}

.demo a:hover {
  opacity: 0.5;
}

#section a {
  padding-top: 70px;
}

#section a span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  -webkit-transform: rotateZ(-45deg);
  transform: rotateZ(-45deg);
  -webkit-animation: sdb 1.5s infinite;
  animation: sdb 1.5s infinite;
  box-sizing: border-box;
}

@-webkit-keyframes sdb {
  0% {
    -webkit-transform: rotateY(0) rotateZ(-45deg) translate(0, 0);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    -webkit-transform: rotateY(720deg) rotateZ(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}

@keyframes sdb {
  0% {
    transform: rotateY(0) rotateZ(-45deg) translate(0, 0);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: rotateY(720deg) rotateZ(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
</style>
