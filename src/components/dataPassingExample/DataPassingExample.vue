<template>
  <div>
    <h2>send child to parent data component</h2>
    <ChildToParentData />
  </div>
</template>

<script>
import ChildToParentData from './childToParentData/ChildToParentData.vue';

export default {
  name: "DataPassingExample",
  components: {
    ChildToParentData,
  }
}
</script>