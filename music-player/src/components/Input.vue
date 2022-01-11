<template>
    <div>
        <input type="text" v-model="query" class="inputMusic">
        <button @click="searchMusic" class="btnMusic">Search</button>
    </div>
</template>

<script>
export default {

    data() {
        return {
            query:null,
        }
    },

    methods: {
        searchMusic(){
            this.$store.dispatch("getSearcData",this.query)
        }
    },

}
</script>

<style>
html,body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
}
.inputMusic{
    width: 400px;
    margin-right: 30px;
    height: 40px;
    padding-left:15px ;
}

.btnMusic{
    color: rgb(39, 41, 43);
    border:2px solid purple;
    background-color: transparent;
    width: 100px;
    height: 30px;
}
.btnMusic:hover{
    
    background-color: lightcoral;
    
}


</style>