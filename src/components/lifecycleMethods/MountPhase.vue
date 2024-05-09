<template>
  <div>
    <h1>Before Mount And Mounted Example</h1>
    <h2>LifeCycle Before Mount and Mounted</h2>
    <h3>Updated name {{ name }}</h3>
  </div>
</template>

<script>
export default {
  name: "MountPhase",
  data() {
    return {
      name: "Vijendra Rai"
    }
  },
  mounted() {
    console.log("Mounted method called for this component. and it's html ", this.$el);
  },
  beforeMount() {
    console.log("Before Mount component for this component. and it's html", this.$el);
  },
}
</script>