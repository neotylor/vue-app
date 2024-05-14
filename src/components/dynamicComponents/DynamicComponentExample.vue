<template>
  <div>
    <h1>Test /examples/dynamic-component-example <b-button type="button" variant="primary" v-on:click="switchComponent">Change</b-button> </h1>
    <b>Load dynamic Component: {{ cmp }}</b>
    <component v-bind:is="cmp"></component>
  </div>
</template>

<script>
import BorderedComponentVue from './BorderedComponent.vue'
import SolidComponentVue from './SolidComponent.vue'

export default {
  name: 'DynamicComponentExample',
  components: {
    borderedComponent: BorderedComponentVue,
    solidComponent: SolidComponentVue,
  },
  data() {
    return { 
      cmp: 'borderedComponent'
    }
  },
  methods: {
    switchComponent() {
      this.cmp = this.cmp === 'borderedComponent'? 'solidComponent' : 'borderedComponent'
    }
  }
}
</script>

<style>
@media (min-width: 576px) {
    .card-deck {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-flow: row wrap;
        flex-flow: row wrap;
        margin-right: -15px;
        margin-left: -15px;
        gap: 1rem;
    }
}
</style>