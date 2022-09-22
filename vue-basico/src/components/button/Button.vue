<template>
    <button @click="callback" >{{ value }}</button>
</template>

<script>

export default {
    name: 'Button',
    props: {
        value: {type: String, require},
        callback: { type: Function, default: () => {} }
    }
}
</script>

<style scoped>
    
    button {
        width: 100%;
        background-color: var(--cor-primaria);
        color: #fff;
        padding: 9px 20px;
        margin: 9px 0;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: .15s;
    }

    button:hover {
        background-color: var(--cor-secundaria);
    }

</style>