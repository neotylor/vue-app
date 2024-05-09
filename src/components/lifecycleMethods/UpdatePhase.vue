<template>
  <div>
    <h1>Before update And updated Example</h1>
    <h2>LifeCycle Before update and updated</h2>
    <h3 ref="counter">Counter value {{ counter }}</h3>
    <div class="flex">
      <button v-on:click="increment">
        increment
      </button>
      <button v-on:click="decrement">
        decrement
      </button>
      <button v-on:click="reset">
        reset
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpdatePhase",
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment() { this.counter += 1; },
    decrement() { this.counter -= 1; },
    reset() { this.counter = 0 },
  },
  updated() {
    console.log("updated method called for this component. counter value is", this.counter);
    console.log("updated method called for this component. counter html is", this.$refs['counter'].textContent);
  },
  beforeUpdate() {
    console.log("Before update component for this component. counter value is", this.counter);
    console.log("Before update component for this component. counter html is", this.$refs['counter'].textContent);
  },
}
</script>

<style scoped>
  .flex {
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
  }
  button {
    padding: 8px 12px;
    border: none;
    box-sizing: border-box;
    border-radius: 5px;
  }
</style>