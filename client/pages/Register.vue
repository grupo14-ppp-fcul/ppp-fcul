<template>
  <!-- pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" -->
  <div>
    <div class="form-group">
      <input
        id="email"
        v-model="email"
        type="email"
        name="email"
        placeholder="Insert your email here"
        required
      />
    </div>

    <div class="form-group">
      <input
        v-model="password"
        type="password"
        name="password"
        placeholder="Insert your password here"
        required
      />
    </div>

    <!-- <div class="form-group">
      <input
        id="fname"
        v-model="name"
        type="text"
        name="fname"
        placeholder="Insert your first name here "
        required
      >
    </div>
   
    <div class="form-group">
      <input
        id="lname"
        type="text"
        name="lname"
        placeholder="Insert your last name here "
        required
      >
    </div>
    
    <div class="form-group">
      <input
        id="tel"
        type="number"
        name="tel"
        min="0"
        placeholder=" (Ex.935 981 351)"
        required
      >
    </div>


    <div class="form-group">
      <input
        type="password"
        name="confirmpassword"
        placeholder="Confirm your password"
        required
      >
    </div> 
    
    <div class="form-group">
      <input
        id="type"
        type="text"
        name="type"
        placeholder="Insert your user type c/s/t "
        required
      >
    </div> -->
    <br />
    <!-- Para apagar depois do Css -->
    <div class="form-group">
      <!-- <input type="submit" value="Create Account" @click="RegisterUser"> -->
      <button @click="RegisterUser()">Create Account</button>
      <button @click="RegisterGoogle()">TESTAR GOOGLE REGISTER</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterView',
  data() {
    return {
      password: '',
      email: '',
    }
  },
  methods: {
    RegisterGoogle() {
      const provider = new this.$fireModule.auth.GoogleAuthProvider()
      this.$fire.auth.signInWithPopup(provider)
    },
    async RegisterUser() {
      fetch('http://localhost:5050/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify({
          username: this.email,
          password: this.password,
        }),
      })
        .then((a) => a.json())
        .then((b) => console.log(b))

      const res = await fetch('https://localhost:5050/login', {
        method: 'POST',
      })
      const res2 = await res.json()
      const error = 'User does not exist'
      if (res2 === 'Invalid username or password') {
        console.log(error)
      } else {
        localStorage.setItem('token', res2.id)
        this.$router.push('profile')
      }
    },
  },
}
</script>