<template>
  <div class="container home">
    <ListСurrency/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListСurrency from '@/components/ListСurrency.vue'

export default {
  name: 'Сurrency',
  components: {
    ListСurrency
  }
}
</script>
<style lang="scss">
  .home{
    margin-bottom: 50px;
  }
</style>
