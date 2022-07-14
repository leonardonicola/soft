<template >
  <header id="header">
   <h1>Soft</h1>
    <div>
      <p @click="handleClick(titleOne)">{{titleOne}}</p>
      <p @click="handleClick(titleTwo)">{{titleTwo}}</p>
    </div>
  </header>
</template>

<script>
export default {
  data:function(){
    return{
      titleOne: "Apartamentos",
      titleTwo: "Casas"
    }
  },
  methods:{
    handleClick(el){
      console.log(el)
    }
  }
}
</script>

<style>
  #header{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding:0 30px 0 30px;
    align-items: center;
  }

  #header > div{
    display: flex;
    grid-column-start: 3;
    justify-content: end;
    gap: 20px;
  }

  #header > h1{
    color: rgb(255, 102, 0);
  }

</style>