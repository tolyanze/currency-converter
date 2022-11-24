<template>
  <div class="row">
    <div class="col-sm-10 mt-5">
      <div class="d-flex flex-sm-row flex-column align-items-center justify-content-center">
        <div class="input-append btn-group">
          <input class="span2" size="16" type="text" v-model="selected">
          <select v-model="selectOne">
            <option 
            v-for="(select, index) in store.getters.getFilterValute"
            :key="index"
            v-bind:value="select.CharCode">
              {{select.CharCode}}
            </option>
          </select>
        </div>
        <div id="reverse" class="mx-3" @click="reverse(selectOne,basicValute)" >&hArr;</div>
        <div class="input-append btn-group">
          <input class="span2" size="16" type="text" :value="curse.toFixed(4)"  disabled>
          <select v-model="basicValute">
            <option selected>{{basicValute}}</option>
            <option 
            v-for="(basic, index) in store.getters.getFilterValute"
            :key="index"
            v-bind:value="basic.CharCode"
            >
              {{basic.CharCode}}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="col-sm-2 d-flex flex-column">
      <a class="my-5" href="https://webasite.ru/play/">
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
  let basicValute = ref(store.state.basicReverse);
  let selectOne = ref(store.state.dependentReverse);
  const selected = ref(1)

  const curse = computed(() => {
    store.dispatch('Fun_Rate', {rate: selected.value, selectOne: selectOne.value, basic: basicValute.value })
    return store.state.currencyRate
  })
  function reverse(x,n){
    store.commit('Revers_Converter', {dependent: x, basic: n})
    selectOne.value = store.state.dependentReverse
    basicValute.value = store.state.basicReverse
    return {selectOne,basicValute};
  }
  onMounted(() => {
    store.dispatch("fetchValute");
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #reverse{
    cursor:pointer;
  }
</style>
