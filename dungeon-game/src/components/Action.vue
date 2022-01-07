<template>
    
        <div class="actions">
            <button   @click="alertButton"  class="btn circle war">⚔</button>
            <button   @click="alertButton"  class="btn circle manas">💙</button>
            <button   @click="alertButton"  class="btn circle heal">💊</button>
            <button   @click="alertButton"  class="btn circle flag">🏳</button>
           
        </div> 
    
</template>

<script>
export default {

    data() {
        return {
            
        }
    },

    methods: {
        alertButton(){
            alert()
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