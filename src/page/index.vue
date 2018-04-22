<template>
<div>

  <Navbarfixedtop></Navbarfixedtop>
  <Subnavbar></Subnavbar>
  <div style="margin-top:300px;text-align: center;">
    <h1>系统建设中</h1>
  </div>
  <Extra></Extra>
  <Footer></Footer>

</div>

</template>

<script>

  import '../assets/css/style.css'
  import Navbarfixedtop from '@/components/navbar-fixed-top'
  import Subnavbar from '@/components/subnavbar'
  import Extra from '@/components/extra'
  import Footer from '@/components/footer'
  export default {
    name: 'PageIndex',
    components: {Navbarfixedtop, Subnavbar, Extra, Footer},
    data () {
      return {
      }
    }
  }
</script>
