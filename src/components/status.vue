<template>
  <div class="status">
    <avatar :src="status.avatar.src" :size="status.avatar.size" />
    <div>
      <name :text="'饭小默'" />
    </div>
  </div>
</template>

<script>
import avatar from '@/components/avatar'
import name from '@/components/name'
import timeago from '@/components/timeago'

export default {
  components: {
    avatar,
    name,
    timeago
  },

  props: ['status'],

  data: function () {
    return {
      status: this.status
    }
  }
}
</script>

<style>
.status {
  display: inline-block;
}
</style>
