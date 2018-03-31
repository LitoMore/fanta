<template>
  <div>
    <div class="button">{{text}}</div>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style>
.button {
  background-color: blue;
  border-radius: 5px;
  padding: 10px;
}
</style>
