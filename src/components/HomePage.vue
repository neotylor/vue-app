<template>
  <div>
    <h1>Hello from Home component</h1>
    <h3>{{ data }}</h3>
    <!-- <button v-on:click="clickFunction"> Click Me!</button> -->
    <!-- <button v-on:click="clickFunction('clicked data')"> Click Me!</button> -->
    <button v-on:click="display"> Click Me!</button>
    <h2 v-if="show">If true then call this</h2>
    <h2 v-else>else then call this</h2>
    <!-- <button v-on:click="display">To Uppercase!</button> -->
    <!-- uppercase filter  -->
    <h3>{{ name | uCase }}</h3>
    <h3>{{ lowercase | lCase }}</h3>
    <h3>{{ price | currencyConvert }}</h3>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    data: String,
  },
  methods: {
    clickFunction(data) {
      console.log("clickFunction " + data);
    },
    display() {
      this.show = !this.show;
    },
  },
  data() {
    return { show: false, name: "HomePage", lowercase: "HomePage", price: 150 };
  },
};
</script>