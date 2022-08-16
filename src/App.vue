<template>
  <router-view :key="$route.path" />
</template>

<script>
export default {
  name: "App",
  mounted() {
    // console.log(process.env.VUE_APP_ROOT_API);
  },
};
</script>
