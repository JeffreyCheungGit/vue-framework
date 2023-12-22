<template>
  <div class="height-full position-relative flex-column flex-align-center flex-vertical-center">
    <div>404 Not Found</div>
    <div class="foot-button">
      <button round class="el-icon-close" @click="$router.push({ name: 'home' })">Back</button>
    </div>
  </div>
</template>
