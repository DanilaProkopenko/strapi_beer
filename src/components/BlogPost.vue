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
      
        <!-- http://localhost:1337/uploads/1226675_27554150a4.jpg -->
        <img :src="'http://localhost:1337' + cover" alt="">
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
            post: [
            ],
            cover: {
                type: String,
                default: null,
            },
        }
    },
    async mounted() {
        try {
            const response = await axios.get('http://localhost:1337/api/news/' + this.$route.params.id + ' ?populate=*')
            this.post = response.data.data;
            this.post.title = response.data.data.attributes.title;
            this.post.description = response.data.data.attributes.description;
            this.post.content = response.data.data.attributes.content;
            this.post.coverUrl = response.data.data.attributes.cover.data.attributes.url;
            this.cover = this.post.coverUrl 
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
img{
    max-width: 300px;
}
</style>
