<template>

<div id="login">

<RegNavbarfixedtop></RegNavbarfixedtop>


  <div class="account-container">

    <div class="content clearfix">

      <form action="#" method="post">

        <h1>Member Login</h1>

        <div class="login-fields">

          <p>Please provide your details</p>

          <div class="field">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" value="" placeholder="Username" class="login username-field" autocomplete="off"/>
          </div> <!-- /field -->

          <div class="field">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" value="" placeholder="Password" class="login password-field" autocomplete="off"/>
          </div> <!-- /password -->

        </div> <!-- /login-fields -->

        <div class="login-actions">

				<span class="login-checkbox">
					<input id="Field" name="Field" type="checkbox" class="field login-checkbox" value="First Choice" tabindex="4" />
					<label class="choice" for="Field">Keep me signed in</label>
				</span>
          <button class="button btn btn-success btn-large">Sign In</button>
        </div> <!-- .actions -->
      </form>
    </div> <!-- /content -->
  </div> <!-- /account-container -->

  <div class="login-extra">
    <a href="#">Reset Password</a>
  </div>

</div>

</template>

<style>
  #login{
    margin-top:120px;
  }
</style>

<script>
  import '../assets/css/style.css'
  import '../assets/css/pages/signin.css'
  import RegNavbarfixedtop from '@/components/reg-navbar-fixed-top'

  export default {
    name: 'PageLogin',
    components: {RegNavbarfixedtop},
    data () {
      return {
      }
    }
  }
</script>
