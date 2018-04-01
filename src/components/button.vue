<template>
  <div>
    <div :color="''" class="button" v-bind:class="className">{{text}}</div>
  </div>
</template>

<script>
export default {
  props: ['text', 'color'],
  data: function () {
    return {
      className: 'button ' + this.color
    }
  }
}
</script>

<style scoped>
.button {
  height: 36px;
  font-size: 14px;
  padding: 0 18px;
  border-radius: 999px;
  text-align: center;
  line-height: 36px;
}

.blue {
  color: white;
  background-color: #33a5ff;
}
</style>
