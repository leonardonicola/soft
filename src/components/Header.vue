<template >
  <header id="header">
   <h1>Soft</h1>
    <div>
      <a href="#txtOne"><p>{{titleOne}}</p></a>
    </div>
  </header>
</template>

<script>
export default {
  data:function(){
    return{
      titleOne: "Apartamentos",
    }
  }
}
</script>

<style>
  #header{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding:0 30px 0 30px;
    cursor: pointer;
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

  a{
    text-decoration: none;
    color: #000;
  }

  a:hover{
    background-color: rgba(0, 0, 0, 0.062);
  }

</style>