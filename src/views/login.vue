<template>
    <div class="login-page">
        <h2>Login Page</h2>
        <form @submit="login" class="login-form">
            <input
                type="text"
                v-model="username"
                placeholder="Username"
                class="input-field"
            />
            <input
                type="password"
                v-model="password"
                placeholder="Password"
                class="input-field"
            />
            <button type="submit" class="login-button">Login</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { login } from '../script/axiosHandler'

export default {
    data () {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(['setUser']),
        async login (event) {
            event.preventDefault()
            // 在這裡處理登錄邏輯，例如發送API請求進行身份驗證
            const req = {
                username: this.username,
                password: this.password
            }

            await login(req).then((res) => {
                console.log('res', res)
                if (res.isSuccess) {
                    this.setUser(res.data)
                    this.$router.push('/home')
                    return
                }
                console.log('fail')
            })
        }
    }
}
</script>

<style>
.login-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: url("../assets/BG-brs.jpeg");
    background-size: cover;
    background-position: center;
}

.login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    background-color: #ffffff00;
    border-radius: 8px;
    box-shadow: 0px 2px 4px #00ffffd8;
}

.input-field {
    width: 300px;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.login-button {
    padding: 0.5rem 1rem;
    background-color: #00ffff3d;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.login-button:hover {
    background-color: #0056b3;
}
</style>
