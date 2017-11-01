<template>
  <div class="find-indexHome">
    <CommonHeader :isGoBack="isGoBack" :title="headerTitle"></CommonHeader>
    <div class="content-wrapper">

    </div>
  </div>
</template>

<script>
  import CommonHeader from "../../components/header/CommonHeader.vue"

  export default {
    name: 'FindIndexHome',
    data() {
      return {
        isGoBack: false,
        headerTitle: "发现"
      }
    },
    mounted() {
      this.$store.dispatch("FOOTER_SHOW");
    },
    methods: {},
    components: {
      CommonHeader
    }
  }
</script>

<style lang="less" scoped type="text/css">
  .find-indexHome {
    margin-top: 54px;
  }
</style>
