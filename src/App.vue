
<template>
  <div id="app">
    <header>
      <h1>Straker Translation Assignment</h1>
    </header>

    <main>
      <div class="flex">
        <nav>
          <ul>
            <div v-for="user, i in users">
              <button class="btn" v-on:click="Showpost(user.id, i)">{{ user.name }}</button>
            </div>
          </ul>
        </nav>

        <article>
          <v-app id="inspire">
            <div class="search-wrapper" v-if="this.posts.length>0">
              <input type="text" v-model="search" placeholder="Search Title" />
            </div>
            <v-expansion-panels v-model="userpost">
              <v-expansion-panel v-for="post in filteredList">
                <v-expansion-panel-header>
                  <button class="btn">{{ post.title }}</button>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div class="card">
                    <div class="card-body">
                      <div>
                        <h1>{{ post.title }}</h1>
                        <p>{{ post.body }}</p>
                        <p>{{ post.id }}</p>
                      </div>
                    </div>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-app>
        </article>
      </div>

      <footer>
        <p>Footer</p>
      </footer>
    </main>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: [],
      posts: [],
      userpost: "",
      search: ""
    };
  },

  mounted() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        this.users = data;
      });
  },

  computed: {
    filteredList() {
      return this.posts.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },

  methods: {
    Showpost(id, i) {
      fetch("https://jsonplaceholder.typicode.com/posts?userId=" + id)
        .then(response => response.json())
        .then(data => {
          this.posts = data;
          this.userpost = [];
        });
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}

/* Style the header */
header {
  background-color: #56c3e5;
  padding: 30px;
  text-align: center;
  font-size: 35px;
  color: white;
  height: auto;
}

/* Create two columns/boxes that floats next to each other */
nav {
  float: left;
  width: 20%;
  height: auto; /* only for demonstration, should be removed */
  background: #ccc;
  padding: 20px;
}

/* Style the list inside the menu */
nav ul {
  list-style-type: none;
  text-align: left;
  padding: 0;
}

article {
  float: left;
  width: 80%;
  background-color: #f1f1f1;
  height: auto; /* only for demonstration, should be removed */
}

/* Clear floats after the columns */
section:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the footer */
footer {
  background-color: #777;
  padding: 10px;
  text-align: center;
  color: white;
}

.search-wrapper {
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  align-items: flex-end;
  display: flex;
  flex-direction: column;

  label {
    position: absolute;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    top: 8px;
    left: 12px;
    z-index: -1;
    transition: 0.15s all ease-in-out;
  }
  input {
    padding: 4px 12px;
    color: rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(0, 0, 0, 0.12);
    transition: 0.15s all ease-in-out;
    background: white;
    width: 300px;
    &:focus {
      outline: none;
      transform: scale(1.05);
      & + label {
        font-size: 10px;
        transform: translateY(-24px) translateX(-12px);
      }
    }
    &::-webkit-input-placeholder {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.5);
      font-weight: 100;
    }
  }
}
</style>
