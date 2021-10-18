<template>
  <div class="index">
    <Header />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/HeaderComponente.vue";
import Footer from "@/components/FooterComponente.vue";

export default {
  name: "Index",
  components: {
    Header,
    Footer,
  },
};
</script>
