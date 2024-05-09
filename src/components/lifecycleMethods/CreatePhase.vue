<template>
  <div>
    <h1>Before Create And Created example</h1>
    <h2>LifeCycle Before Create and Created</h2>
    <h3>Updated name {{ name }}</h3>
  </div>
</template>

<script>
export default {
  name: "CreatePhase",
  data() {
    return {
        name: "Vijendra Rai"
    }
  },
  created() {
    console.log("After create hook in component and access name ", this.name)
    this.name = "Neo Tylor"; // this update becouse component is created
    console.log("After create hook in component and update name then access name ", this.name)
    console.log("created method called. variable is ", this.name);
  },
  beforeCreate() {
    console.log("Before create component and create name ", this.name);
    // this update not will happen becouse component is not create yet.
    this.name = "hi i'm update";
    console.log("Before create component and create name ", this.name);
  },
}
</script>