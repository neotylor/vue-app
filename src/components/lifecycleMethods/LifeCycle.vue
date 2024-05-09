<template>
  <div>
    <img alt="Vue logo" src="../../assets/logo.png">
    <CreatePhase />
    <br/>
    <MountPhase />
    <br/>
    <UpdatePhase />
    <br/>
    <DestroyPhase v-if="toggle"/>
    <button v-on:click="toggle = !toggle">
      Toggle component
    </button>
  </div>
</template>

<script>
import CreatePhase from './CreatePhase.vue';
import MountPhase from './MountPhase.vue';
import UpdatePhase from './UpdatePhase.vue';
import DestroyPhase from './DestroyPhase.vue';

export default {
  name: "LifeCycle",
  components: {
    CreatePhase,
    MountPhase,
    UpdatePhase,
    DestroyPhase,
  },
  data() {
    return {
      toggle: true,
    }
  }
}
</script>