<template>
  <v-btn
    color="primary"
    class="text-white"
    :to="to"
    :class="{ 'button-raised': !text }"
    :block="block"
    :size="size"
    elevation="0"
  >
    <slot></slot>
  </v-btn>
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
    text: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "",
    },
  },
  computed: {
    variant() {
      // if(this.text) return "text"
      return "raised"
    }
  },
  mounted() {
    // console.log(this.text);
  }
};
</script>
<style scoped>
.button-raised {
  box-shadow: 0px 3px 5px -1px rgb(60 238 250 / 20%),
    0px 5px 8px 0px rgb(60 238 250 / 14%),
    0px 1px 14px 0px rgb(60 238 250 / 12%) !important;
}
</style>
