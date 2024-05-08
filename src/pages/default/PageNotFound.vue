<template>
  <div class="page-not-found" v-on:mousemove="mouseTrack">
    <main>
      <div class="circle-outer" v-bind:style="{'transform': `translateX(${x * 4}px) translateY(${y * 4}px)`}">
        <div class="circle-inner" v-bind:style="{'transform': `translateX(${-x * 1.5}px) translateY(${-y * 1.5}px)`}">
          <div class="anime">
            <div class="box box1"></div>
            <div class="box box2"></div>
            <div class="box box3"></div>
            <div class="box box4"></div>
            <div class="box box5"></div>
          </div>
          <div class="text-area">
            <h1 v-bind:style="{'textShadow': `${x / 2}px 50px 10px #1b1b1b55`}">404</h1>
            <p>Uh! look like you got lost. <br>go back home</p>
            <button class="btn"><a href="#">Home</a></button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'PageNotFound',
  methods: {
    mouseTrack(event) {
      this.x = (window.innerWidth / 2 - event.pageX) / 100 * 5;
      this.y = (window.innerHeight / 2 - event.pageY) / 100 * 6;
    }
  },
  data() {
    return {
      x: 0,
      y: 0
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: monospace;
}

.page-not-found {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  --bg-primary: #d4e7c5;
  --bg-secondary: #bfd8a4;
  --bg-tertiary: #99bc85;
  --btn: #e1f0da;
}

:root {
  --bg-primary: #d4e7c5;
  --bg-secondary: #bfd8a4;
  --bg-tertiary: #99bc85;
  --btn: #e1f0da;
}

main {
  width: 100%;
  height: 100vh;
  background: var(--bg-primary);
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle-outer {
  width: 70%;
  aspect-ratio: 1;
  max-width: 600px;
  background: var(--bg-secondary);
  border-radius: 50%;
  box-shadow: 3px 1px 5px #fff2,
    inset 3px 1px 10px #0002;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  height: var(--i);
  transition: 0.1s linear;
}

.circle-inner {
  width: 70%;
  height: 70%;
  background: var(--bg-tertiary);
  border-radius: 50%;
  box-shadow: 3px 1px 5px #fff2,
    inset 3px 1px 10px #0002;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  transition: 0.1s linear;
}

.text-area {
  position: relative;
  z-index: 2;
  color: white;
  text-align: center;
}

.text-area h1 {
  font-size: 9em;
  text-shadow: 0 50px 10px #0003;
}

.btn {
  width: 120px;
  height: 50px;
  margin-top: 10px;
  border: 0;
  border-radius: 15px;
  z-index: 1;
  background: #e8e8e8;
  position: relative;
  font-weight: 700;
  font-size: 17px;
  transition: 0.2s;
  overflow: hidden;
}

.btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  background: #212121;
  z-index: -1;
  transition: 0.2s;
}

.btn:hover {
  color: white;
}

.btn:hover::before {
  width: 100%;
}

.btn a {
  color: inherit;
  text-decoration: none;
}


.anime {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.anime .box {
  position: relative;
  height: 30px;
  border-radius: 30px;
  box-shadow: 10px 10px 10px #00000036;

}

.anime .box1 {
  width: 100px;
  background: #ff9100;
  animation: anime 17s ease-in-out infinite;
}

.anime .box2 {
  width: 100px;
  background: #82b868;
  animation: anime 10s ease-in-out infinite;
}

.anime .box3 {
  width: 80px;
  background: #6567b3;
  animation: anime 15s ease-in-out infinite;
}

.anime .box4 {
  width: 130px;
  background: #ffd891;
  animation: anime 6s ease-in-out infinite;
}

.anime .box5 {
  width: 150px;
  background: #c491ff;
  animation: anime 8s ease-in-out infinite;
}

@keyframes anime {
  0% {
    left: -30%;
  }

  50% {
    left: 100%;
    width: 150px;
  }

  100% {
    left: -30%;
  }
}
</style>