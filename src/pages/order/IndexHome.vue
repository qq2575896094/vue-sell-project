<template>
  <div class="order-indexHome">
    <CommonHeader :isGoBack="isGoBack" :title="headerTitle"></CommonHeader>
  </div>
</template>

<script>
  import CommonHeader from "../../components/header/CommonHeader.vue"

  export default {
    name: 'OrderIndexHome',
    data() {
      return {
        isGoBack: true,
        headerTitle: "订单"
      }
    },
    components: {
      CommonHeader
    }
  }
</script>

<style scoped lang="less" type="text/css">
  .order-indexHome {

  }
</style>
