<template>
  <div id="proposta">
    <div class="proposta">
        <h1>{{proposta}}</h1>
        <h4>{{descprop}}</h4>
    </div>
  </div>
</template>

<script>
export default {
    props:['proposta', 'descprop']
}
</script>

<style>
#proposta{
    width: 100%;
    height: fit-content;
}

.proposta{
    width: 100%;
    height: 400px;
    padding: 20px;
    overflow: hidden;
    border: 0.5px solid rgba(0, 0, 0, 0.192);
    border-radius: var(--borderradius);
}

.proposta h1{
    font-size: 30px;
}

</style>