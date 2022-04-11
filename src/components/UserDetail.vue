<template>
{{console.log($route)}}
  <div class="loading" v-if="loading">Loading&#8230;</div>
  <div class="posts-wrapper content" v-else>
    <h1>Posts by <i>{{ $route.params.personName }} </i></h1>
    <ol class="post-detail">
      <li v-for="post in userPost" :key="post.id">
        <h2>{{ post.title }}</h2>
        <ul>
          <li>{{ post.body }}</li>
        </ul>
      </li>
    </ol>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserDetail",
  data() {
    return {
      userPost: [],
      loading: true
    };
  },
  computed: {
    console: () => console,
    window: () => window,
  },
  created() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users/${this.$route.params.id}/posts`
      )
      .then((res) => {
          this.loading = false
        this.userPost = res.data;
      });
  },
};
</script>

<style scoped>
.posts-wrapper h1 {
    text-align: center;
}
.post-detail > li {
  padding: 10px;
  margin: 10px 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>