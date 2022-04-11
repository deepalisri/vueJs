<template>
  <div class="loading" v-if="loading">Loading&#8230;</div>
  <div class="content" v-else>
    <h1>Users</h1>
    <div class="container">
      <div class="users">
        <router-link
          v-for="person in user"
          :key="person.id"
          :to="{ name: 'UserDetail', params: { personName: person.name ,id: person.id, loading}}"
        >
          <h2>{{ person.name }}</h2>
          <h3>{{ person.username }}</h3>
          <p>{{ person.email }}</p>
          <p>{{ person.phone }}</p>
          <p>{{ person.website }}</p>
          <address v-for="data in person.address" :key="data.suite">
            {{ data }}
          </address>
        </router-link>
      </div>
    </div>
  </div>
  <router-view :id="$route.params.id"></router-view>
</template>

<script>
import axios from "axios";
export default {
  name: "Users",
  computed: {
    console: () => console,
    window: () => window,
  },
  data() {
    return {
      user: [],
      loading: true,
    };
  },
  created() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.loading = false;
      this.user = res.data;
    });
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.container {
  margin: 20px;
}
.users {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
.users a {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 40px 10px;
  text-align: center;
  cursor: pointer;
  color: black;
}
@media only screen and (max-width: 600px) {
  .users {
    grid-template-columns: 1fr;
  }
}
</style>