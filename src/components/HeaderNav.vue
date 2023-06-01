<template>
    <div>
        <nav class="uk-navbar-container" uk-navbar>
            <div class="uk-navbar-left">
                <ul class="uk-navbar-nav">
                    <router-link :to="'/blog/'">
                        блог
                    </router-link>
                    <router-link :to="'/booking-form'">
                        Форма
                    </router-link>
                    <router-link :to="'/test-blog'">
                        Тестовый блог
                    </router-link>
                </ul>
            </div>
        </nav>
    </div>
</template>
  
<script>
export default {
    name: "HeaderNav"
};
</script>