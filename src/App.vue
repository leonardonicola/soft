<template>
  <div id="main" ref="main">
    <Header/>
    <First/>
    <div id="txtOne">
      <h1>Em destaque</h1>
    </div>

    <div class="container">
      <Apes source="ape1.jpg" alter="ape1alternativo.jpg" price="R$600.000"
      local="Rua dos Passarinhos, Paulista"
      desc="Apê arrojado, já vem mobiliado com bom gosto!"/>

      <Apes source="ape2.jpg" alter="ape2alter.png" price="R$1.350.000" 
      local="Rua das Torneiras, Itaim Bibi"
      desc="Apê bonitinho e aconchegante."/>

      <Apes source="ape3.jpg" alter="ape3alter.jpg" price="R$730.000" 
      desc="Apê bem espaçoso, da até pra ter cachorros!"
      local="Rua dos Apes, Mooca"/>

      <Apes v-if="toggle" source="ape4.jpg" alter="ape4alter.jpg" price="R$2.600.000"
      local="Rua dos Canários, Paulista"
      desc="Apê ultra moderno, com vista para o pôr do sol e etc!"/>

      <Apes v-if="toggle" source="ape5.jpg" alter="ape5alter.jpg" price="R$2.730.000" 
      desc="Apê luxuoso, apenas para quem pode!"
      local="Rua dos Milionarios, Mooca"/>

      <Apes v-if="toggle" source="ape2.jpg" alter="ape2alter.png" price="R$1.350.000" 
      local="Rua das Torneiras, Itaim Bibi"
      desc="Apê... Já vi esse apê antes"/>
    </div>

    <button v-if="!toggle" @click="handleToggle" class="btn vermais">VER MAIS</button>

    <div id="txtTwo">
      <h1>Por que é mais fácil comprar seu apê na Soft?</h1>
      <h4>Conheça os serviços que você encontra na Soft e resolva tudo em um só lugar.</h4>
    </div>

    <div class="container">
      <Proposta proposta="Financiamento"
      descprop="Assessoramos gratuitamente seu financiamento, 
      ajudando desde a negociação de taxas até o preenchimento de toda documentação."/>

      <Proposta proposta="A melhor experiência de compra"
      descprop="Conte com especialistas super qualificados para te ajudar em todos os momentos."/>

      <Proposta proposta="Documentação sem burocracia"
      descprop="Receba Assessoria Imobiliária completa de um time de advogados experientes 
      no mercado para uma compra segura."/>
    </div>

    <Footer/>

  </div>
</template>

<script>
import Header from './components/Header.vue'
import First from './components/First.vue'
import Apes from './components/Apes.vue'
import Proposta from './components/Proposta.vue'
import Footer from './components/Footer.vue'
export default {
    name: 'App',
    components:{Header, First, Apes, Proposta, Footer},
    data:function(){
      return{
        toggle:false
      }
    },
    methods: {
      handleToggle(){
        this.toggle = !this.toggle
      }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body{
  font-family: 'Poppins', Arial, sans-serif;
  color: rgb(24, 24, 24);
  margin: 0;
  cursor: default;
}

#main{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

#txtOne{
  display: flex;
  justify-content: center;
  word-break: break-all;
  padding: 80px 0;
  font-size: 25px;
}

#txtOne > h1{
  height: 60px;
  overflow: hidden;
}

#txtTwo{
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  line-break: auto;
  padding: 0 80px;
}

h4{
  font-weight: 100;
}

.vermais{
  display: flex;
  justify-content: center;
  margin: 50px auto;
  width: 50%;
}

.container{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  padding: 10px 80px;
  justify-items: center;
  align-items: center;
  padding-bottom: 100px;
}

@media screen and (max-width: 900px) {

  .container{
    grid-template-columns: 1fr 1fr;
  }

}

@media screen and (max-width: 650px) {


  .container{
    grid-template-columns: 1fr;
  }
  
}

</style>