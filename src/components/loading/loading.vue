<template>
  <div class="loading-background">

    <div class="loading-box ball-spin-fade-loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

  </div>

</template>

<script>

</script>

<style scoped>
  .loading-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .loading-box {
    position: relative;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 80px;
    margin: -40px 0 0 -40px;
  }

  @-webkit-keyframes ball-spin-fade-loader {
    50% {
      opacity: 0.3;
      -webkit-transform: scale(0.4);
      transform: scale(0.4);
    }

    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes ball-spin-fade-loader {
    50% {
      opacity: 0.3;
      -webkit-transform: scale(0.4);
      transform: scale(0.4);
    }

    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  .ball-spin-fade-loader > div:nth-child(1) {
    top: 55.5px;
    left: 30.5px;
    -webkit-animation: ball-spin-fade-loader 1s 0s infinite linear;
    animation: ball-spin-fade-loader 1s 0s infinite linear;
  }

  .ball-spin-fade-loader > div:nth-child(2) {
    top: 47.54545px;
    left: 47.54545px;
    -webkit-animation: ball-spin-fade-loader 1s 0.12s infinite linear;
    animation: ball-spin-fade-loader 1s 0.12s infinite linear;
  }

  .ball-spin-fade-loader > div:nth-child(3) {
    top: 30.5px;
    left: 55.5px;
    -webkit-animation: ball-spin-fade-loader 1s 0.24s infinite linear;
    animation: ball-spin-fade-loader 1s 0.24s infinite linear;
  }

  .ball-spin-fade-loader > div:nth-child(4) {
    top: 13.45455px;
    left: 47.74545px;
    -webkit-animation: ball-spin-fade-loader 1s 0.36s infinite linear;
    animation: ball-spin-fade-loader 1s 0.36s infinite linear;
  }

  .ball-spin-fade-loader > div:nth-child(5) {
    top: 5.5px;
    left: 30.5px;
    -webkit-animation: ball-spin-fade-loader 1s 0.48s infinite linear;
    animation: ball-spin-fade-loader 1s 0.48s infinite linear;
  }

  .ball-spin-fade-loader > div:nth-child(6) {
    top: 13.45455px;
    left: 13.45455px;
    -webkit-animation: ball-spin-fade-loader 1s 0.6s infinite linear;
    animation: ball-spin-fade-loader 1s 0.6s infinite linear;
  }

  .ball-spin-fade-loader > div:nth-child(7) {
    top: 30.5px;
    left: 5.5px;
    -webkit-animation: ball-spin-fade-loader 1s 0.72s infinite linear;
    animation: ball-spin-fade-loader 1s 0.72s infinite linear;
  }

  .ball-spin-fade-loader > div:nth-child(8) {
    top: 47.54545px;
    left: 13.45455px;
    -webkit-animation: ball-spin-fade-loader 1s 0.84s infinite linear;
    animation: ball-spin-fade-loader 1s 0.84s infinite linear;
  }

  .ball-spin-fade-loader > div {
    background-color: red;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin: 2px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    position: absolute;
  }
</style>
