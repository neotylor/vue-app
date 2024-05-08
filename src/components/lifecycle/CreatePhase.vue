<template>
  <div>
    <h2>LifeCycle Before Create and Created</h2>
    <h3>Updated name {{ name }}</h3>
  </div>
</template>

<script>
export default {
  name: "CreatePhase",
  data() {
    return {
        name: "Vijendra"
    }
  },
  created() {
    console.log("After create hook in component and access name ", this.name)
    this.name = "Neo Tylor";
    console.log("After create hook in component and update name then access name ", this.name)
  },
  beforeCreate() {
    console.log("Before create component and create name ", this.name);
    this.name = "hi i'm update";
    console.log("Before create component and create name ", this.name);
  },
}
</script>