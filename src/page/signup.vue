<template>

  <div id="signup">

    <RegNavbarfixedtop></RegNavbarfixedtop>

    <div>

      <div class="account-container register">

        <div class="content clearfix">

          <form action="#" method="post">

            <h1>Signup for Free Account</h1>

            <div class="login-fields">

              <p>Create your free account:</p>

              <div class="field">
                <label for="firstname">First Name:</label>
                <input type="text" id="firstname" name="firstname" value="" placeholder="First Name" class="login" />
              </div> <!-- /field -->

              <div class="field">
                <label for="lastname">Last Name:</label>
                <input type="text" id="lastname" name="lastname" value="" placeholder="Last Name" class="login" />
              </div> <!-- /field -->


              <div class="field">
                <label for="email">Email Address:</label>
                <input type="text" id="email" name="email" value="" placeholder="Email" class="login"/>
              </div> <!-- /field -->

              <div class="field">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" value="" placeholder="Password" class="login"/>
              </div> <!-- /field -->

              <div class="field">
                <label for="confirm_password">Confirm Password:</label>
                <input type="password" id="confirm_password" name="confirm_password" value="" placeholder="Confirm Password" class="login"/>
              </div> <!-- /field -->

            </div> <!-- /login-fields -->

            <div class="login-actions">

				<span class="login-checkbox">
					<input id="Field" name="Field" type="checkbox" class="field login-checkbox" value="First Choice" tabindex="4" />
					<label class="choice" for="Field">Agree with the Terms & Conditions.</label>
				</span>

              <button class="button btn btn-primary btn-large">Register</button>

            </div> <!-- .actions -->

          </form>

        </div> <!-- /content -->

      </div> <!-- /account-container -->


      <!-- Text Under Box -->
      <div class="login-extra">
        Already have an account?

        <router-link to="login" class="">{{loginAccountInfo}}</router-link>

      </div> <!-- /login-extra -->

    </div>

  </div>


</template>

<style>
  #signup{
    margin-top:120px;
  }
</style>

<script scoped>
  import '../assets/css/pages/signin.css'
  import '../assets/css/style.css'

  import RegNavbarfixedtop from '@/components/reg-navbar-fixed-top'

  export default {
    name: 'signup',
    components: { RegNavbarfixedtop },
    data () {
      return {
        siteName: "sCloud",
        index: "#index",
        login: "#",
        signup: "#signup",
        haveAccountInfo: "Already have an account? Login now",
        backToHome: "Back to Homepage",
        loginAccountInfo: "Login to your account"
      }
    }
  }

</script>
