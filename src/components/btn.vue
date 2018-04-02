<template>
  <button :class="className">{{text}}</button>
</template>

<script>
export default {
  props: ['text', 'color'],
  data: function () {
    return {
      className: 'btn ' + this.color
    }
  }
}
</script>

<style scoped>
.btn, .btn:after {
  display: inline-block;
  border: 0;
}
.btn {
  height: 36px;
  width: auto;
  font-size: 14px;
  padding: 0 18px;
  border-radius: 999px;
  line-height: 36px;
}

.primary {
  color: white;
  background-color: #33a5ff;
}

.default {
  color: #ced4e0;
  background-color: #f1f3f5;
}

.blocked {
  color: white;
  background-color: #39404D;
}
</style>
