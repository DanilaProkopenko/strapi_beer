<template>
    <div v-if="error">
        {{ error }}
    </div>
    <div v-else id="blog-home">
        <h1>{{ page_title }}</h1>
        <!-- Создаём `v-for` и добавляем `key` для Vue. -->
        <!-- Для этого используем комбинацию slug и index -->
        <!-- <div v-for="(post, index) in posts" :key="post.slug + '_' + index"> -->
        <div v-for="post in posts" :key="post.id">
            <router-link :to="'/blog/' + post.id">
                <h2>{{ post.attributes.title }}</h2>
            </router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'blog-home',
    data() {
        return {
            page_title: 'Blog',
            posts: []
        }
    },
    async mounted() {
        try {
            const response = await axios.get('http://localhost:1337/api/news') ///  api/news/:id
            this.posts = response.data.data
        } catch (error) {
            this.error = error;
        }
    }
}
</script>