<template>
  <div class="container">
    <div>
      <btn :color="'preview primary'" :text="'primay'" />
      <btn :color="'preview default'" :text="'default'" />
      <btn :color="'preview blocked'" :text="'blocked'" />
    </div>
    <div>
      <status :status="status" />
    </div>
  </div>
</template>

<script>
import btn from '@/components/btn'
import status from '@/components/status'

export default {
  components: {
    btn,
    status
  },

  data: function () {
    return {
      status: {
        avatar: {
          src: '/static/testcase.png',
          size: 'normal'
        }
      }
    }
  }
}
</script>

<style>
.preview {
  margin: 5px;
}

.center {
  justify-content: space-around;
}
</style>
