<template>
  <v-img :src="logo" contain height="150" />
</template>
<script>
import logo from '../../assets/logo-light.svg'

export default {
    name: "AppLogo",
    data: () => ({
        logo
    })
}
</script>