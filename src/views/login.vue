<template>
    <div class="login-page">
        <form @submit="login" class="login-form">
            <input
                type="text"
                v-model="username"
                :placeholder="$t('account')"
                class="input-field"
            />
            <input
                type="password"
                v-model="password"
                :placeholder="$t('password')"
                class="input-field"
            />
            <button type="submit" class="login-button">{{$t('login')}}</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

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

            const req = {
                username: this.username,
                password: this.password
            }

            await this.$axiosHandler.login(req).then((res) => {
                if (res.isSuccess) {
                    this.setUser(res.data)
                    this.$router.push('/home')
                    return
                }
                this.$message.error(this.$t('login_failed'))
            })
        }
    }
}
</script>

<style scoped>
.login-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
}

.login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
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
    background-color: #0056b33d;
}
</style>
