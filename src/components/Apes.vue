<template>
    <div id="apes">
        <div class="card" @click="toggle = !toggle">
            <img :src="require('@/assets/' + source + '')">
            <h2>{{price}}</h2>
            <p>{{local}}</p>
            <p>{{desc}}</p>
        </div>

        <transition-group name="fade">
        <div v-if="toggle" class="popup" @click.self="toggle = !toggle">
            <div class="popup-card">
                <div id="popup-card-imgs">
                    <img id="popup-card-1" :src="require('@/assets/' + alter + '')">
                    <img id="popup-card-2" :src="require('@/assets/' + source + '')">
                </div>
                <div id="popup-card-infos">
                    <h4>Valor à vista</h4>
                    <h1>{{price}}</h1>
                    <h4>{{local}}</h4>
                    <button class="btn agendar" @click.self="toggle2 = !toggle2">Agendar visita</button>
                    <button class="btn duvida" >Tirar dúvidas</button>
                    <h4><i>Agende sua visita gratuita e sem compromissos</i></h4>
                </div>
            </div>
        </div>
        </transition-group>
        
        <transition-group name="fade">
        <div v-if="toggle2" class="popup" @click.self="toggle2 = !toggle2">
            <div class="popup-card p-agendar">
                <h1>Soft</h1>
                <h2>Pode entrar, a casa é sua</h2>
                <h4>Vamos enviar um código de confirmação para continuarmos</h4>
                <h4>Qual é o número do seu celular?</h4>
                <input type="tel" v-model="telefone" v-maska="['(##) ####-####', '(##) #####-####']" />
                <button class="btn" :disabled="!telefone">Receber por SMS</button>
            </div>
        </div>
        </transition-group>
    </div>
</template>

<script>
import mask from 'vue-the-mask'
export default {
    directives: {mask},
    props:['source','price', 'desc', 'local', 'alter'],
    data: function(){
        return{
            telefone:null,
            toggle:false,
            toggle2:false
        }
    }
}
</script>

<style>
    :root{
        --cardwidth: 350px;
        --borderradius: 13px;
        --orangesoft: rgb(228, 110, 0);
    }

    .fade-enter-active,
    .fade-leave-active {
    transition: opacity 0.7s
    }

    .fade-enter,
    .fade-leave-to

    {
    opacity: 0
    }

    .card{
        width: var(--cardwidth);
        height: 450px;
        position:relative;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.096);
        border-radius: var(--borderradius);
        overflow: hidden;
        background: linear-gradient(#ffffff, #ffffff 50%, rgba(255, 159, 95, 0.5) 50%,rgba(255, 159, 95, 0.5));
        background-size: 100% 200%;
        /*trasition effect for background*/
        transition: all ease 1s;
    }
    .card:hover{
        transform: scale(1.03);
        background-position: 100% 35%;
    }

    .card h2,p{
        padding: 0 23px;
    }

    .card > img{
        width: var(--cardwidth);
        height: 270px;
    }

    .popup{
        position:fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
        background-color: rgba(0, 0, 0, 0.418);

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .popup-card{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        border-radius: 13px;
        overflow: hidden;
        background-color:white ;
    }

    #popup-card-imgs{
        position: relative;
        width: 600px;
        height: 500px;
    }

    #popup-card-imgs > img{
        position: absolute;
        left: 0;
        width: 600px;
        height: 500px;
        transition: opacity 1s ease
    }

    #popup-card-imgs #popup-card-2:hover{
        opacity: 0;
    }

    #popup-card-infos{
        padding: 30px;
    }

    .btn{
        display: block;
        text-decoration: none;
        border: none;
        border-radius: 7px;
        padding: 15px;
        width: 70%;
        text-align: center;
        font-size: 18px;
        margin: 10px 0;
        cursor: pointer;
        opacity: 0.8;
        transition: 0.5s ease;
    }

    .btn:hover, .p-agendar input:hover{
        opacity: 1;
    }

    .agendar{
        color: white;
        background-color: var(--orangesoft);
    }

    .duvida{
        border: 0.5px solid black;
        background-color: white;
    }

    .p-agendar{
        overflow: auto;
        padding: 30px;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 60px 80px 60px auto;
        border-radius: 30px;
        box-shadow: 0 0 20px 15px rgba(0, 0, 0, 0.068);
        width: 30%;
    }

    .p-agendar h1{
        color: var(--orangesoft);
    }

    .p-agendar input{
        border-radius: 8px;
        border: 0.2px solid rgba(0, 0, 0, 0.226);
        opacity: 0.9;
        height: 45px;
        padding: 15px;
    }

    .p-agendar input:focus{
        outline: 0.8px solid rgba(0, 0, 0, 0.226);
        border: 0.5px solid rgba(0, 0, 0, 0.226);
    }
</style>