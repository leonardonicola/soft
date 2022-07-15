<template>
    <div id="apes">
        <div class="card" @click="toggle = !toggle">
            <div class="card__img">
                <img :src="require('@/assets/' + source + '')">
            </div>
            <div class="card__infos">
                <h2>{{price}}</h2>
                <p>{{local}}</p>
                <p>{{desc}}</p>
            </div>
        </div>

        <transition-group name="fade">
        <div v-if="toggle" class="popup" @click.self="toggle = !toggle">
            <div class="popup__card">
                <div class="popup__card__imgs">
                    <img class="popup__card__1" :src="require('@/assets/' + alter + '')">
                    <img class="popup__card__2" :src="require('@/assets/' + source + '')">
                </div>
                <div class="popup__card__infos">
                    <h4>Valor à vista</h4>
                    <h1>{{price}}</h1>
                    <h4>{{local}}</h4>
                    <button class="btn agendar" @click.self="toggle2 = !toggle2">Agendar visita</button>
                    <h4><i>Agende sua visita gratuita e sem compromissos</i></h4>
                </div>
            </div>
        </div>
        </transition-group>
        
        <transition-group name="fade">
        <div v-if="toggle2" class="popup" @click.self="toggle2 = !toggle2">
            <div class="popup__card popup__card--agendar">
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
        --borderradius: 13px;
        --orangesoft: rgb(228, 110, 0);
    }

    #apes{
        width: 100%;
        height: fit-content;
    }

    .card{
        display: grid;
        grid-template-rows:50% 50%;
        width: 100%;
        height: 450px;
        overflow: hidden;
        background: linear-gradient(#ffffff, #ffffff 50%, rgba(255, 159, 95, 0.5) 50%,rgba(255, 159, 95, 0.5));
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.082);
        border: 0.5px solid rgba(0, 0, 0, 0.192);
        border-radius: var(--borderradius);
        background-size: 100% 205%;
        transition: all ease 2s;
    }
    .card:hover{
        transform: scale(1.03);
        background-position: 100% 80%;
    }

    .card h2,p{
        padding: 0 23px;

    }

    .card__img img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    /*POPUP */

    .popup{
        position:fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.418);
    }

    .popup__card{
        display: grid;
        width: 75%;
        height: 75%;
        overflow: auto;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        background-color:#ffffff ;
        border-radius: 13px;
    }

    .popup__card__imgs{
        position: relative;
        width: 100%;
        height: 100%;
    }

    .popup__card__imgs img{
        position: absolute;
        object-fit: cover;
        left: 0;
        width: 100%;
        height: 100%;
        transition: opacity 1s ease
    }

    .popup__card__imgs .popup__card__2:hover{
        opacity: 0;
    }

    .popup__card__infos{
        padding: 30px;
    }

    .btn{
        margin: 10px 0;
        padding: 15px;
        width: 70%;
        text-align: center;
        font-size: 18px;
        border-radius: 7px;
        border: none;
        cursor: pointer;
        opacity: 0.8;
        transition: 0.5s ease;
    }

    .btn:hover, .p-agendar input:hover{
        opacity: 1;
    }

    .agendar{
        color: #ffffff;
        background-color: var(--orangesoft);
    }

    .duvida{
        border: 0.5px solid black;
        background-color: #ffffff;
    }

    .popup__card--agendar{
        padding: 30px;
        width: 400px;
        overflow: hidden;
        grid-template-columns: 1fr;
        grid-template-rows: 100px 60px 80px 60px auto;
        border-radius: 30px;
        box-shadow: 0 0 20px 15px rgba(0, 0, 0, 0.068);
    }

    .popup__card--agendar h1{
        color: var(--orangesoft);
    }

    .popup__card--agendar input{
        height: 45px;
        padding: 15px;
        border-radius: 8px;
        border: 0.2px solid rgba(0, 0, 0, 0.226);
        opacity: 0.9;
    }

    .popup__card--agendar input:focus{
        outline: 0.8px solid rgba(0, 0, 0, 0.226);
        border: 0.5px solid rgba(0, 0, 0, 0.226);
    }

    @media screen and (max-width: 900px) {
    
        .popup__card{
            grid-template-columns: 1fr;
            grid-template-rows: 300px 1fr;
        }
        .popup__card--agendar{
            width: 70%;
            grid-template-rows: 100px 20% 20% 20%;
        }
    }

    @media screen and (max-width: 500px) {

        .popup__card{
            grid-template-columns: 1fr;
            grid-template-rows: 200px 1fr;
        }

        .popup__card--agendar{
            width: 80%;
            grid-template-rows: 100px 60px 80px 60px;
        }
    }

    /*TRANSITIONS */
    .fade-enter-active,
    .fade-leave-active {
    transition: opacity 0.7s
    }

    .fade-enter,
    .fade-leave-to

    {
    opacity: 0
    }
</style>