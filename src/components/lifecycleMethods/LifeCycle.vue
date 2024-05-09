<template>
  <div>
    <img alt="Vue logo" src="../../assets/logo.png">
    <CreatePhase />
    <br/>
    <MountPhase />
  </div>
</template>

<script>
import CreatePhase from './CreatePhase.vue';
import MountPhase from './MountPhase.vue';

export default {
  name: "LifeCycle",
  components: {
    CreatePhase,
    MountPhase,
  },
}
</script>