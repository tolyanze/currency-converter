<template>
  <nav class="navbar navbar-expand-lg navbar-light">
      <div class="ps-3 d-flex align-items-center justify-content-between w-100">
        <a href="https://webasite.ru" class="brand">
          <img class="navbar-logo" src="@/assets/img/Logo.png" alt="Logo">
        </a>
        <div class="navbar-line"></div>      
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Переключатель навигации">
          <span class="navbar-burger">
            <BootstrapIcon
              icon="list"
              size="2x"
              color="#FECE1A"
              flip-v />
          </span>
          <span class="navbar-close">
            <i class="bi bi-x"></i>
            <BootstrapIcon
              icon="x"
              size="2x"
              color="#FECE1A"
              flip-v />
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbar">
          <div class="col-12 d-flex justify-content-end px-0">
            <ul class="navbar-nav ">
              <li class="mx-1"><router-link to="/">Курс</router-link></li>
              <li class="mx-1"><router-link to="/converter">Конвертер</router-link></li>
            </ul>
          </div>
        </div>
        <div class="d-sm-block d-none navbar-line--end"></div> 
      </div>
    </nav>
  <!-- <router-view/> -->
</template>

<script>
export default {
  name:"Header"
}
</script>
<style lang="scss">
.navbar{
  background: #252525;
  display: block;
  &-logo{
    max-width: 60px;
  }
  &-line{
    display:inline-block;
    width: 100%;
    height: 36px;
    background: #FECE1A;
    margin: 0 50px;
    position: relative;
    @media (max-width: 768px) {
      margin: 0 20px;
    }
    &::after{
      content:'';
      position: absolute;
      width: 0; 
      height: 0;
      border-left: 20px solid #FECE1A ;
      border-bottom: 18px solid transparent;
      border-top: 18px solid transparent;
      margin: 0 auto;
      right: 0;
      top: 0%;
      margin-right: -20px;
      margin-top: 0px;
    }
  }
  &-line--end{
    width: 40px;
    height: 36px;
    background: #FECE1A;
    margin: 0 0 0 30px;
  }
  li{
    color: #ffffff;
    text-transform: uppercase;
    margin: 0 5px;
    a{
      // font-weight: bold;
      color: #FECE1A;
      &.router-link-exact-active {
        color: #ffffff;
      }
      &:hover{
        color:#ffffff
      }
    }
  }
}
  .navbar-toggler {
    border: none!important;
    margin-top: 3px;
    &:active{
      border: none!important;
      box-shadow: none!important;
    }
    &:focus{
      border: none!important;
      box-shadow: none!important;
    }
  }
  [aria-expanded="false"]{
    .navbar-close{
      display: none;
    }
  }
  [aria-expanded="true"]{
    .navbar-close{
      display: block;
    }
    .navbar-burger{
      display: none;
    }
  }




  .navbar-nav{
    @media (max-width: 760px) {
      display: flex!important;
      flex-direction: row!important;
      flex-wrap: wrap;
    }
  }
</style>