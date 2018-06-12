<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>GitHub Search</h2>
    
    <h2>Ecosystem</h2>
    <a href="/">Home</a>
    <form v-on:submit.prevent="queryGitHub()">
      <input type="text" placeholder="GitHub username" v-model="query" />
    </form>
    <div class="results" v-if="results">
      <!-- {{ results }} -->
      <img v-bind:src="results.avatar_url">
      <h2>{{ results.name }}</h2>
      <div>{{ results.bio }}</div>
      <div>{{ results.location }} </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GitHub',
  data () {
    return {
      msg: 'A page one app',
      count: 0,
      results: null,
      query: 'sdkcodes'
    }
  },
  methods: {
    queryGitHub(){
      let self = this;
      fetch(`https://api.github.com/users/${this.query}`)
      .then((j) => {
        return j.json();
      }).then((r) => {
        console.log(r);
        self.results = r;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
