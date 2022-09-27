<template>
    <div class="card">
        <img src="https://images.tcdn.com.br/img/img_prod/715047/caneta_esferografica_a_one_colors_colorida_molin_1001_1_7b2a2312a2bb6a4d87f54d9f10612545.jpg"
        alt=""
        />

        <h4>
            <slot name="nome"></slot>
        </h4>

        <p class="valor">
            <slot name="valor"></slot>
        </p>

        <p>
            <slot name="observacao"></slot>
        </p>

        <div>
            <slot name="acoes"></slot>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Card',
    data() {
        return {

        }
    },
    methods: {

    }
}

</script>

<style scoped>

    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0. 0.3);
        max-width: 270px;
        margin: 5px;
        margin-bottom: 15px;
        text-align: center;
        padding: 10px;
    }

    .valor {
        color: #666666;
        font-size: 22px;
    }

    .icones-tabela {
        margin: 5px;
        cursor: pointer;
        color: var(--cor-primaria);
}

</style>