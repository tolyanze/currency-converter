<template>
  <div class="row">
    
    <div class="col-sm-10 mt-5">
      <input class="d-flex" type="text" v-model="search" placeholder="Поиск по коду (RUB)">
      <table class="table table-light">
        <thead>
          <tr>
            <th scope="col">№</th>
            <th class="d-sm-block d-none" scope="col">Валюта</th>
            <th scope="col">Пара</th>
            <th scope="col">Курс</th>
            <th scope="col">Динамика</th>
          </tr>
        </thead>
        <tbody v-for="(item, key, index) in filterCode">
          <tr>
            <th scope="row">{{index + 1}} </th>
            <td class="d-sm-block d-none">{{ item.Name }}</td>
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
    <div class="col-sm-2 d-flex flex-column">
      <a class="mt-5" href="https://webasite.ru/play/">
        <img class="w-100" src="@/assets/img/play.png" alt="play">
        <p>Игра онлайн для детей</p>
      </a>
      
    </div>
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
