<template>
    <div id="apes">
        <div class="card" @click="handleClick()">
            <img :src="require('@/assets/' + source + '')">
            <h2>{{price}}</h2>
            <p>{{local}}</p>
            <p>{{desc}}</p>
        </div>
        <div v-if="toggle" id="popup" @click.self="handleClick()">
            <div id="popup-card">
                <div id="popup-card-imgs">
                    <img id="popup-card-1" :src="require('@/assets/' + alter + '')">
                    <img id="popup-card-2" :src="require('@/assets/' + source + '')">
                </div>
                <div id="popup-card-infos">
                    <h2>{{price}}</h2>
                    <h4>{{local}}</h4>
                    <h4>{{desc}}</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['source','price', 'desc', 'local', 'alter'],
    data: function(){
        return{
            toggle:false
        }
    },
    methods:{
        handleClick(){
            this.toggle = !this.toggle
        }
    }
}
</script>

<style>
    :root{
        --cardwidth: 350px;
        --borderradius: 13px;
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

    #popup{
        position:fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
        background-color: rgba(0, 0, 0, 0.541);

        display: flex;
        align-items: center;
        justify-content: center;
    }

    #popup-card{
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
</style>