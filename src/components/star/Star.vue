<template>
  <div class="star" :class="starSize">
    <span class="star-item" v-for="(itemClass,index) in itemsClasses" :class="itemClass"></span>
  </div>
</template>

<script>
  const START_LENGTH = 5;
  const START_ON = 'on';
  const START_HALF = 'half';
  const START_OFF = 'off';
  export default {
    name: 'star',
    props: {
      imageSize: {
        type: Number
      },
      score: {
        type: Number
      }
    },
    computed: {
      starSize() {
        return 'star-' + this.imageSize;
      },
      itemsClasses() {
        let starClassArr = [];
        let score = Math.floor(this.score / 2) * 2; //对.5取整
        let integer = Math.floor(score);  //整数部分
        let isDecimal = this.score % 1 !== 0;  //是否存在小数 true:存在
        for (let n = 0; n < integer; n++) {
          starClassArr.push(START_ON);
        }
        if (isDecimal) {
          starClassArr.push(START_HALF);
        }
        while (starClassArr.length < START_LENGTH) {
          starClassArr.push(START_OFF);
        }
        return starClassArr;
      }
    },
    mounted() {
    }
  }
</script>

<style scoped type="text/css" lang="less">
  @import "../../styles/_mixins";

  .star {
    font-size: 0;
    &.star-48 {
      .star-item {
        width: 20px;
        height: 20px;
        margin-right: 22px;
        background-size: 20px 20px;
        &.on {
          .background-image('star48_on');
        }
        &.half {
          .background-image('star48_half');
        }
        &.off {
          .background-image('star48_off');
        }
      }
    }
    &.star-36 {
      .star-item {
        width: 20px;
        height: 20px;
        margin-right: 22px;
        background-size: 20px 20px;
        &.on {
          .background-image('star36_on');
        }
        &.half {
          .background-image('star36_half');
        }
        &.off {
          .background-image('star36_off');
        }
      }
    }
    &.star-24 {
      .star-item {
        width: 20px;
        height: 20px;
        margin-right: 22px;
        background-size: 20px 20px;
        &.on {
          .background-image('star24_on');
        }
        &.half {
          .background-image('star24_half');
        }
        &.off {
          .background-image('star24_off');
        }
      }
    }
    &.star-14 {
      .star-item {
        width: 14px;
        height: 14px;
        margin-right: 6px;
        background-size: 14px 14px;
        &.on {
          .background-image('star24_on');
        }
        &.half {
          .background-image('star24_half');
        }
        &.off {
          .background-image('star24_off');
        }
      }
    }
    .star-item {
      display: inline-block;
      background-repeat: no-repeat;
      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>
