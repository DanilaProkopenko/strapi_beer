<template>
    <div v-if="error">
        {{ error }}
    </div>
    <form id="form" v-on:submit="handleSubmit" v-else>
        <label for="name">name</label>
        <input required id="name" v-model="modifiedData.name" type="text" name="name">
        <input type="submit" value="Submit">
    </form>
    {{ modifiedData }}
</template>

<script>
import axios from 'axios';
import { createStore } from 'vuex'

export default {
    name: 'BookingForm',
    data() {
        return {
            modifiedData: {
                name: '',
            },
            error: null
        }
    },
    methods: {

        resetData: function () {
            this.modifiedData.name = '';
        },

        handleSubmit: async function (e) {
            e.preventDefault();

            try {
                // const response = await axios.post('http://localhost:1337/api/news', this.modifiedData)
                const response = await axios.post('http://localhost:1337/api/booking-forms', { "data": this.modifiedData })
                console.log(response);
                alert('Your contact has send succesfull')
                this.resetData()
            } catch (error) {
                this.error = error;
                console.log('error')
            }
        }
    },
    // Create a new store instance.

}
const store = createStore({
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})
// axios
//     .post('http://localhost:1337/api/news', {
//         "data": {
//             title: 'Dolemon Sushi',
//         }
//     })
//     .then(response => {
//         console.log(response);
//     });
</script>