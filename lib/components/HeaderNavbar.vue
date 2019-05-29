<template>
  <nav class="nav">
    <div class="nav-content">导航栏</div>
  </nav>
</template>
<script>
export default {
  mounted() {
    console.log(this.$themeConfig);
  }
};
</script>

<style lang="less" scoped>
.nav {
  &-content {
    max-width: 1200px;
    margin: 0 auto;
    outline: 1px solid red;
  }
}
</style>
