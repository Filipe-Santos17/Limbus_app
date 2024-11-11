<template>
    <LoginScreen>
        <template #form>
            <section class="bg-white rounded p-6 w-[45%] max-w-[600px] min-w-[400px]">
                <form id="form-login-box" class="grid grid-cols-1 gap-8 w-full">
                    <header>
                        <img src="" alt=""/>
                        <h3>Bem vindo de volta,  Insira seu e-mail e senha para entrar em sua conta.</h3>
                    </header>
                    <main class="flex flex-col gap-2">
                        <InputTextLogin id-input="email-login" p-text="Insira seu e-mail" title-label="E-mail" />
                        <InputTextLogin id-input="password-login" p-text="Insira sua senha" title-label="Senha">
                            <template #bottom-input>
                                <a href="#" class="text-xs text-[#686E74] font-medium mt-4 hover:underline">Esqueceu a senha ?</a>
                            </template>
                        </InputTextLogin>
                    </main>
                    <footer>
                        <button class="">Entrar na conta</button>
                    </footer>
                </form>
            </section>
        </template>
    </LoginScreen>
</template>

<script>
import LoginScreen from '@/screens/login.screen.vue';
import InputTextLogin from '@/components/login/input_text_login.vue';

export default {
    components: {
        LoginScreen,
        InputTextLogin
    },
    methods:{
        sendDataLoginToBackend(){
            
        }
    }
};
</script>