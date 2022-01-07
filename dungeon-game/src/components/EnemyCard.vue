<template>
     <div class="containerEnmy">
        <div class="enemyImg">
            <img src="../assets/enemy.jpg" alt="" width="200">
        </div>
        <div class="charInfo-e">
        <CharInfo/>

        </div>
        
    </div>
</template>

<script>
import CharInfo from '@/components/CharInfo'
export default {

    components:{
        CharInfo
    }
}
</script>

<style>
html,body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.containerEnmy{
    background-color: black;
    width: 300px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    
}
.enemyImg{
    width: 100%;
    height: 50%;
}
.enemyImg img{
    width: 100%;

}

.charInfo-e{
    height: 40%;
    width: 92.5%;
    background-color: rgb(240, 227, 227);
    padding: 12px 11px 12px 11px;
    position: absolute;
    top: 19.3rem;
    
}
</style>