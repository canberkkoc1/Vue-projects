<template>
    <div>
        <input type="text" v-model="query">
        <button @click="searchMusic">Search</button>
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

</style>