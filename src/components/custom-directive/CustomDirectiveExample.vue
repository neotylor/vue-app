<template>
  <div v-size>
    <h1 v-size>CustomDirectiveExample default</h1>
    <h1 v-customSize="'small'">CustomDirectiveExample small</h1>
    <h1 v-customSize="'medium'">CustomDirectiveExample medium</h1>
    <h1 v-customSize="'large'">CustomDirectiveExample large</h1>
    <h1 v-customSize="'big'">CustomDirectiveExample big</h1>
    <h1 v-customSize>CustomDirectiveExample default</h1>
  </div>
</template>

<script>
export default {
  name: 'CustomDirectiveExample',
}
</script>