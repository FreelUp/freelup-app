<template>
  <app-logo></app-logo>
  <div class="d-flex justify-center">
    <app-btn block size="x-large"></app-btn>
  </div>
</template>
<script>
import AppLogo from "./../components/AppLogo.vue";
import AppBtn from "./../components/AppBtn.vue";

export default {
    components: {
        AppLogo,
        AppBtn
    }
}
</script>
