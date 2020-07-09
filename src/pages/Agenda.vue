<template>
  <div class="container" style="max-width: 100%;">
    <NavBar></NavBar>

    <br />

    <div class="list-group lista">
     
        <Comments></Comments>
     
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Comments from "../components/Comments";

export default {
  name: "Agenda",
  components: {
    NavBar,
    Footer,
    Comments
  },
  data() {
    return {
      Dashboard: [],
    };
  },

  methods: {},

  computed: {},

  watch: {},
};
</script>

<style>
.lista {
  max-width: 100%;
}
</style>
