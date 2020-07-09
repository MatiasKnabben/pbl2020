<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        
        <b-nav-item>
          <router-link to="/Home">
          UniAgn - Agenda Eletrônica
           </router-link>
          </b-nav-item>
         
      </b-navbar-nav>
    </b-navbar>

    <div class="nav-side-menu">
      <b-nav vertical toggleable="lg" type="dark" class="m-1">
         <b-nav-item class="h6 mb-2">
        <router-link  to="/cadastro-paciente">
        <b-icon-clock /> Agendar
        </router-link>
        </b-nav-item>
        
        <b-nav-item class="h6 mb-2">
        <router-link  to="/agenda">
          <b-icon-card-list class="link"/> Agenda
        </router-link>
        </b-nav-item>

        <b-nav-item class="h6 mb-2">
        <router-link  to="/doutores">
          <b-icon-person-plus class="link"/> Doutores
        </router-link>
        </b-nav-item>

        <b-nav-item class="h6 mb-2">
        <router-link  to="/minhaConta">
          <b-icon-person class="link"/> Minha Conta
        </router-link>
        </b-nav-item>
      </b-nav>
    </div>
  </div>
</template>

<script>

export default{
}
</script>

<style scoped>
.nav-side-menu {
  overflow: auto;
  font-family: verdana;
  font-size: 12px;
  font-weight: 200;
  background-color: rgb(23, 162, 184);
  position: fixed;
  padding-left: 0px;
  height: 90vh;
  width: 10%;
  color: #e1ffff;

}

.nav-side-menu .brand {
  background-color: rgb(23, 162, 184);
  line-height: 50px;
  display: block;
  text-align: center;
  font-size: 14px;
}
.nav-side-menu .toggle-btn {
  display: none;
}
.nav-side-menu ul,
.nav-side-menu li {
  list-style: none;
  padding: 0px;
  margin: 0px;
  line-height: 35px;
  cursor: pointer;
}
.nav-side-menu ul :not(collapsed) .arrow:before,
.nav-side-menu li :not(collapsed) .arrow:before {
  font-family: 'Font Awesome 5 Free';
  content: "\f13a";
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  vertical-align: middle;
  font-weight: 900;
}
.nav-side-menu ul .active,
.nav-side-menu li .active {
  border-left: 3px solid #d19b3d;
  background-color: rgb(23, 162, 184);
}
.nav-side-menu ul .sub-menu li.active,
.nav-side-menu li .sub-menu li.active {
  color: #d19b3d;
}
.nav-side-menu ul .sub-menu li.active a,
.nav-side-menu li .sub-menu li.active a {
  color: #d19b3d;
}
.nav-side-menu ul .sub-menu li,
.nav-side-menu li .sub-menu li {
  background-color: rgb(23, 162, 184);
  border: none;
  line-height: 28px;
  margin-left: 0px;
}
.nav-side-menu ul .sub-menu li:hover,
.nav-side-menu li .sub-menu li:hover {
  background-color: #020203;
}
.nav-side-menu ul .sub-menu li:before,
.nav-side-menu li .sub-menu li:before {
  font-family: 'Font Awesome 5 Free';
  content: "\f105";
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  vertical-align: middle;
  font-weight: 900;
}
.nav-side-menu li {
  padding-left: 0px;
  border-left: 3px solid #84a3c6;

}
.nav-side-menu li a {
  text-decoration: none;
  color: #e1ffff;
}
.nav-side-menu li a i {
  padding-left: 10px;
  width: 20px;
  padding-right: 20px;
}
.nav-side-menu li:hover {
  border-left: 3px solid #fbff00;
  background-color: rgb(23, 162, 184);
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
}
@media (max-width: 767px) {
  .nav-side-menu {
    position: relative;
    width: 100%;
  }
  .nav-side-menu .toggle-btn {
    display: block;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 10 !important;
    padding: 3px;
    background-color: #000000;
    color: #000;
    width: 40px;
    text-align: center;
  }
  .brand {
    text-align: left !important;
    font-size: 22px;
    padding-left: 20px;
    line-height: 50px !important;
  }
}
@media (min-width: 767px) {
  .nav-side-menu .menu-list .menu-content {
    display: block;
  }
}
body {
  margin: 0px;
  padding: 0px;
}
</style>
