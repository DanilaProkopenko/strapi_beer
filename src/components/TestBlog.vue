<template>
    <div id="test-blog">
       post-name — {{ post.name }} <br>
        post — {{ post }}
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'TestBlog',
    data() {
        return {
            post: []
        }
    },
    async mounted() {
        try {
            const response = await axios.get('http://localhost:1337/api/booking-forms/1')
            // this.post = response.data.data
            this.post.name = response.data.data.attributes.name //рабоает
            this.post.title = response.data.data.attributes.name //рабоает
        } catch (error) {
            this.error = error
        }
    },

}

</script>

<style>
#test-blog {
    text-align: left;
}
</style>
