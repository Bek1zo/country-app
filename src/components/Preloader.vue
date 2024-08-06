<script setup lang="ts">

</script>

<template>
  <div class="preloder">
    <div class="loder">

    </div>
  </div>
</template>

<style scoped lang="scss">
*{
  margin: 0;
  padding: 0;
}

.preloder{
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.5);
  z-index: 10;
}


.loder{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid #D1DFFF;
  border-top: 8px solid #3775FF;
  animation: spinner 1s linear infinite;
}

@keyframes spinner{
  0%{
    transform: rotate(0deg);

  }
  50%{
    border-top-width: 5px;
  }
  100%{
    transform: rotate(360deg);
  }
}

@media screen and (max-width: 668px){
  .loder{
    height: 60px;
    width: 60px;
    border-top: 6px solid #3775FF;
  }
}



</style>