<template>
  <div>
    <div class="preview">
      <button :color="'blue'" :text="'Blue Button'"></button>
    </div>
  </div>
</template>

<script>
import button from '@/components/button'

export default {
  components: {
    button
  }
}
</script>

<style scoped>
.preview {
  padding: 20px;
}
</style>
