<template>
  <div class="loading" v-if="loading">Loading&#8230;</div>
  <div class="content" v-else>
    <h1>Users</h1>
    <div class="container">
      <div class="users">
        <router-link
          v-for="person in user"
          :key="person.id"
          :to="{ name: 'Posts', params: { personName: person.name ,id: person.id, loading}}"
        >
          <h2>{{ person.name }}</h2>
          <h3><font-awesome-icon icon="user" /> {{ person.username }}</h3>
          <p class="email"><font-awesome-icon icon="envelope" /> {{ person.email }}</p>
          <p class="phone"><font-awesome-icon icon="phone" /> {{ person.phone }}</p>
          <p class="website"><font-awesome-icon icon="globe" /> {{ person.website }}</p>
          <font-awesome-icon icon="address-book" />
          <address v-for="data in person.address" :key="data.suite" class="address">
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

<style>
.content h1 {
  text-align: center;
  color: var(--green);
}
.container {
  margin: 20px 0;
}
.users {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
.users a {
  box-shadow: 0 4px 8px 0 var(--box-shadow-color);
  transition: 0.3s;
  padding: 20px 10px;
  cursor: pointer;
  color: var(--black);
  border: solid 1px var(--border-color);
  border-radius: 25px;
  background: var(--white);
}
.website {
  color: var(--link-text);
}
.email {
  color: var(--green);
}
.address {
  color: var(--purple);
}
@media only screen and (max-width: 600px) {
  .users {
    grid-template-columns: 1fr;
  }
}
</style>