<template>
  <nav class="nav">
    <div class="nav-content">
        导航栏
        <!-- 名称 -->
        <div class="nav-content-title">

        </div>
        <!-- 导航栏 -->
        <div class="nav-content-bar">
            
        </div>
    </div>
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
