<template>
    <div v-if="error">
        {{ error }}
    </div>
    <form id="form" v-on:submit="handleSubmit" v-else>
        <label for="title">title</label>
        <input id="title" v-model="modifiedData.title" type="text" name="title">

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
                title: '',
            },
            error: null
        }
    },
    methods: {
        handleSubmit: async function (e) {
            e.preventDefault();

            try {
                // const response = await axios.post('http://localhost:1337/api/news', this.modifiedData)
                const response = await axios.post('http://localhost:1337/api/news', { "data" : this.modifiedData})
                // const response2 = await axios.post('http://localhost:1337/api/news', { "data": { title: 'test' } })
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