<template>
  <div id="main" ref="main">
    <Header/>
    <First/>
    <div id="txtOne"><h1 ref="txt">Apartamentos em destaque</h1></div>

    <Apes source="ape1.jpg" price="R$600.000"
    local="Rua dos Passarinhos, Paulista"
    desc="Apê arrojado, já vem mobiliado com bom gosto!"/>

    <Apes source="ape2.jpg" alter="ape1alternativo.jpg" price="R$350.000" 
    local="Rua das Torneiras, Itaim Bibi"
    desc="Apê bonitinho e aconchegante."/>

    <Apes source="ape3.jpg" price="R$730.000" 
    desc="Apê bem espaçoso, da até pra ter cachorros!"
    local="Rua dos Apes, Mooca"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import First from './components/First.vue'
import Apes from './components/Apes.vue'
export default {
    name: 'App',
    components:{Header, First, Apes},
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    unmounted () {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll () {
        console.log(window.scrollY)
        let winScroll = window.scrollY || this.$refs.main.scrollTop;
        let height = this.$refs.main.clientHeight - window.scrollY;
        let scrolled = (winScroll / height) * 100;
        if(scrolled <= 105){
          this.$refs.txt.style.width = scrolled + "%";
        }
    }
  }
}
</script>

<style>

html {
  scroll-behavior: smooth;
}

body{
  font-family: 'Helvetica', Arial, sans-serif;
  color: rgb(24, 24, 24);
  margin: 0;
}

#main{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 60px 1fr 250px 0.8fr 100px;
}

#txtOne{
  display: grid;
  grid-column-start:1;
  grid-column-end:4;
  padding: 80px 0;
  justify-content: center;
  font-size: 25px;
}

#txtOne > h1{
  background-color:wheat;
  height: 60px;
  overflow-y: hidden;
  overflow-x: hidden;
}

h4{
  font-weight: 100;
}
</style>