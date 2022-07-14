<template>
    <div id="first">
        <div>
            <h1>Segurança e qualidade moram juntas.</h1>
            <h4>Conheça os imóveis que a Soft é dona ou administradora exclusiva, 
            e tenha uma experiência diferenciada da primeira visita à entrega das chaves.</h4>
        </div>
        <atropos id="atropos">
            <img src="../assets/apartamentomain.jpg" data-atropos-offset="5"/>
        </atropos>
    </div>
</template>

<script>
import Atropos from 'atropos/vue';
export default {
components: {
      Atropos
}
}
</script>

<style>
    #first{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-start: 1;
        grid-column-end: 3;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 80px 50px 30px 50px;
        background-color: rgba(253, 240, 231, 0.664);
    }

    #first img{
        width: 500px;
    }

    #first h1{
        font-size: 50px;
    }

    #first > div{
        margin: 0;
        padding: 0 35px;
    }


    @media screen and (max-width:950px) {
        #first{
            grid-template-columns: 1fr;
        }
    }

    @media screen and (max-width:600px) {
        #first img{
            width: 100%;
        }
    }
    

</style>