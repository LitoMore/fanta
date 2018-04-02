<template>
  <div class="timeago">{{text}}</div>
</template>

<script>
export default {
  props: ['text', 'type'],
  data: function () {
  }
}
</script>

<style scoped>
.timeago {
  font-size: 11px;
  color: #ced4e0;
}
</style>
