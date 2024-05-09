<template>
    <div id="destroyable-component">
      <h1>Before destroy And destroyed Example</h1>
      <h2>LifeCycle Before destroy and destroyed</h2>
    </div>
  </template>
  
  <script>
  export default {
    name: "DestroyPhase",
    destroyed() {
      console.log("Destroyed method called for this component.");
    },
    beforeDestroy() {
      console.log("Before destroy component for this component.");
    },
  }
  </script>