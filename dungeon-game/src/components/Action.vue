<template>
    
        <div class="actions">
            <button   @click="attackEnemy"  class="btn circle war">⚔</button>
            <button   @click="getMana"  class="btn circle manas">💙</button>
            <button   @click="getHealth"  class="btn circle heal">🩸</button>
            <button   @click="attackEnemy"  class="btn circle flag">🏳</button>
           
        </div> 
    
</template>

<script>
export default {

    data() {
        return {
            enemyInfo:this.$store.getters.getEnemy,
            heroInfo:this.$store.getters.getHero,
            
        }
    },

    computed:{
       
    },

    methods: {
        attackEnemy(){
            if(this.enemyInfo.health > 0 && this.heroInfo.mana > 0){

                let damage = this.heroInfo.damage;
                let enemyHealth = this.enemyInfo.health;
                

                 
                    let heroMana = this.heroInfo.mana - 20
                alert(heroMana)
                if(heroMana == 0 ){
                    alert("mana is finish")
                    

                }
                //* enemy mana                
                let enemyMana = this.enemyInfo.mana -15
                
                this.$store.dispatch('EnemyMana',enemyMana)

                alert(`enemy mana  = ${enemyMana}`)
                //*
                this.$store.dispatch('heroMana',heroMana)

                if(enemyMana == 0){
                    enemyMana += 30
                    this.$store.dispatch('EnemyMana',enemyMana)

                }



                let damageEnemy = this.enemyInfo.damage;
                let heroHealth = this.heroInfo.health
    
                let newHeroHealth = heroHealth - damageEnemy;
    
                this.$store.dispatch('HeroAttack',newHeroHealth)
    
                let newEnemyHealth = enemyHealth - damage
    
                this.$store.dispatch('enemyAttack',newEnemyHealth)
            }
            else if(this.enemyInfo.health < 0){
                alert(this.enemyInfo.health)
                location.reload()
            }

            
        },

        getMana(){
            if(this.heroInfo.mana<100){
                let heroMana = this.heroInfo.mana;
    
                heroMana +=20
                this.$store.dispatch('heroMana',heroMana)

            }

        },

        getHealth(){
            if(this.heroInfo.health < 100){
                let heroHealth = this.heroInfo.health;
    
                heroHealth +=  15;
    
                this.$store.dispatch("HeroAttack",heroHealth)

            }
            


        }
    },

}
</script>

<style>
.actions{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.btn{
    width: 20%;
}
.circle {
    background-color:#fff;
    border: none;   
    border-radius:50%;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
    
}

.war{
    background-color: rgb(228, 72, 72);
    font-size: 1.5rem;
}
.manas{
    background-color: rgb(35, 187, 233);
    font-size: 1.5rem;
}
.heal{
    background-color: rgb(23, 201, 67);
    font-size: 1.5rem;
}
.flag{
    background-color: rgb(197, 184, 184);
    font-size: 1.5rem;
}
</style>