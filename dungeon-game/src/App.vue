<template>
  <div id="app">
    <div>
    <HeroCard/>

    </div>
    <div>
    <EnemyCard/>

    </div>
  </div>  
</template>

<script>
import HeroCard from '@/components/HeroCard'
import EnemyCard from '@/components/EnemyCard'
export default {
  
  components:{
    HeroCard,
    EnemyCard
  }

}
</script>

<style>
 body,html{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-image:url("./assets/bg.jpg");
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover;
  
} 
#app{
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
}
</style>