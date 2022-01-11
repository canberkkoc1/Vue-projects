<template>
  <div class="app">
    <div class="inputClass">
      <Input/>

    </div>
      <div class="cardClass">
        <Card/>
      </div>
  </div>  
</template>

<script>
import Input from '@/components/Input'
import Card from '@/components/Card'
export default {

  components:{
    Input,
    Card,
  }


}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app{
  padding: 20px 20px;

}

.inputClass{
  display: flex;
  justify-content: center; 
  margin-bottom: 30px; 
}
</style>
