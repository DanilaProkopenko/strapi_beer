<template>
    <div id="blog-post">
        id — {{ id }} <br>
        title - {{ post.title }}
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'blog-post',
    props: {
        id: {
            type: String,
            default: null,
        },
    },
    data() {
        return {
            post: []
        }
    },
    async mounted() {
        try {
            const response = await axios.get('http://localhost:1337/api/news/' + this.$route.params.id)
            this.post = response.data.data
            this.post.title = response.data.data.attributes.title

        } catch (error) {
            this.error = error
        }
    },

}
</script>

<style>
#blog-post {
    text-align: left;
}
</style>
