<template>
    <router-link :to="link">{{ text }}</router-link>
</template>

<script>
export default {
  name: 'LogLink',
  props: ['text', 'link']
}
</script>
