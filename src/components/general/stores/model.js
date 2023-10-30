import {defineStore} from 'pinia';

export default defineStore("modal",{
    state:()=>({
        isOpen:false,
        numberOf:1,
    }),
    getters:{
        hiddenClass(state){
            return !state.isOpen? "hidden": "";
        }
    }
});