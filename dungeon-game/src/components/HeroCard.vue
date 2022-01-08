<template>
    <div class="containerHero">
        <div class="heroImg">
            <img src="../assets/hero.png" alt="" width="200">
        </div>
        <div class="charInfo">
        <CharInfo />

        </div>
        <div class="action">
        <Action/>

        </div>
    </div>
</template>

<script>
import CharInfo from '@/components/CharInfo'
import Action from '@/components/Action'

export default {

    components:{
        CharInfo,
        Action,
    },

    data() {
        return {
            hero:{},
            enemy:{}      
        }
    },



    

}
</script>

<style>
html,body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.containerHero{
    background-color: black;
    width: 300px;
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    
}
.heroImg{
    width: 100%;
    height: 50%;
}
.heroImg img{
    width: 100%;
}

.charInfo{
    height: 30%;
    width: 92.5%;
    background-color: rgb(240, 227, 227);
    padding: 12px 11px 12px 11px;
    position: absolute;
    top: 19.3rem;
    
}

.action{
    background-color: rgb(223, 166, 102);
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>