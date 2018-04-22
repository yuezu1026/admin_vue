<template>

  <div class="navbar navbar-fixed-top">

    <div class="navbar-inner">

      <div class="container">

        <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </a>

        <router-link to="index" class="brand">{{siteName}}</router-link>

        <div class="nav-collapse">
          <ul class="nav pull-right">
            <li class="">
              <router-link to="login" class="">{{hasAccountInfo}}</router-link>
            </li>
            <li class="">
              <router-link to="index" class="">
                <i class="icon-chevron-left"></i>
                {{backToHome}}
              </router-link>
            </li>
          </ul>

        </div><!--/.nav-collapse -->

      </div> <!-- /container -->

    </div> <!-- /navbar-inner -->

  </div>
</template>

<script>


  import '../assets/js/jquery-1.7.2.min.js'
  import '../assets/js/bootstrap.js'
  export default {
    name: 'Navbarfixedtop',
    data () {
      return {
        siteName: "sCloud",
        hasAccountInfo: " Already have an account? Login now",
        backToHome: "Back to Homepage"
      }
    }
  }
</script>
