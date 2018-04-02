<template>
  <img :class="className" :src="source" />
</template>

<script>
export default {
  props: ['src', 'size'],
  data: function () {
    return {
      className: 'avatar ' + this.size,
      source: this.src
    }
  }
}
</script>

<style scoped>
.avatar {
  border-radius: 50%;
  width: 180px;
  height: 180px;
}

.large {
  width: 60px;
  height: 60px;
}

.normal {
  width: 48px;
  height: 48px;
}
</style>
