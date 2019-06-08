<template>
    <div class="login">
        <h1>LOGIN</h1>
        <div class="login-form">
        <b-form @submit="onSubmit">
            <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
            >
                <b-form-input
                id="input-1"
                v-model="email"
                type="email"
                required
                v-bind:class="{'is-invalid': $v.email.$invalid && email}"
                placeholder="Enter email"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
                <b-form-input
                id="input-2"
                v-model="password"
                type="password"
                required
                v-bind:class="{'is-invalid': $v.password.$invalid && password}"
                placeholder="Enter Password"
                ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Login</b-button>
        </b-form>
        </div>
    </div>
</template>

<script>
    import { required, minLength, email} from 'vuelidate/lib/validators'
    import router from '@/router/index'
    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        validations:{
            email:{
                required,
                email
            },
            password:{
                required,
                minLength: minLength(6)
            }
        },
        methods: {
            onSubmit(evt) {
                router.push({name: 'Question'})
            }
        }
    }
</script>

<style scoped>
    .login{
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
    }
    
    .login-form{
        min-width: 500px;
        max-width: 700px;
        padding: 20px;
        border: 1px solid #ccc;
        margin: 50px;
        text-align: left;
    }
</style>
