<template>
    <div id="blog-post">
        <p>
            id — {{ id }}
        </p>
        <p>
            title - {{ post.title }}
        </p>
        <p>
            content - {{ post.content }}
        </p>
        <p>
            description - {{ post.description }}
        </p>
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
            this.post = response.data.data;
            this.post.title = response.data.data.attributes.title;
            this.post.description = response.data.data.attributes.description;
            this.post.content = response.data.data.attributes.content;

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
