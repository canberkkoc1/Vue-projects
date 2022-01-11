<template>
    <div class="cardApp">
        <div class="container" v-for="data in this._getAllData" :key="data">
            <div class="image">
                <img src="https://www.radiocampusparis.org/wp-content/uploads/2015/04/pmrs49-big.jpg" 
                alt="" 
                width="350px"
                height="200px"
                >
            </div>
            <div class="information">
                <div class="artist">
                    <h1> <span>Artist: </span> {{data.artist}}</h1>
                    <h3><span>Listeners: </span>{{data.listeners}}</h3>
                    <h4><span>Name: </span>{{data.name}}</h4>
                </div>
                <a :href="data.url" target="blank">Click and Listen 🎸</a>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data() {
        return {
            
        }
    },

    computed:{
        ...mapGetters(["_getAllData"]),

        
    },

    mounted() {
      
    },
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}
.cardApp{
    display: grid;
    grid-template-columns: repeat(3 , 30%);
    grid-gap: 50px;
    justify-content: center;
}

.container{
    width: 400px;
    height: 450px;
    border: 1px solid black;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: rgb(34,193,195);
background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);

}
.image{
    border-bottom: 2px solid grey;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px 0;

}
.information{
    width: 80%;
    min-height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
.artist{
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}

span{
    border-bottom: 1px solid teal;
    color: rgb(245, 194, 136);
}

a{
    
    text-decoration: none;
    color: rgb(255, 255, 255);
}
</style>