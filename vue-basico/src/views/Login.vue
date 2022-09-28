<template>
    <div class="box-login">
        <div class="logo">
            <h1>Login</h1>
        </div>
        <Input
        label="E-mail"
        placeHolder="exemplo@gmail.com"
        v-model="usuario.email"
        ></Input>

        <Input
        label="Senha"
        placeHolder="********"
        type=password
        v-model="usuario.senha"
        ></Input>

        <Button
        value="Entrar"
        :callback="login"
        ></Button>
    </div>
</template>

<script>
import Input from '@/components/input/Input.vue';
import Button from '@/components/button/Button.vue';
import Usuario from '@/models/usuario-model';
import usuarioService from '@/api/usuario-service';
import utilStorage from '@/utils/storage';

export default {
    name: 'Login',
    components: {
        Input,
        Button
    },
    data() {
        return {
            usuario: new Usuario()
        }
    },
    methods: {
        login() {
            
            if(!this.usuario.modeloValidoLogin()) {
                this.$swal({
                    icon: "warning",
                    title: "Usuário e Senha são obrigatórios!",
                    confirmButtomText: "Ok"
                })
                return;
            }

            // REQUISIÇÃO PARA O BACK-END
            usuarioService.login(this.usuario.email, this.usuario.senha)
            .then(response => {
                this.usuario = new Usuario(response.data.usuario);

                utilStorage.salvarUsuarioNaStorage(this.usuario);
                utilStorage.salvarTokenNaStorage(response.data.token);
                this.$router.push({ name: 'ControleDeProdutos' });
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
}
</script>

<style scoped>

    .box-login {
        width: 300px;
        margin: auto;
        border: 1px solid #ddd;
        margin-top: 70px;
        padding: 30px;
    }

    .logo {
        text-align: center;
        color: var(--cor-primaria);
        font-size: 22px;
    }

</style>>

</style>