<template>
    <div v-if="error">
        {{ error }}
    </div>
    <form id="form" v-on:submit="handleSubmit" v-else>
        <label for="name">name</label>
        <input required id="name" v-model="modifiedData.name" type="text" name="name">
        <input type="submit" value="Submit">
    </form>
</template>

<script>
import axios from 'axios'

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
        handleSubmit: async function (e) {
            e.preventDefault();

            try {
                // const response = await axios.post('http://localhost:1337/api/news', this.modifiedData)
                const response = await axios.post('http://localhost:1337/api/booking-forms', { "data" : this.modifiedData})
                console.log(response);
            } catch (error) {
                this.error = error;
            }
        }
    }
}

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