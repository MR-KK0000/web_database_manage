<template>
    <div id="homepage">
        <v-container fluid>
            <v-row class="headerpage">
                <v-col md="12" sm="12">
                    
                </v-col>
            </v-row>
            <v-row>
                <v-col md="4"></v-col>
                <v-col md="4">
                    <v-card>
                        <v-card-text>
                        <h1>MongoDB Manage</h1><br><br>
                        <v-row>
                            <v-col md="8" sm="8">
                                <v-text-field class="host-text" label="Host" v-model="host" placeholder="Enter your host" outlined></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field label="port" v-model="port" placeholder="Enter your port" outlined></v-text-field>
                            </v-col>
                        </v-row>
                        <v-text-field label="database" v-model="database" placeholder="Enter your database"></v-text-field>
                        <v-card-actions>
                            <v-col id="btn_test">
                                <v-btn color="primary" dark @click="test">Test</v-btn>
                            </v-col>
                            <v-col id="btn_con">
                                <v-btn color="green accent-4" @click="connect">connect</v-btn>
                            </v-col>
                        </v-card-actions>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col md="4"></v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style lang="scss" scoped>
h1 {
    text-align: center;
    color: rgb(0, 255, 170)
}
#btn_con {
  text-align: right;
}

#btn_con .v-btn{
    color: #ffffff
}
#btn_test .v-btn{
    text-align: left;
    color: #ffffff
}

// .v-card {
//     // background-color: #273142;
//     // border-width: -1px;
//     // border-color: #0093EE;
// }

// #homepage {
//     background-color: #222C3C;
// }

</style>

<script>
import Services from '@/services/services'
import axios from 'axios'

export default {
    name: 'hompage',
    data() {
        return {
            host: '',
            port: '',
            database: ''
        }
    },
    mounted () {
    this.getPost()
    },
    methods: { 
        async getPost () {
            const res = await Services.gettest()
            const { data } = res
            this.host = data.message
        },
        async test () {
            // var data = JSON.stringify({
            //             dd:'ddd'
            //         }) 
            //  await Services.getbuttonone({ "dd": 'ss'})
            // await axios.post('http://localhost:2002/api/b1', JSON.stringify({ dd:"ddd"}))
            await axios({
                method: 'post',
                url: 'http://localhost:2002/api/b1',
                // headers: { 'Content-Type': 'application/json' },
                data: JSON.stringify({dd: 'ddd', ff: 'sssss'})
                    
                
            })
            .then((res) => alert(res.data.message))
            .catch((e) => alert(e))
            // const response = await Services.posttestconnect({
            //     host: this.host,
            //     port: this.port
            // })
            // const { data } = response
            //  if(data.status) {
            //      alert('test success')
            //     //  this.$router.push({ name: 'dashboard' , query: { name: 'status'}})
            //  }else{
            //      alert('test not success')
            //  }
        },
        async connect () {
            const response = await Services.postconnect({
                host: this.host,
                port: this.port,
                database: this.database
            })
             const { data } = response
             if(data.status) {
                 alert('connect success')
                 this.$router.push({ name: 'dashboard' , query: { name: 'status'}})
             }else{
                 alert('connect not success')
             }
        }
    },
}
</script>