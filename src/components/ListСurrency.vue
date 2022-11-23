<template>
  <div class="container">
    <input type="text" v-model="search" placeholder="Поиск по коду">
    <table class="table table-light">
      <thead>
        <tr>
          <th scope="col">№</th>
          <th scope="col">Валюта</th>
          <th scope="col">Пара</th>
          <th scope="col">Курс</th>
          <th scope="col">Динамика</th>
        </tr>
      </thead>
      <tbody v-for="(item, key, index) in filterCode">
        <tr>
          <th scope="row">{{index + 1}} </th>
          <td>{{ item.Name }}</td>
          <td 
            class="pointer text-center"
            title="Обратный курс"
            @click="reversCourse(item)"
          >
            <span v-if="item.reverse">{{basicValute}}/{{item.CharCode}}</span>
            <span v-else>{{item.CharCode}}/{{basicValute}}</span>
          </td>
          <td class="text-center">{{(item.Value).toFixed(4)}}</td>
          <td 
          :class="item.classes"
          class=" text-center"
          >
            {{(item.difference).toFixed(4)}}
            <span v-html="item.arrow"></span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  
</template>
<script setup>
  import {ref, onMounted, computed } from "vue";
  import { useStore } from "vuex";
  const store = useStore();
  const basicValute = 'RUB';
  const search = ref('');

  const filterCode = computed(() => {
    store.dispatch('FILTER_LIST', {arrFilter: store.getters.getListsValute , searchValue: search.value.toUpperCase()})
    return store.getters.getFilterValute;
  });
  function reversCourse(item) {
    store.commit('SET_REVERS', {item: item})
    return store.getters.getFilterValute;
  }
  onMounted(() => {
    store.dispatch("fetchValute");
  });

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  td{
    text-align: left;
  }
  .pointer{
    cursor: pointer;
  }
</style>
