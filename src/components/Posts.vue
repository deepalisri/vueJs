<template>
  <div class="loading" v-if="loading">Loading&#8230;</div>
  <div class="posts-wrapper content" v-else>
    <h1>Posts by <i>{{ $route.params.personName }} </i></h1>
    <router-link
          v-for="post in userPost"
          :key="post.id"
          :to="{ name: 'PostDetails', params: { postName: post.body, postTitle: post.title ,postId: post.id, loading}}"
        >
    <ol class="post-detail">
      <li v-for="post in userPost" :key="post.id">
        <h2>{{ post.title }}</h2>
        <ul>
          <li>{{ post.body }}</li>
        </ul>
      </li>
    </ol>
    </router-link>
  </div>
  <router-view :id="$route.params.postId"></router-view>
</template>

<script>
import axios from "axios";
export default {
  name: "Posts",
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

<style>
.posts-wrapper h1 {
    text-align: center;
    color: var(--green);
}
.posts-wrapper.content a {
  color: var(--black);
}
.post-detail {
  padding: 0;
}
.post-detail > li {
  padding: 0px 10px 20px 10px;
  margin: 10px 0;
  box-shadow: 0 4px 8px 0 var(--box-shadow-color);
  border: solid 1px var(--border-color);
  border-radius: 25px;
  background: var(--white);
}
.post-detail > li h2 {
  margin-bottom: 3px;
}
</style>