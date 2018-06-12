<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>This is page one</h2>
    
    <h2>Ecosystem</h2>
    <a href="/">Home</a>
    <br>
    <button @click="count++">Increase counter</button>
    <br>
    Current count = {{ count }}
  </div>
</template>

<script>
export default {
  name: 'PageOne',
  data () {
    return {
      msg: 'A page one app',
      count: 0
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
