<template>
  <v-btn
    color="primary"
    class="text-white"
    :block="block"
    :size="size"
    elevation="0"
    >Entrar</v-btn
  >
</template>
<script>
export default {
  props: {
    block: {
      type: Boolean,
      required: false,
      default: false,
    },
    size: {
      type: String,
      required: false,
      default: "default",
    },
  },
};
</script>
<style scoped>
button {
  box-shadow: 0px 3px 5px -1px rgb(60 238 250 / 20%),
    0px 5px 8px 0px rgb(60 238 250 / 14%),
    0px 1px 14px 0px rgb(60 238 250 / 12%) !important;
}
</style>
