import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    ListsValute:[],
    FilterValute:[],
    searchValute:'',
    currencyRate:'',
    naminal:1,
    naminalBasic:1,
    basicReverse: 'RUB',
    dependentReverse:'AUD'
  },
  getters: {
    getListsValute:(state) => state.ListsValute,
    getFilterValute:(state) => state.FilterValute,
    getCurrencyRate:(state) => state.currencyRate,
    getNaminal:(state) => state.naminal,
    getNaminalBasic:(state) => state.naminalBasic,
    getBasicReverse:(state) => state.basicReverse,
    getDependentReverse:(state) => state.dependentReverse
  },
  actions: {
    async fetchValute({ commit }){
      try{
        const data  = await axios.get(
          "https://www.cbr-xml-daily.ru/daily_json.js"
        );
        commit ("SET_ListsValute", data.data.Valute);
      }catch(error){
        alert (error);
        console.log(error);
      }
    },
    FILTER_LIST ( {commit} , {arrFilter, searchValue}){
      const filter = Object.keys(arrFilter)
        .filter((key) => key.includes((searchValue)))
        .reduce((obj, key) => {
            return Object.assign(obj, {
              [key]: arrFilter[key],
            });
        },{});
      Object.keys(filter).forEach( key => {
        Object.assign(filter[key], { arrow:null, classes: null, difference: filter[key].Value - filter[key].Previous})
        if(filter[key].Value > filter[key].Previous){
          filter[key].arrow = '&#11014;',
          filter[key].classes = 'text-success'
        }else{
          filter[key].arrow = '&#11015;'
          filter[key].classes = 'text-danger'
        } 
      })
      commit('SET_FilterValute', filter)
    },
    Fun_Rate({commit} , {rate, selectOne, basic}){
      commit('SET_CurrencyRate', {rate, selectOne, basic})
    },
   
  },
  mutations: {
    
    SET_CurrencyRate(state, {rate,selectOne,basic}) { 
      state.FilterValute.RUB = {"Nominal": 1,"CharCode": "RUB", "Value": 1}
      state.naminal = state.FilterValute[selectOne].Nominal
      if(basic == 'RUB'){
        state.currencyRate = (rate*state.FilterValute[selectOne].Value)/state.FilterValute[selectOne].Nominal;
      }else if(selectOne == 'RUB' ){
        state.currencyRate = (rate/state.FilterValute[basic].Value)*state.FilterValute[basic].Nominal
      }else{
        state.currencyRate = rate*((state.FilterValute[selectOne].Value/state.FilterValute[selectOne].Nominal)/(state.FilterValute[basic].Value/state.FilterValute[basic].Nominal)) 
      }
    },
    SET_ListsValute(state, ListsValute) {  state.ListsValute = ListsValute; },
    SET_FilterValute(state, FilterValute) {  state.FilterValute = FilterValute; },
    Revers_Converter(state , {dependent, basic}){
      state.basicReverse =  dependent
      state.dependentReverse = basic
      return {dependent, basic}
    },
    SET_REVERS({state}, {item}){
      item.Value = 1/item.Value
      item.Previous = 1/item.Previous
      item.reverse ? item.reverse = false : item.reverse = true
    },
  },
  modules: {
  }
})
