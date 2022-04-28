<template>
  <div class="loading" v-if="loading">Loading&#8230;</div>
  <div class="posts-detail-wrapper" v-else>
    <h1>Comments Discussion</h1>
    <h4>{{ $route.params.postName }}</h4>
    <div class="post-comments-container">
    <div
      class="post-comments"
      v-for="comments in postComments"
      :key="comments.id"
    >
      <div class="circle-img">{{ comments.name.charAt(0) }}</div>
      <div class="comment-details">
        <h2>{{ comments.name }}</h2>
        <p>{{ comments.email }}</p>
        <p>{{ comments.body }}</p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PostDetails",
  data() {
    return {
      postComments: [],
      loading: true,
    };
  },
  computed: {
    console: () => console,
    window: () => window,
  },
  created() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${this.$route.params.postId}/comments`
      )
      .then((res) => {
        this.loading = false;
        this.postComments = res.data;
      });
  },
};
</script>

<style>
.posts-detail-wrapper .post-comments-container {
    display: flex;
    flex-direction: column;
}
.posts-detail-wrapper h1 {
  color: var(--green);
}
.posts-detail-wrapper .post-comments-container .post-comments {
  display: flex;
  align-items: flex-start;
  padding: 10px 10px 20px 10px;
  margin: 10px 0;
  box-shadow: 0 4px 8px 0 var(--box-shadow-color);
  border: solid 1px var(--border-color);
  border-radius: 25px;
  background: var(--white);
  max-width: 50%;
}
.posts-detail-wrapper .post-comments-container .post-comments .circle-img {
  min-width: 50px;
  height: 50px;
  border: solid 1px var(--white);
  border-radius: 50%;
  margin-right: 15px;
  color: var(--white);
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  padding: 8px 0;
}
.posts-detail-wrapper .post-comments-container .post-comments:nth-of-type(even) .circle-img {
  background: var(--green);
}
.posts-detail-wrapper .post-comments-container .post-comments:nth-of-type(odd) .circle-img {
  background: var(--purple);
}
.posts-detail-wrapper .post-comments-container .post-comments .comment-details h2 {
  margin: 0;
}
</style>