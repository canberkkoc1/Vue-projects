<template>
    <div>
        <div class="info">
            <div class="healt">
                <div class="icons">

                <span>💖</span>
                <h4>{{this.getEnemy.health &lt; 0 ? '0' : this.getEnemy.health}}/100</h4>
                </div>
                <div class="healtBar">
                    <div class="bar">

                    <div class="progress-bar"

                        style="background-color:red;margin:0;"
                        :style="{width:this.getEnemy.health &lt; 0 ? '0' : this.getEnemy.health +'%'}"
                    >

                </div>
                    </div>
            </div>

        
            <div class="mana">
                <div class="icons">
                <span>💙</span>
                <h4>{{this.getEnemy.mana &lt; 0 ? '0' : this.getEnemy.mana}}/100</h4>

                </div>
                <div class="manaBar">
                    <div class="bar">

                    <div class="progress-bar"

                        style="background-color:blue ;margin:0;"
                        :style="{width:this.getEnemy.mana &lt; 0 ? '0' : this.getEnemy.mana +'%'}"
                    >

                </div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {


    data(){
        return{
            

        }
    },

    mounted() {
        console.log(this.getEnemy)
    },

    computed:{
        ...mapGetters([
            "getEnemy",
            
        ])
    }
    

}
</script>

<style>
.info{
    width: 100%;
    height: 20%;
}
.bar{
    width: 100%;
    border: 2px solid grey;
}
.progress-bar {
    width: 100%;
    height: 5px;
    background-color: #eee;
    margin: 1em auto;
    transition: width 500ms;
}

.healt{
    display: flex;
    flex-direction: column;
}

.icons{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>