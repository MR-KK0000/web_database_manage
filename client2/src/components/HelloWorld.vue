<template>
<div class="Hello">
  <v-container fluid class="pa-0">
    <v-row >
       <v-col cols="12" sm="4">
       </v-col>
       <v-col cols="12" sm="4">
        <div class="center">
          <h1>{{ msg +' '+ tt}}</h1>
          <v-btn style="background-color: #00E676;"  class="btn1" small color="red" v-on:click="clickb1" >sent data</v-btn>
          <v-btn small v-on:click="clickb2" >sent data2</v-btn>
         </div>
        </v-col>
        <v-col cols="12" sm="4">
        </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
import services from '@/services/services'
export default {
  name: 'Hello',
  data () {
    return {
      title: 'Hello',
      msg: 'Hello world',
      tt: ''
    }
  },
  mounted () {
    this.getdata()
  },
  methods: {
    async getdata () {
      let res = await services.gettest()
      this.tt = res.data.message
      // console.log(res)
    },
    async clickb1 () {
      let res = await services.getbuttonone()
      this.tt = res.data.message
      console.log(res.data.message)
    },
    async clickb2 () {
      let res = await services.getbuttontwo()
      this.tt = res.data.message
      console.log(res.data.message)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center {
  text-align: center;
}

.btn1 {
  color: #ffffff;
}
.btn2 {
  background-color: #69F0AE;
  color: #00E676;
}
</style>
