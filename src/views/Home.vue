<template>
  <div class="home">
    <center>
      <h1>{{ title }}</h1>
    </center>
  </div>
</template>

<script>
import center from '../components/Center.vue'
export default {
  data() {
    return {
      title: this.$store.state.title
    }
  },
  components: {
    center
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}
@keyframes color {
  0% {
    color: #ff6666;
  }

  50% {
    color: #66ccff;
  }

  100% {
    color: #ff6666;
  }
}
h1 {
  text-align: center;
  color: #ff6666;
  animation: color 3s infinite linear;
  transition: all 3s ease;
  cursor: default;
}
h1:hover {
  font-size: 50px;
}
</style>
