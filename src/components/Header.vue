<template >
  <header>
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
  header{
    display: flex;
    position:sticky;
    box-sizing: border-box;
    grid-column-start: 1;
    grid-column-end: 4;
    padding:0 30px 0 30px;
    justify-content: space-between;
    align-items: center;
  }

  header > div{
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  header > h1{
    color: rgb(255, 102, 0);
  }
</style>