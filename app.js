
/*
  SHORTHANDS

  v-bind
  <img v-bind:src="img.src" v-bind:alt="img.src">
  same as
  <img :src="img.src" :alt="img.src">

  v-on
  <h1 v-on:click="sayHello">{{title}}</h1>
  same as
  <h1 @click="sayHello">{{title}}</h1>


*/


const helloWorld = new Vue({
  el: '#helloVue',
  data: {
    title: "HELLO WORLD!!!!",
    message: "This is a message from Vue"
  }
});

const example = new Vue({
  el: '#example',
  data: {
    title: "Hello Chewie",
    message: "have a catty day",
    name: "Joe Chesney",
    img: {
      src: 'https://placeimg.com/200/200/animals',
      alt: 'lil animal'
    }
  }
});

const book = new Vue({
  el: "#book",
  data: {
    title: 'The Sirens of Titan',
    author: 'Kurt Vonnegut',
    summary: 'This is a summary',
  },
  methods: {
    sayHello: function() {
      alert(this.title)
    }
  }
});
