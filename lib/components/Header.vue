<template>
    <div>
        <HeaderNavbar />
    </div>
</template>
<script>
import HeaderNavbar from "./HeaderNavbar"
export default {
    components:{
        HeaderNavbar
    },
    mounted(){
        console.log(this.$themeConfig)
    }
}
</script>
