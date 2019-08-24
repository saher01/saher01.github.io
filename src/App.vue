
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
							<button class="btn" v-on:click="Showpost(user.id, i)" >{{ user.name }}</button>
						</div>
					</ul>
				</nav>
					<article>	
						<v-app id="inspire">
							<v-expansion-panels v-model="userpost">
								
							<v-expansion-panel v-for="post in filterposts" >
								<v-expansion-panel-header><button class="btn">{{ post.title }}</button></v-expansion-panel-header>
								<v-expansion-panel-content>

								<div class="card">
									<div class="card-body">
									<div>
										<h1 >{{ post.title }}</h1>
										<p >{{ post.body }}</p>
										<p >{{ post.id }}</p>
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
	import axios from 'axios'
	export default {
		data(){

			return{
			users: {},
			posts: {},
			postx: {},
			filterposts: {},
			post: '',
			userpost: ''	
			}
			
		},
		
		
		mounted() {
    		fetch("https://jsonplaceholder.typicode.com/users")
      		.then(response => response.json())
      		.then((data) => {
        	this.users = data;

      		})
		  },
		  
		  computed: {
				filteredList() {
				return this.filterposts.filter(post => {
					return filterposts.title.toLowerCase().includes(this.search.toLowerCase())
				})
				}
			},
		
		methods:{
			Showpost(id, i) {
				fetch("https://jsonplaceholder.typicode.com/posts?userId=" + id)
				.then(response => response.json())
				.then((data) => {
				this.posts = data;
				this.filterposts=this.posts;
				this.postx = "";
				this.userpost=[];
				
				})
    		},

			ShowPostContent(id){
				// fetch("https://jsonplaceholder.typicode.com/posts?id=" + id)
				// .then(response => response.json())
				// .then((data) => {
				// this.postx = data;
				

				// })
				this.postx = this.posts[id].body;
			},  
		}
	}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

h1, h2 {
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

.flex{
display:flex;
flex-wrap:wrap;
}

/* Style the header */
header {
  background-color: #56C3E5;
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
</style>
